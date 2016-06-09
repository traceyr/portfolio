(function(module){
  var projectController = {};

  projectController.index = function(){
    if(Projects.all.length == 0){
      Projects.start();
    }
    $('#projects').show().siblings().hide();
    $('footer').show();
  };
  module.projectController = projectController;
})(window);
