(function(module){
  var introController = {};

  introController.index = function() {
    $('#intro').show().siblings().hide();
    $('footer').hide();
  };
  module.introController = introController;
})(window);
