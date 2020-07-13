var canvas = document.getElementById("canvas");
var frameCanvas = document.getElementById("frame-canvas");
var ctx = canvas.getContext("2d");
var framectx = frameCanvas.getContext("2d");
// var radius = canvas.height / 2;
// ctx.translate(radius, radius);
// radius = radius * 0.90
// drawImageCircle();  

ctx.font = "30px Comic Sans MS";
ctx.fillStyle = "red";
ctx.textAlign = "center";
ctx.fillText("Upload Image", canvas.width/2, canvas.height/2);



// drawImageCircle()
// $('#btn-click-file').click(function () {
//     $('#imageUpload').click();
// });

var imagePreview = document.getElementById('image-preview');
var btnClick = document.getElementById('btn-click-file');
var setImgClick = document.getElementById('set-img');
var inputImageFile = document.getElementById('imageUpload');
var generateClick = document.getElementById('generate');
var inputValue = document.getElementById('name');


btnClick.addEventListener('click', () => {
    inputImageFile.click();
});

generateClick.addEventListener('click', () => {
    var username = document.getElementById('user-name');
    var boxNone = document.getElementById('instructions');
    var canvasboxNone = document.getElementById('canvas-box');
    var dpFrame = document.getElementById('frame');

    username.innerHTML = inputValue.value;
    boxNone.style.display = 'none';
    canvasboxNone.style.display = 'none';
    dpFrame.style.display = 'block'


})

function readImageUrl(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var prevImg = imagePreview.setAttribute('src', e.target.result);
            setImage();
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function setImage() {

    var imgWidth = inputImageFile.width * 2;
    var imgHeight    = inputImageFile.height * 2;
    ctx.drawImage(imagePreview, 0, 0, imgWidth, imgHeight);
    framectx.drawImage(document.getElementById('image-frame'), 0, 0);
    
}

