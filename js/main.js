var main = function(vars) {
  var scale = 40;
  var canvas = new CanvasHead(vars);

  canvas.background('#eee');

  function drawPlane(){

  canvas.strokeWeight(0.2);
  canvas.line(canvas.centerW,0,canvas.centerW,canvas.height);
  canvas.line(0,canvas.centerH,canvas.width,canvas.centerW);

      for(var i=0;i<=canvas.centerW;i++){

          if(i%scale===0){
              canvas.fill(255, 0, 0);
              canvas.strokeWeight(7);
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
              }
          }

      }

  };

  drawPlane();
}
