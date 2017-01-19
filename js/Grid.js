var Grid = function(canvas,vars){
  this.img = new Image;
  this.grid = vars.grid;

  /*this.setCanvas = function(){
    this.img.src=canvas.canvas.toDataURL()+"";
  };

  this.getCanvas = function(){
    if(this.img.src!=""){
      canvas.clearCanvas();
      canvas.drawImage(this.img,0,0);
      return true;
    }else {
      console.log('no save state');
      return false;
    };

  }*/

  this.gridIsOn = function(){
    if(this.grid.is(':checked')){
      return true;
    }else{
      return false;
    }
  }

  this.draw = function(){
    canvas.strokeWeight(0.1);
    for(var i = 0; i < canvas.height/2; i+=scale){
      canvas.line(0,canvas.centerH+i,canvas.width,canvas.centerH+i);
      canvas.line(0,canvas.centerH-i,canvas.width,canvas.centerH-i);
      canvas.line(canvas.centerH+i,0,canvas.centerH+i,canvas.width);
      canvas.line(canvas.centerH-i,0,canvas.centerH-i,canvas.width);
    }
  }

  this.Grid = function(){
    if(this.gridIsOn()){
      
    }else{

    }
  };

  this.Grid();
}
