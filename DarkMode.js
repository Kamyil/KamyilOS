$(document).ready(function(){

    $("#nightIcon").click(function(){
        $("body").removeAttr('style');
        $("body").css({"background": "url(img/12_Firewatch.png) no-repeat center center fixed"});
        $(".taskbar").addClass("taskbarDark");
        $("#clock").attr('id','clockDark')
        $(".UpperBar").addClass("UpperBarDark");
        $(".calculatorProgram").addClass("calculatorProgramDark");
        $(".Title").addClass("TitleDark");
        $('.CloseButton').addClass('CLoseButtonDark');
        $(".number").addClass("numberDark");
        $(".ToDoProgram").addClass("ToDoProgramDark");
        




    });   







});
