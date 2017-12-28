$(document).ready(function() {
var stickyNavTop = $('.TitleOmnie').offset().top;
 
var stickyNav = function(){
var scrollTop = $(window).scrollTop();
      
if (scrollTop > stickyNavTop) { 
    $('.TitleOmnie').addClass('sticky');
} else {
    $('.TitleOmnie').removeClass('sticky'); 
}
};
 
stickyNav();
 
$(window).scroll(function() {
  stickyNav();
});
});