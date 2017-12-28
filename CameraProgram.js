$(document).ready(function() {
    var cameraWindow = document.querySelector('.CameraProgram');
    $('.CameraIcon').click(function() {
        $('.CameraProgram').fadeIn(250);
        $('.CameraScreen').fadeIn(250);



    });
   
    $(".CloseButton").click(function() {



        $(".CameraProgram").fadeOut(250);
        $(".CameraScreen").fadeOut(250);



    });
    $('.CameraProgram').draggable();
   

});