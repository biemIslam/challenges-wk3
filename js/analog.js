
var canvas = document.getElementById('clock-container');
var ctx = canvas.getContext('2d');
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90;
    
function canvasAnalogClock() {
    drawClockFace();
    addClockNumbers();
    drawTime();

    function drawClockFace() {
        var gradColor;
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, 2 * Math.PI);
        ctx.fillStyle = '#faf9f9';
        ctx.fill();
        gradColor = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
        gradColor.addColorStop(0, '#0000ff');
        gradColor.addColorStop(0.3, '#faf9f9');
        gradColor.addColorStop(1, '#0000ff');
        ctx.strokeStyle = gradColor;
        ctx.lineWidth = radius * 0.1;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, radius * 0.05, 0, 2 * Math.PI);
        ctx.fillStyle = '#333';
        ctx.fill();
    }

    function addClockNumbers() {
        var angle;
        ctx.font = radius * 0.25 + "px arial";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        for (let clockMin = 1; clockMin < 13; clockMin++) {
            angle = clockMin * Math.PI / 6;
            ctx.rotate(angle);
            ctx.translate(0, -radius * 0.75);
            ctx.rotate(-angle);
            ctx.fillText(clockMin.toString(), 0, 0);
            ctx.rotate(angle);
            ctx.translate(0, radius * 0.75);
            ctx.rotate(-angle);
        }
    }

    function drawTime() {
        var currentTime = new Date();
        var hour = currentTime.getHours();
        var minute = currentTime.getMinutes();
        var second = currentTime.getSeconds();
        //hour
        hour = hour % 12;
        hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60));
        drawClockHands(ctx, hour, radius * 0.5, radius * 0.07);
        //minute
        minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
        drawClockHands(ctx, minute, radius * 0.8, radius * 0.07);
        // second
        second = (second * Math.PI / 30);
        drawClockHands(ctx, second, radius * 0.9, radius * 0.02);
    }

    function drawClockHands(ctx, pos, length, width) {
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.lineCap = "round";
        ctx.moveTo(0, 0);
        ctx.rotate(pos);
        ctx.lineTo(0, -length);
        ctx.stroke();
        ctx.rotate(-pos);
    }
}


setInterval(canvasAnalogClock, 1000)

function showTime() {
    var timeNow = new Date();
    const text = "The time is ";
    document.getElementById('show-time').innerHTML = text + timeNow.toLocaleTimeString();
}

setInterval(showTime, 1000);




