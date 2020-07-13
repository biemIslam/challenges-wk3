var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
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
var inputClick = document.getElementById('imageUpload');



btnClick.addEventListener('click', () => {
    inputClick.click();
});

function readImageUrl(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var prevImg = imagePreview.setAttribute('src', e.target.result);

            // if (prevImg) {
                
            // }
            // prevImg.style.display = 'none';
            setImage();
            // ctx.fillText(" ", canvas.width/2, canvas.height/2);
            // var img = document.getElementById("scream");
            // ctx.drawImage(setImage, 10, 10);
            // $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
            // $('#imagePreview').hide();
            // $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function setImage() {
    ctx.drawImage(imagePreview, 10, 10);
    
}

function drawImageCircle() {
    // var pattern = ctx.createPattern(imagePreview, "no-repeat");
    // ctx.strokeStyle = pattern;
    // ctx.beginPath();
    // ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    // // ctx.fillStyle = pattern;
    // ctx.stroke()
}

// setImgClick.addEventListener('click', () => {
//     // inputClick.click();
//     // ctx.drawImage(imagePreview, 10, 10);
// });

// inputClick.addEventListener('change', () => {
//     readImageUrl(this)
// })
// $("#imageUpload").change(function () {
//     readURL(this);
// });