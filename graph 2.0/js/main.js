var main = function(vars) {
  var scale = 40;

  vars.canvas.width=window.innerWidth-40;
  vars.canvas.height=window.innerHeight-40;

  var canvas = new CanvasHead(vars);
  var grid = new Grid(canvas,vars);
  var steps = 1;
  var plotbtn = $("#graficar");
  var Draw = function(){};





  function drawPlane(){
  canvas.stroke('#000');
  canvas.strokeWeight(0.4);
  canvas.line(canvas.centerW,0,canvas.centerW,canvas.height);
  canvas.line(0,canvas.centerH,canvas.width,canvas.centerH);
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
    return eval(formula)*(-1);
  };

  function distance(x1,x2,y1,y2){
    return Math.sqrt((Math.pow(x2-x1,2))+(Math.pow(y2-y1)));
  }


  function fastPlot(x,formula){
    //console.log("plotting...");
    //var progress;
    //canvas.clearCanvas();
    //drawPlane();
    var x1=canvas.centerW+x*scale, y1=canvas.centerH+funct(formula,x)*scale, x2=canvas.centerW+(x+steps)*scale, y2 = canvas.centerH+funct(formula,(x+steps))*scale;
    canvas.fill('#0000cc');
    canvas.stroke('#0000cc');

    canvas.point(x1,y1);
    //canvas.line(canvas.centerW-x*scale,canvas.centerH+funct(formula,x*(-1))*scale,canvas.centerW-(x+steps)*scale,canvas.centerH+funct(formula,(x+steps)*(-1))*scale);
    //progress = Math.round((x/300)*100);
    //console.log(progress+"%..");
    if(x>canvas.width/2){
      return true;
    }
    x+=steps;
    fastPlot(x,formula);
  }

  function plot(x,formula){
    console.log("plotting...");

    var x=0;
    canvas.clearCanvas();
    /*if (grid.is(':checked')) {
      drawGrid();
    }*/
    drawPlane();

    canvas.fill('#0000cc');
    setTimeout(function(){
    Draw = function(){
      canvas.point(canvas.centerW+(x*scale),canvas.centerH+funct(formula,x)*scale);
      canvas.point(canvas.centerW-(x*scale),canvas.centerH+funct(formula,-x)*scale);
      x+=steps;
    };
  },1000);
  };

  function clearPlane(){
    canvas.clearCanvas();
    drawPlane();
  }


  vars.grid.click();
  plotbtn.click(function(){var formula = getFormula();clearPlane();plot(-canvas.centerW,formula);});
  drawPlane();
  anim();
}
