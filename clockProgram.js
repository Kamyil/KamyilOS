document.getElementById("clock").onclick = function () {
    var ok = true;

     if (ok === true) {
          var div = document.createElement('div');
           
          div.className = 'clockProgram';       
            //div.style.backgroundColor = "black";

       document.getElementsByClassName('SystemContainer')[0].appendChild(div);
    }

        
};

