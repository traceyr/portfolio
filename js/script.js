var projects = [];

function Projects(o) {
  this.img = o.img;
  this.ttle = o.ttle;
  this.projectUrl = o.projectUrl;
  // this.pubDate = o.pubDate;
  this.aboutProj = o.aboutProj;
}

Projects.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();

  $newProject.find('img').attr('src', this.img);
  // $newProject.find('h4').attr('data-ttle', this.ttle).text(this.ttle);
  $newProject.find('a').attr('href', this.projectUrl);
  $newProject.find('a').text(this.ttle);
  $newProject.find('p').attr('data-aboutProj', this.aboutProj).text(this.aboutProj);

  $newProject.removeClass('template');

  return $newProject;
};

myProjectsArry.forEach(function(el){
  projects.push(new Projects(el));
});

projects.forEach(function(f){
  $('#projects').append(f.toHtml());
});
