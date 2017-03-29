$(window).scroll(function() {
  toolScroll();
});

function toolScroll() {
  var wScroll = $(window).scrollTop();

  $('.tools-strip').css('background-position', 'center -' + wScroll + 'px');

}