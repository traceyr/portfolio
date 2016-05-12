var sectionObj = {};

sectionObj.populateFilter = function(){
  $('article').each(function(){
    if(!$(this).hasClass('template')) {
      var val = $(this).find('h4').text();
      var options = '<option value="' + val + '">' + val + '</option>';
      console.log(val);
      $('#project-filter').append(options);
    }
  });
};

sectionObj.handleProjectFilter = function(){
  $('#project-filter').on('change', function(){
    if ($(this).val()) {
      var $selection = $(this).val();
      console.log($selection);
      $('article').hide();
      $('article').each(function(){
        console.log($(this));
        if($(this).attr('data-ttle') === $selection) {
          $(this).show('fast');
        }
      });
    } else {
      $('.template').hide();
    }
    $('#project-filter').val('');
  });
};

sectionObj.handleMainNav = function() {
  $('.site-header-nav').on('click', '.tab', function(){
    $('article').show();
    $('.template').hide();
    var $selection = $(this).data('content');
    $('.tab-content').hide();
    $('.tab-content').each(function(){
      if($selection === 'home'){
        $('.tab-content').show();
      }
      else if($(this).attr('id') === $selection){
        $(this).fadeIn('fast');
      }
    });
  });
  $('.site-header-nava .tab:first').click();
};

$(document).ready(function(){
  sectionObj.populateFilter();
  sectionObj.handleProjectFilter();
  sectionObj.handleMainNav();
});
