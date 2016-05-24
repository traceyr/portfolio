(function(module){
  projectController = {};

  homeController.index = function(){
    Projects.start(sectionObj.addToIndex);
    $('#projects').show();
    $('.template').hide();
    $('main').show();
  };

})
