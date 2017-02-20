var Options = function(vars){
  this.options = vars.options;
  this.gridOpt = $("#grid-opt");

  this.gridIsChecked = function(){
    return this.gridOpt.prop('checked');
  };


};
