
var canvas = document.getElementById("canvas");
var frameCanvas = document.getElementById("frame-canvas");
var ctx = canvas.getContext("2d");
var framectx = frameCanvas.getContext("2d");

ctx.font = "30px Comic Sans MS";
ctx.fillStyle = "red";
ctx.textAlign = "center";
ctx.fillText("Upload Image", canvas.width / 2, canvas.height / 2);




var imagePreview = document.getElementById('image-preview');
var btnClick = document.getElementById('btn-click-file');
var setImgClick = document.getElementById('set-img');
var inputImageFile = document.getElementById('imageUpload');
var generateClick = document.getElementById('generate');
var inputValue = document.getElementById('name');


btnClick.addEventListener('click', () => {
    inputImageFile.click();
});



function readImageUrl(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            imagePreview.setAttribute('src', e.target.result);

            function setImage(ctx, imagePreview) {
                if (!imagePreview.complete) {
                    setTimeout(() => {
                        setImage(ctx, imagePreview)
                    }, 50);
                    return;
                }
                ctx.drawImage(imagePreview, 0, 0, canvas.width, canvas.height);
                framectx.drawImage(document.getElementById('image-frame'), 0, 0,canvas.width, canvas.height);
            }
            // ctx.drawImage(imagePreview, 0, 0);
            // framectx.drawImage(document.getElementById('image-frame'), 0, 0);

            // if (prevImg) {
            //     ctx.fillStyle = "#333";
            //     ctx.textAlign = "center";
            //     ctx.fillText("", canvas.width / 2, canvas.height / 2);
            // }
            setImage(ctx, imagePreview);
            // window.onload = function () {

            // var imgWidth = inputImageFile.width * 2;
            // var imgHeight    = inputImageFile.height * 2;
            // ctx.drawImage(imagePreview, 0, 0, imgWidth, imgHeight);


            // }
        }
        reader.readAsDataURL(input.files[0]);
    }
}







generateClick.addEventListener('click', () => {
    var username = document.getElementById('user-name');
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
        username.innerHTML = inputValue.value;
        boxNone.style.display = 'none';
        canvasboxNone.style.display = 'none';
        dpFrame.style.display = 'block';
    }

})
    

