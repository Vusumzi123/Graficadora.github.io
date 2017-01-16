var main = function(vars) {
  var scale = 40;
  var canvas = new CanvasHead(vars);
  var Draw = function(){};
  var steps = 0.01;

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


var anim = function(fps=60){

    Draw();
    //window.requestAnimationFrame(anim);
    setTimeout(function(){
      window.requestAnimationFrame(anim);
    },1000/fps);

  };


  function getFormula(){
    var text = $('#formula').val();
    console.log(text); //debug text
    return text;
  };

  function funct(formula,x){

    this.x=x;
    return eval(formula)*(-1);
  };

  function plot(){
    console.log("plotting..");
    var formula = getFormula();
    var x=0;
    canvas.clearCanvas();
    drawPlane();

    canvas.fill('#0000cc');
    Draw = function(){

      canvas.point(canvas.centerW+x*scale,canvas.centerH+funct(formula,x)*scale);
      canvas.point(canvas.centerW-x*scale,canvas.centerH+funct(formula,x*(-1))*scale);
      x+=steps;
    }

    anim();
  }

  $("#graficar").click(plot);
  drawPlane();
}
