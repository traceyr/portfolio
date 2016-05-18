
Projects.all = [];

function Projects(o) {
  this.img = o.img;
  this.ttle = o.ttle;
  this.projectUrl = o.projectUrl;
  // this.pubDate = o.pubDate;
  this.aboutProj = o.aboutProj;
}

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
//for future, maybe only have footer appear when the user is on the projects page. and have the word count display for only the project or projects showing.

$('#numWords').text(Projects.numWords);
