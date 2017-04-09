$(function() {
  setInterval(function(){projectsTada()}, 4000);
  // processBG();
  smoothScroll(300);
  // typeIt();
});

function smoothScroll (duration) {
  $('a[href^="#"]').on('click', function(event) {
    var target = $( $(this).attr('href') );
    if( target.length ) {
      event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, duration);
    }
  });
}

// function processBG() {
//   $('.process-img-link').hover(function(){
//     $(this).parent().parent().css('background-color', $(this).data('color'));
//   }, function(){
//     // off > revert the color
//     $(this).parent().parent().css('background-color', $(this).parent().parent().data('orig-color'));
//   });
// }

function projectsTada() {
  var randNum = Math.floor(Math.random() * $('.projects-thumb').length) +1
  $('.projects-thumb').eq(randNum).addClass('is-emph')
    .siblings().removeClass('is-emph');
}

$('.type-it').typeIt({  
  speed: 150,
  //  startDelay: 250
  autoStart: true
});

$(window).scroll(function() {
  toolScroll();
  startProjects();
});

function toolScroll() {
  var wScroll = $(window).scrollTop();
  $('.tools-strip').css('background-position', 'center -' + wScroll + 'px');
}

function startProjects(){
  var wScroll = $(window).scrollTop();
  if($('section.projects').offset().top - $(window).height()/1.2 < wScroll) {
    $('.projects-thumb').each(function(i){
      setTimeout(function(){
        $('.projects-thumb').eq(i).addClass('is-visible');
      }, 150 * i);
    });
  }
}