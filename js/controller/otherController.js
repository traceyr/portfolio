(function(module){
  var otherController = {};

  otherController.index = function() {
    $('#outside-interests').show().siblings().hide();
    randomData.requestData(randomDataView.index);
  };
  module.otherController = otherController;
})(window);
