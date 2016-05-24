(function(module){
  var projectController = {};

  projectController.index = function(){
    if(Projects.all.length == 0){
      Projects.start();
    }
    $('#projects').show();
    $('#intro').hide();
    $('#outside-interests').hide();
    $('#about').hide();
  };
  module.projectController = projectController;
})(window);
