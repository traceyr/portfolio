(function(module){
  var homeController = {};

  homeController.index = function(){
    if(Projects.all.length == 0){
      Projects.start();
    }
    $('section').show().siblings.show();
    $('footer').hide();
  };

  module.homeController = homeController;
})(window);
