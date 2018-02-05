var c = document.getElementById("slate");
var toggleButton = document.getElementById("toggle");
var clearButton = document.getElementById("clear");

var ctx = c.getContext("2d");

var pathStarted = false;

var drawCircle = function(x, y){
    ctx.arc(x, y, 10, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.moveTo(x, y);
}

var drawLine = function(x, y){
    if (pathStarted){
	pathStarted = true;
	ctx.beginPath();
	ctx.moveTo(x, y);
    } else {
	ctx.lineTo(x, y);
	ctx.stroke();
	ctx.closePath()
    }
}

var draw = function(e){
    ctx.fillStyle = "#000000";
    drawLine(e.offsetX, e.offsetY);
    drawCircle(e.offsetX, e.offsetY);
}

var clear = function(){
    pathStarted = false;
    ctx.beginPath();
    ctx.clearRect(0, 0, 600, 600);
}

c.addEventListener("click", draw);
clearButton.addEventListener("click", clear);
