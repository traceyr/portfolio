(function(module){
  var otherController = {};

  otherController.index = function() {
    $('#outside-interests').show().siblings().hide();
    $('footer').hide();
    randomData.requestData(randomDataView.index);
  };
  module.otherController = otherController;
})(window);
