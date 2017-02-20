//recursos:
//http://smarchal.com/
//http://jscolor.com/
//http://www.cssmatic.com/

function Globals(){
  this.canvas;
  this.body;
  this.grid;
  this.sidePanne;
  this.scale = 30;
  this.options;

  this.Globals = function() {
    this.canvas = document.getElementById('myCanvas');
    this.body = document.body;
    this.grid = document.getElementById('Grid');
    this.sidePanne= $(".scrolable-pannel");
    this.plotts= document.getElementsByClassName('plotter');
    this.options=$('#options');
    console.log('globals set...');
    return true;
  };

  this.Globals();
};
//Fin del encabezado
