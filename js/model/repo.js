(function(module){
  var randomData = {};
  randomData.all = [];

  randomData.requestData = function(callback) {
    $.ajax({
      url: 'https://api.github.com/users/' + gitRepo.gitUser + '/repos' + '?per_page=10' + '&fork=false' + '&sort=updated',
      type: 'GET',
      headers: {'Authorization': 'token ' + gitRepo.gitToken},
      success: function(data, message, xhr){
        console.log(data);
        randomData.all = data;
        callback();
      }
    });
  };

  randomData.with = function(attr) {
    return randomData.all.filter(function(data){
      return data[attr];
    });
  };
  module.randomData = randomData;
})(window);
