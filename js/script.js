function Projects(o) {
  Object.keys(o).forEach(function(prop, index, keys){
    this[prop] = o[prop];
  }, this);
}

Projects.all = [];

Projects.prototype.toHtml = function() {
  var $source = $('#portfolio-template').html();
  var template = Handlebars.compile($source);
  return template(this);

};

Projects.loadAll = function(dataIn){
  Projects.all = dataIn.map(function(el){
    return new Projects(el);
  });
};

(function() {
  if (localStorage.myData) {
    console.log('There is local storage.');
    Projects.loadAll(JSON.parse(localStorage.myData));
    sectionObj.addToIndex();
  } else {
    $.getJSON('/data/myData.json', function(data) {
      Projects.loadAll(data);
      console.log('no local storage');
      localStorage.myData = JSON.stringify(data);
      sectionObj.addToIndex();
    });
  }
})();

Projects.numWords = function(){
  console.log('it is being called');
  console.log(Projects.all);
  return Projects.all.map(function(curProj){
    console.log(curProj);
    return curProj.aboutProj.split(' ').length;
  }).reduce(function(f, g){
    return f + g;
  });
};

$('#numWords').text(Projects.numWords);
