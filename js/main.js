$('.card').click( function flip() {
    $(this).toggleClass('flipped');
});

$('#flip-all').click( function flipAll() {
  $('.card').toggleClass('flipped')
});

$('#flip-all-front').click( function flipAllFront() {
  $('.card').removeClass('flipped')
});

$('#flip-all-back').click( function flipAllBack() {
   $('.card').addClass('flipped')
 });
