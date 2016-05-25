(function(module){
  var randomData = {};
  randomData.all = [];

  randomData.requestData = function(callback) {
    $.get('github/users/traceyr/repos' +
    '?per_page=10' +
    '&sort=updated')
    .done(function(data){
      randomData.all = data;
    }).done(callback);
  };

  randomData.with = function(attr) {
    return randomData.all.filter(function(data){
      return data[attr];
    });
  };
  module.randomData = randomData;
})(window);
