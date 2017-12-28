$(document).ready(function () {




    $(".BugIcon").click(function () {

        $(".BugReportProgram").fadeIn(250);

    });

    $(".CloseButton").click(function () {


        $(".BugReportProgram").fadeOut(250);









    });

    $(".BugReportProgram").resizable();

    $(".BugReportProgram").draggable();
});