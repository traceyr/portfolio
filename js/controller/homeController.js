(function(module){
  var homeController = {};

  homeController.index = function(){
    if(Projects.all.length == 0){
      Projects.start();
    }
    $('#projects').show();
    $('#intro').show();
    $('#outside-interests').show();
    $('#about').show();
  };

  module.homeController = homeController;
})(window);
