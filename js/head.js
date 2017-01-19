//recursos:
//http://smarchal.com/
//http://jscolor.com/
//http://www.cssmatic.com/

//Encabezado para facilitar el uso de Canvas

function Globals(){
  this.canvas = document.getElementById('myCanvas');
  this.body = document.body;
  this.grid = $("#grid-check");

  this.Globals = function() {
    console.log('globals set...');
    return true;
  };

  this.Globals();
};
//Fin del encabezado
