(function(module){
  var introController = {};

  introController.index = function() {
    $('#projects').hide();
    $('#intro').show();
    $('#outside-interests').hide();
    $('#about').hide();
  };
  module.introController = introController;
})(window);
