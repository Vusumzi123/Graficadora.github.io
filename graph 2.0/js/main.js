var main = function(vars) {
  var scale = vars.scale;

    scaleChart();


  var res = new Arrange(vars);
  var grid = new Grid(vars ,vars.grid, scale);
  var plotts = new Plotter(vars,vars.plotts[0]);
  var axis = new Axis(vars, vars.canvas);
  var options = new Options(vars);
  var steps = 1;
  var plotbtn = $("#Graficar1");


  function scaleChart(){
    var h = window.innerHeight-40;
    var w = window.innerWidth-40;
    vars.canvas.width=w;
    vars.canvas.height=h;
    vars.grid.width=w;
    vars.grid.height=h;
    vars.plotts[0].width=w;
    vars.plotts[0].height=h;
  };


  function getFormula(){
    var text = $('#formula1').val();
    //console.log(text); //debug text
    return text;
  };




  grid.drawGrid();
  axis.drawPlane();

  options.gridOpt.click(function(){grid.isActive(options.gridIsChecked())})
  window.addEventListener("resize",res.Arrange);
  plotbtn.click(function(){var formula = getFormula();plotts.plot(formula);});
}
