var searchBar = document.querySelector(".searchBar");
var searchButton = document.querySelector(".searchButton");

function searchToggle(){




        if(searchBar.style.display==="none"){

                searchBar.style.display="block";

        }
        else{
                searchBar.style.display="none";


}
   searchButton.classList.remove("lnr-magnifier");
searchButton.classList.add("lnr-cross");     
}
searchButton.addEventListener("click",searchToggle);

