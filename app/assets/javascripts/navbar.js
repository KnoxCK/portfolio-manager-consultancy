$(function(){
  var pathname = (window.location.pathname);
  if ( window.location.hash === "#news") {
    $('.navbar-pmcl-right a').each(function() {
      $(this).removeClass('active');
    });
    $('#navbar-news').addClass('active');
  } else if ( window.location.hash === "#team") {
    $('.navbar-pmcl-right a').each(function() {
      $(this).removeClass('active');
    });
    $('#navbar-team').addClass('active');
  } else if ( window.location.hash === "#contact") {
    $('.navbar-pmcl-right a').each(function() {
      $(this).removeClass('active');
    });
    $('#navbar-contact').addClass('active');
  } else {
    $('.navbar-pmcl-right a').each(function() {
      if ($(this).attr('href') === pathname) {
        $(this).addClass('active');
      }
    });
}
});

$(function(){
  $('#navbar-team').click(function(e){
    $('.navbar-pmcl-right a').each(function() {
      $(this).removeClass('active');
    });
    $(this).addClass('active');
  });
  $('#navbar-news').click(function(e){
    $('.navbar-pmcl-right a').each(function() {
      $(this).removeClass('active');
    });
    $(this).addClass('active');
  });
  $('#navbar-contact').click(function(e){
    $('.navbar-pmcl-right a').each(function() {
      $(this).removeClass('active');
    });
    $(this).addClass('active');
  });
});
