var Arrange = function(vars){
  this.sidePanne=vars.sidePanne;
  this.Arrange = function(){
    this.sidePanne=vars.sidePanne;
    var h = window.innerHeight;
    h=h-112;
    h=h-70;
    //console.log(h);
    //for(var i=0;i<sidePanne.length;i++){
    this.sidePanne.css("max-height",h);
    //}
  }
  this.sidePanne.css("overflow-y", "auto");
  this.Arrange();
}
