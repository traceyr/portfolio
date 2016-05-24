(function(module){
  var homeController = {};

  homeController.index = function(){
    Projects.start(sectionObj.addToIndex());
    $('#projects').show();
    $('#intro').show();
    $('#outside-interests').show();
    $('#about').show();
  };

  module.homeController = homeController;
})(window);
