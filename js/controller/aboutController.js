(function(module){
  var aboutController = {};

  aboutController.index = function() {
    $('#about').show().siblings().hide();
    $('footer').hide();
  };
  module.aboutController = aboutController;
})(window);
