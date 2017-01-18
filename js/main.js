var main = function(vars) {
  var scale = 40;
  var canvas = new CanvasHead(vars);
  var steps = 0.02;
  var plotbtn = $("#graficar");
  var grid = $("#grid-check");

  canvas.background('#eee');

  var Draw = function(){};

  function drawPlane(){
  canvas.strokeWeight(0.4);
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

  function drawGrid(){
    canvas.strokeWeight(0.1);

    for(var i = 0; i < canvas.height/2; i+=scale){
      canvas.line(0,canvas.centerH+i,canvas.width,canvas.centerH+i);
      canvas.line(0,canvas.centerH-i,canvas.width,canvas.centerH-i);
      canvas.line(canvas.centerH+i,0,canvas.centerH+i,canvas.width);
      canvas.line(canvas.centerH-i,0,canvas.centerH-i,canvas.width);
    }
  }


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
    if (grid.is(':checked')) {
      drawGrid();
    }
    drawPlane();

    canvas.fill('#0000cc');
    Draw = function(){
      canvas.point(canvas.centerW+x*scale,canvas.centerH+funct(formula,x)*scale);
      canvas.point(canvas.centerW-x*scale,canvas.centerH+funct(formula,x*(-1))*scale);
      x+=steps;
    };
  }

  function fastPlot(){

    canvas.save();

    if(grid.is(':checked')){
      drawGrid()
    }else{
      canvas.clearCanvas();
      canvas.restore();
    };

  };


  grid.click(fastPlot);
  plotbtn.click(plot);
  drawPlane();
  anim();
}
