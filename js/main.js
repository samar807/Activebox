$(document).ready(function() {

    $('.carousel').carousel();
    $('.toggle').click(function() {
        $('.slidebar').toggleClass('active')
    });
    $('.close-nav').click(function() {
        $('.slidebar').removeClass('active');
    
    });
    
})


// $('.nav-bar #close-search').click(function() {

//     $('form').addClass('show-close');
// });
// $('.close-btn').click(function() {

//     $('form').removeClass('show-close');
// });
