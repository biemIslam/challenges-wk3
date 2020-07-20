// i like to leave my commented lines of code to show errors
// and progress

var canvas = document.getElementById("canvas");
var frameCanvas = document.getElementById("frame-canvas");
var ctx = canvas.getContext("2d");
var framectx = frameCanvas.getContext("2d");

ctx.font = "30px Comic Sans MS";
ctx.fillStyle = "red";
ctx.textAlign = "center";
ctx.fillText("Upload Image", canvas.width / 2, canvas.height / 2);




var imagePreview = document.getElementById('image-preview');
var imageFrame = document.getElementById('image-frame');
var btnClick = document.getElementById('btn-click-file');
var setImgClick = document.getElementById('set-img');
var inputImageFile = document.getElementById('imageUpload');
var generateClick = document.getElementById('generate');
var inputValue = document.getElementById('name');



btnClick.addEventListener('click', () => {
    inputImageFile.click();
});

document.getElementById('change').addEventListener('click', () => {
    inputImageFile.click();
});





function readImageUrl(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            imagePreview.setAttribute('src', e.target.result);
            // imageFramePreview.setAttribute('src', e.target.result);

            function setImage(ctx, frame, imagePreview) {
                if (!imagePreview.complete) {
                    setTimeout(() => {
                        setImage(ctx, frame, imagePreview)
                    }, 50);
                    return;
                }

                var hRatio = canvas.width / imagePreview.width;
                var vRatio = canvas.height / imagePreview.height;
                var ratio = Math.min(hRatio, vRatio);

                // to center image in canvas
                // var centerShift_x = (canvas.width - imagePreview.width * ratio) / 2;
                // var centerShift_y = (canvas.height - imagePreview.height * ratio) / 2;
                // ctx.drawImage(imagePreview, 0, 0, imagePreview.width, imagePreview.height,
                //     centerShift_x, centerShift_y, imagePreview.width * ratio, imagePreview.height * ratio);  
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(imagePreview, 0, 0, imagePreview.width, imagePreview.height, 0, 0, canvas.width, canvas.height);
                
                framectx.drawImage(imagePreview, 10, 10, imagePreview.width, imagePreview.height, 25, 30, 260, 247);
                // framectx.drawImage(imagePreview, 0, 0, imagePreview.width, imagePreview.height, 0, 0, frameCanvas.width, frameCanvas.height);
                framectx.drawImage(imageFrame, 0, 0, imageFrame.width, imageFrame.height, 0, 0, frameCanvas.width, frameCanvas.height);
                // framectx.drawImage(imagePreview, 0, 0, imagePreview.width, imagePreview.height, 0, 0, frameCanvas.width, frameCanvas.height);
                

                btnClick.style.display = 'none';
                var x, i;
                x = document.querySelectorAll(".hide-btn");
                for (i = 0; i < x.length; i++) {
                x[i].style.display = "inline-block";
                }
            }

            setImage(ctx, frame, imagePreview);
            // ctx.drawImage(imagePreview, 0, 0);
            // framectx.drawImage(document.getElementById('image-frame'), 0, 0);

            // if (prevImg) {
            //     ctx.fillStyle = "#333";
            //     ctx.textAlign = "center";
            //     ctx.fillText("", canvas.width / 2, canvas.height / 2);
            // }
            // window.onload = function () {

            // var imgWidth = inputImageFile.width * 2;
            // var imgHeight    = inputImageFile.height * 2;
            // ctx.drawImage(imagePreview, 0, 0, imgWidth, imgHeight);


            // }
        }
        reader.readAsDataURL(input.files[0]);
    }
}


document.getElementById('remove').addEventListener('click', () => {
    // inputImageFile.click();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("Upload Image", canvas.width / 2, canvas.height / 2);
})

generateClick.addEventListener('click', () => {
    var username = document.getElementById('username');
    // var yourname = document.getElementById('name');
    var boxNone = document.getElementById('instructions');
    var canvasboxNone = document.getElementById('canvas-box');
    var dpFrame = document.getElementById('frame');

    if (inputValue.value == '') {
        var para = document.createElement('p');
        var paraText = document.createTextNode('Text field can not be blank');
        var paraElem = para.appendChild(paraText);
        para.style.color = 'tomato';
        para.style.fontSize = '1.2em';
        var textInfo = document.getElementById('text-info');
        var appendPara = textInfo.insertBefore(para, textInfo.children[0]);
    }
    else {
        // var n, j;
        // n = document.querySelectorAll(".username");
        // for (j = 0; j < n.length; j++) {
        //     n[j].innerHTML = inputValue.value;
        // }
      
        // inputValue.style.textTransform = 'capitalize'
        var userInput = inputValue.value
        username.innerHTML = userInput;
        boxNone.style.display = 'none';
        canvasboxNone.style.display = 'none';
        dpFrame.style.display = 'block';

        framectx.font = "bold 13px Comic Sans MS";
        framectx.fillStyle = "#100229";
        // framectx.textAlign = "center";
        if (userInput.length > 4) {
            framectx.fillText("Beautifully made for you, ", 50, 50);
            framectx.fillText(userInput.toUpperCase(), 50, 70);
        }
        else {
            framectx.fillText("Beautifully made for you, " + userInput.toUpperCase(), 50, 50);
        }
        
    }

})

document.getElementById('download-btn').addEventListener('click', () => {
    // let imgPath = imageFramePreview.getAttribute("src");
    // let imgFilename = getImgFilename(imgPath);

    let customFilename = inputValue.value + 'DP' + '.png';
    // alert('fdfg')

    frameCanvas.toBlob(function (blob) {
        saveAs(blob, customFilename);
    });

    // saveAs(imgPath, imgFilename);
});

// function getImgFilename(filename) {
//     return filename.substring(filename.lastIndexOf('/') + 1);
// }
    

