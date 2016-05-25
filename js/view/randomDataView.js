(function(module){
  var randomDataView = {};

  var add = function() {
    var $otherInterests = $('#outside-interests');

    $otherInterests.find('p').empty();
    $otherInterests.show().siblings().hide();
  };

  var render = Handlebars.compile($('#randomData-template').text());

  randomDataView.index = function() {
    add();
    $('#outside-interests p').append(randomData.with('name').map(render));
  };
  module.randomDataView = randomDataView;
})(window);
