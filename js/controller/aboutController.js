(function(module){
  var aboutController = {};

  aboutController.index = function() {
    $('#projects').hide();
    $('#intro').hide();
    $('#outside-interests').hide();
    $('#about').show();
  };
  module.aboutController = aboutController;
})(window);
