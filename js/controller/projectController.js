(function(module){
  var projectController = {};

  projectController.index = function(){
    Projects.start(sectionObj.addToIndex());
    $('#projects').show();
    $('#intro').hide();
    $('#outside-interests').hide();
    $('#about').hide();
  };
  module.projectController = projectController;
})(window);
