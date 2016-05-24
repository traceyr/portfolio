(function(module){
  var otherController = {};

  otherController.index = function() {
    $('#projects').hide();
    $('#intro').hide();
    $('#outside-interests').show();
    $('#about').hide();
  };
  module.otherController = otherController;
})(window);
