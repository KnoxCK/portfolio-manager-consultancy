$(function(){
  var pathname = (window.location.pathname);
  console.log(pathname);
  if ( window.location.hash === "#news") {
    $('.navbar-pmcl-right a').each(function() {
      $(this).removeClass('active');
    });
    $('#navbar-news').addClass('active');
  } else {
    $('.navbar-hakuna-main a').each(function() {
      if ($(this).attr('href') === pathname) {
        $(this).addClass('active');
        console.log($(this).attr('href'));
      }
    });
  }
});
