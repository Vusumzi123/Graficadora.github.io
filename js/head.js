//recursos:
//http://smarchal.com/
//http://jscolor.com/

//Encabezado para facilitar el uso de Canvas

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle="white";
ctx.textAlign="center";
var eWith=1;
var scolorBuffer;
var fcolorBuffer;
var center=canvas.width/2;
var mouseX;
var mouseY;


var radius = 50.0;
var X, Y;
var nX, nY;
var delay = 16;

function initCanvas(){
    	canvas.addEventListener('mousemove', function(event){
        var mX = event.clientX - ctx.canvas.offsetLeft;
        var mY = event.clientY - ctx.canvas.offsetTop;
        mouseX = mX;
        mouseY = mY;
    });
}

window.addEventListener('load', function(event) {initCanvas();});




function rgb2hex(rgb) {
 	rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 	function hex(x) {
  	return ("0" + parseInt(x).toString(16)).slice(-2);
}
 	return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}


function ellipse(x , y, w, h){
	ctx.beginPath();
	ctx.ellipse(x, y, w/2, h/2, 0, 0, 2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
};

function rect(x,y,w,h){
	ctx.beginPath();
	ctx.rect(x, y, w, h);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
};

function line(x1,y1,x2,y2) {
	ctx.beginPath();
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.closePath();
	ctx.stroke();
};

function point(x,y){
	ctx.fillStyle=scolorBuffer;
	ctx.beginPath();
	ctx.ellipse(x, y, eWith, eWith, 0, 0, 2*Math.PI);
	ctx.closePath();
	ctx.fill();
	restoreColor();
};


function restoreColor(){
	ctx.fillStyle=fcolorBuffer;
	ctx.strokeStyle=scolorBuffer;
};

function text(tex, x , y, s){

	if(arguments.length<4){
		ctx.font = "30px Arial";
		ctx.fillText(tex,x,y);
		ctx.strokeText(tex,x,y);
		//console.log("funcion text");
	}else{
		var size= s+"px Arial";
		ctx.font = size;
		ctx.fillText(tex,x,y);
		ctx.strokeText(tex,x,y);
		//console.log("funcion text y size");
	}
};


function stroke(re,gr,bl){
	if(arguments.length<3){
		ctx.strokeStyle=arguments[0];
		colorBuffer=arguments[0]
	}else{
  		var rgba="rgb("+re+","+gr+","+bl+")";
  		var col=rgb2hex(rgba);
  		ctx.strokeStyle=col;
  		scolorBuffer=col;
  	}

  	
};

function fill(re,gr,bl){
	if(arguments.length<3){
		ctx.fillStyle=arguments[0];
	}else{
		var rgba="rgb("+re+","+gr+","+bl+")";
		ctx.fillStyle=rgb2hex(rgba);
	}
};

function strokeWeight(weight){
	ctx.lineWidth=""+weight;
	eWith=weight;
};

function clearCanvas(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
};

function background(color){
	clearCanvas();
	ctx.fillStyle=color;
	ctx.fillRect(0,0,canvas.width,canvas.height);
	restoreColor();
};


var requestAnimationFrame =  
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        function(callback) {
          return setTimeout(callback, 1);
    	};

//Fin del encabezado


