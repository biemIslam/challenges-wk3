
var canvas = document.getElementById("canvas");
var frameCanvas = document.getElementById("frame-canvas");
var ctx = canvas.getContext("2d");
var framectx = frameCanvas.getContext("2d");

ctx.font = "30px Comic Sans MS";
ctx.fillStyle = "red";
ctx.textAlign = "center";
ctx.fillText("Upload Image", canvas.width / 2, canvas.height / 2);




var imagePreview = document.getElementById('image-preview');
var imageFramePreview = document.getElementById('image-frame-preview');
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
            imageFramePreview.setAttribute('src', e.target.result);

            function setImage(ctx, frame, imagePreview,imageFramePreview) {
                if (!imagePreview.complete|| !imageFramePreview.complete) {
                    setTimeout(() => {
                        setImage(ctx, frame, imagePreview, imageFramePreview)
                    }, 50);
                    return;
                }
                ctx.drawImage(imagePreview, 0, 0, canvas.width, canvas.height);
                
                framectx.drawImage(imageFramePreview, 10, 10, frameCanvas.width, frameCanvas.height, 25, 30, 260, 247);
                framectx.drawImage(document.getElementById('image-frame'), 0, 0, frameCanvas.width, frameCanvas.height);
            
                btnClick.style.display = 'none';
                var x, i;
                x = document.querySelectorAll(".hide-btn");
                for (i = 0; i < x.length; i++) {
                x[i].style.display = "inline-block";
                }
            }

            setImage(ctx, frame, imagePreview, imageFramePreview);
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
    var username = document.getElementById('user-name');
    var yourname = document.getElementById('name');
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
    // let n;
        // for (let j = 0; j < username.length; i++) {
        //     username[j].innerHTML = inputValue.value;
        // }
        // return;
        username.innerHTML = inputValue.value;
        // yourname.innerHTML = inputValue.value;
        boxNone.style.display = 'none';
        canvasboxNone.style.display = 'none';
        dpFrame.style.display = 'block';
    }

})

document.getElementById('download-btn').addEventListener('click', () => {
    // let imgPath = imageFramePreview.getAttribute("src", e.target.result);
    // let imgFilename = getImgFilename(imgPath);
    // alert('fdfg')

    frameCanvas.toBlob(function (blob) {
        saveAs(blob, 'canvas.png');
    });

    // saveAs(imgPath, imgFilename);
});

function getImgFilename(filename) {
    return filename.substring(filename.lastIndexOf('/') + 1);
}
    

