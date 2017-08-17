$(function(){
  var pathname = (window.location.pathname);
  if ( window.location.hash === "#news") {
    $('.navbar-pmcl-right a').each(function() {
      $(this).removeClass('active');
      $('html,body').animate({
      scrollTop: $("#news-anchor").offset().top},
      1500);
    });
    $('#navbar-news').addClass('active');
  } else if ( window.location.hash === "#team") {
    $('.navbar-pmcl-right a').each(function() {
      $(this).removeClass('active');
      $('html,body').animate({
      scrollTop: $("#team-anchor").offset().top},
      1500);
    });
    $('#navbar-team').addClass('active');
  } else if ( window.location.hash === "#contact") {
    $('.navbar-pmcl-right a').each(function() {
      $(this).removeClass('active');
      $('html,body').animate({
      scrollTop: $("#contact-anchor").offset().top},
      1500);
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
    $('html,body').animate({
      scrollTop: $("#team-anchor").offset().top},
      1500);
  });
  $('#navbar-news').click(function(e){
    $('.navbar-pmcl-right a').each(function() {
      $(this).removeClass('active');
    });
    $(this).addClass('active');
    $('html,body').animate({
      scrollTop: $("#news-anchor").offset().top},
      1500);
  });
  $('#navbar-contact').click(function(e){
    $('.navbar-pmcl-right a').each(function() {
      $(this).removeClass('active');
    });
    $(this).addClass('active');
    $('html,body').animate({
      scrollTop: $("#contact-anchor").offset().top},
      1500);
  });
});
