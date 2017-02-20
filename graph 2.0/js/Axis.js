var Axis = function(vars, can){
  var canvas= new CanvasHead(vars,can);
  var scale=vars.scale;

  this.drawPlane = function(){
  canvas.stroke('#000');
  canvas.strokeWeight(0.4);
  canvas.line(canvas.centerW,0,canvas.centerW,canvas.height);
  canvas.line(0,canvas.centerH,canvas.width,canvas.centerH);
      for(var i=0;i<=canvas.centerW;i++){
          if(i%scale===0){
              canvas.fill(255, 0, 0);
              canvas.stroke("red");
              canvas.strokeWeight(1);
              canvas.point(canvas.centerW+i,canvas.centerH);
              canvas.point(canvas.centerW-i,canvas.centerH);
              canvas.point(canvas.centerW,canvas.centerH+i);
              canvas.point(canvas.centerW,canvas.centerH-i);
              if(i>0){
                canvas.strokeWeight(1);
                canvas.fill("black");
                canvas.text(-i/scale, canvas.centerW-11, canvas.centerH+i,12);
                canvas.text(i/scale, canvas.centerW+11, canvas.centerH-i,12);
                canvas.text(i/scale, canvas.centerW+i, canvas.centerH+14,12);
                canvas.text(-i/scale, canvas.centerW-i, canvas.centerH-8,12);
              };
          };
      };
  };
}
