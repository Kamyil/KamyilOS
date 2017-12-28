$(document).ready(function(){

$(".calculatorIcon").click(function(){

$(".calculatorProgram").fadeIn(250);





});
    
    
$(".CloseButton").click(function(){


$(".calculatorProgram").fadeOut(250);






})    
    
$(".calculatorProgram").draggable();




  
});



   
var display = document.getElementById("display");

 
    
    

function c(val){

display.innerHTML = val;

}
function math(val){
display.innerHTML += val;
 
} 

function suma(beforeS,s){
beforeS = display.innerHTML;

s = eval(beforeS);
display.innerHTML = s;


}
