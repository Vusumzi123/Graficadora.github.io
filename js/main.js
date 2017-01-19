var main = function(vars) {
  var scale = 40;
  var canvas = new CanvasHead(vars);
  var grid = new Grid(canvas,vars);
  var steps = ((canvas.width/2)/scale)/10;
  var plotbtn = $("#graficar");


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
              };
          };
      };
  };

  var anim = function(fps=2){
    Draw();
    //window.requestAnimationFrame(anim);
    setTimeout(function(){
      window.requestAnimationFrame(anim);
    },1000/fps);

  };


  function getFormula(){
    var text = $('#formula').val();
    //console.log(text); //debug text
    return text;
  };

  function funct(formula,x,t){
    this.x=x;
    this.t=t;
    return eval(formula)*(-1);
  };


  function fastPlot(x){
    //console.log("plotting...");
    var formula = getFormula();
    //canvas.clearCanvas();
    //drawPlane();
    canvas.fill('#0000cc');
    canvas.stroke('#0000cc');
    canvas.line(canvas.centerW+x*scale,canvas.centerH+funct(formula,x)*scale,canvas.centerW+(x+steps)*scale,canvas.centerH+funct(formula,(x+steps))*scale);
    canvas.line(canvas.centerW-x*scale,canvas.centerH+funct(formula,x*(-1))*scale,canvas.centerW-(x+steps)*scale,canvas.centerH+funct(formula,(x+steps)*(-1))*scale);
    console.log(x);
    if(x>canvas.width/2){
      return true;
    }
    x+=steps;
    fastPlot(x);
  }

  function plot(){
    console.log("plotting..");
    var formula = getFormula();
    var x=0;
    canvas.clearCanvas();
    /*if (grid.is(':checked')) {
      drawGrid();
    }*/
    drawPlane();

    canvas.fill('#0000cc');
    Draw = function(){
      canvas.point(canvas.centerW+x*scale,canvas.centerH+funct(formula,x)*scale);
      canvas.point(canvas.centerW-x*scale,canvas.centerH+funct(formula,x*(-1))*scale);
      x+=steps;
    };
  };


  vars.grid.click();
  plotbtn.click(function(){fastPlot(0);});
  drawPlane();
  anim();
}
