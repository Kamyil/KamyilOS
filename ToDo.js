$(document).ready(function () {




    $(".ToDoIcon").click(function () {

        $(".ToDoProgram").fadeIn(250);

    });

    $(".CloseButton").click(function () {


        $(".ToDoProgram").fadeOut(250);









    });

    $(".ToDoProgram").resizable();

    $(".ToDoProgram").draggable();
    $(".ToDoList").sortable();





    $(".submitToDO").click(function AddItem() {
        var ToDoItem = document.querySelector(".inputToDo").value;
        var ToDoList = document.querySelector(".ToDoList");
        if (ToDoItem == "") {
            $(ToDoList).createTextNode("! Musisz coś wpisać przed dodaniem");

        } else {
            $(ToDoList).append('<li class="ToDoActivity">' + ToDoItem + '<div class="lnr lnr-cross DeleteActivity"></div></li>');
        }






    })


    $('.ToDoList').on('click', '.DeleteActivity', function () {

        $(this).parent().remove();
    });


    $('.ToDoList').on('click', '.ToDoActivity', function () {

        $(this).css('background-color', '#29d665');
        $(this).css('color', '#505050');
        
        //var sound = document.getElementById("audio");
        //sound.play();
       


    });






});
