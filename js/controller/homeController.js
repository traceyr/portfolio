(function(module){
  var homeController = {};

  homeController.index = function(){
    Projects.start(sectionObj.addToIndex);
    $('main').hide();
    $('#projects').show();

  };

  module.homeController = homeController;
})(window);
