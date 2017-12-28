$(document).ready(function(){
	 $('.KamyilStartLogoFull').fadeIn(1000);
	 $('.KamyilStartLogoEmpty').delay(5000).fadeIn(500);
	 $('#KamyilOSText').fadeIn(2000);
	 $('#subTitleIntro').fadeIn(3000);
    DoRotate(0);
    AnimateRotate(0);
    $('.KamyilStartLogoFull').delay(4000).fadeOut(500);
    $('#KamyilOSText').delay(3000).fadeOut(500);
	 $('#subTitleIntro').delay(2000).fadeOut(500);
	 $('.StartScreen').delay(5500).fadeOut(500);
	 $('.KamyilStartLogoEmpty').delay(1000).fadeOut(500);

 });


function DoRotate(d) {
    $(".KamyilStartLogoFull").css({
        transform: 'rotate(' + d + 'deg)'
    });
}

function AnimateRotate(d){
    var elem = $(".KamyilStartLogoFull");

    $({deg: -45}).animate({deg: d}, {
        duration: 2000,
        step: function(now){
            elem.css({
                 transform: "rotate(" + now + "deg)"
            });
        }
    });

}

