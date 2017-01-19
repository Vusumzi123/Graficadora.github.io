//recursos:
//http://smarchal.com/
//http://jscolor.com/
//http://www.cssmatic.com/

//Encabezado para facilitar el uso de Canvas

var CanvasHead = function(vars) {

this.canvas=vars.canvas;
this.ctx = vars.canvas.getContext("2d");
this.ctx.fillStyle="white";
this.ctx.textAlign="center";
this.eWith=1;
this.scolorBuffer;
this.fcolorBuffer;
this.width=this.canvas.width;
this.height=this.canvas.height;
this.centerW=this.canvas.width/2;
this.centerH=this.canvas.height/2;
this.mouseX;
this.mouseY;



this.radius = 50.0;
this.X; this.Y;
this.nX, this.nY;
this.delay = 16;

this.initCanvas = function(){
    	this.canvas.addEventListener('mousemover', function(event){
        var mX = event.clientX - this.ctx.canvas.offsetLeft;
        var mY = event.clientY - this.ctx.canvas.offsetTop;
        this.mouseX = mX;
        this.mouseY = mY;
    });
};

this.initCanvas();



this.rgb2hex = function(rgb) {
 	rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 	function hex(x) {
  	return ("0" + parseInt(x).toString(16)).slice(-2);
}
 	return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
};


this.ellipse = function(x , y, w, h){
	this.ctx.beginPath();
	this.ctx.ellipse(x , y, w/2, h/2, 0, 0, 2*Math.PI);
	this.ctx.closePath();
	this.ctx.fill();
	this.ctx.stroke();
};

this.rect = function(x,y,w,h){
	this.ctx.beginPath();
	this.ctx.rect(x, y, w, h);
	this.ctx.closePath();
	this.ctx.fill();
	this.ctx.stroke();
};

this.line = function(x1,y1,x2,y2) {
	this.ctx.beginPath();
	this.ctx.moveTo(x1,y1);
	this.ctx.lineTo(x2,y2);
	this.ctx.closePath();
	this.ctx.stroke();
};

this.point = function(x,y){
	this.ctx.fillStyle=this.scolorBuffer;
	this.ctx.beginPath();
	this.ctx.ellipse(x, y, this.eWith, this.eWith, 0, 0, 2*Math.PI);
	this.ctx.closePath();
	this.ctx.fill();
	this.restoreColor();
};


this.restoreColor = function(){
	this.ctx.fillStyle=this.fcolorBuffer;
	this.ctx.strokeStyle=this.scolorBuffer;
};

this.text = function(tex, x , y, s){

  //s = typeof s !== 'undefined' ? s : 42;

	if(arguments.length<4){
		this.ctx.font = "30px Arial";
		this.ctx.fillText(tex,x,y);
		//this.ctx.strokeText(tex,x,y);
		//console.log("funcion text");
	}else{
		var size= s+"px Arial";
		this.ctx.font = size;
		this.ctx.fillText(tex,x,y);
		//this.ctx.strokeText(tex,x,y);
		//console.log("funcion text y size");
	}
};


this.stroke = function(re,gr,bl){
	if(arguments.length<3){
		this.ctx.strokeStyle=arguments[0];
		colorBuffer=arguments[0]
	}else{
  		var rgba="rgb("+re+","+gr+","+bl+")";
  		var col=rgb2hex(rgba);
  		this.ctx.strokeStyle=col;
  		scolorBuffer=col;
  	}


};

this.fill = function(re,gr,bl){
	if(arguments.length<3){
		this.ctx.fillStyle=arguments[0];
	}else{
		var rgba="rgb("+re+","+gr+","+bl+")";
		this.ctx.fillStyle=this.rgb2hex(rgba);
	}
};

this.strokeWeight = function(weight){
	this.ctx.lineWidth=""+weight;
	eWith=weight;
};

this.clearCanvas = function(){
	this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
};

this.background = function(color){
	this.clearCanvas();
	this.ctx.fillStyle=color;
	this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
	this.restoreColor();
};

this.linearGrad= function(start, end, color1, color2){
  var GradientVertical = this.ctx.createLinearGradient(0, start, 0, end);
    GradientVertical.addColorStop(0, color1);
    GradientVertical.addColorStop(1, color2);
  return GradientVertical;
};

this.save = function(){
  this.ctx.save();
};

this.restore = function(){
  this.ctx.restore();
};

this.drawImage = function(img,x,y){
  this.ctx.drawImage(img,x,y);
}

this.requestAnimationFrame =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        function(callback) {
          return setTimeout(callback, 1);
    	};

//Fin del encabezado

};
