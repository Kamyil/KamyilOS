

var train;
var pipes = [];

function setup(){
    var MyCanvas = createCanvas(400,600);
    MyCanvas.parent("FlappyTrainProgram");
    train = new Train();
  pipes.push(new Pipe());
    
   
}



function draw(){

background(0);
      for(var i=pipes.length-1; i >=0; i--){
        pipes[i].show();
        pipes[i].update();
        
        if(pipes[i].offscreen()){
           pipes.slice(i,1);
           }
      
          if(pipes[i].hits(train)){
              console.log("HIT!");
              
          }
          
          
          
        }
    train.show();
    train.update();
     if(frameCount%100==0){
            pipes.push(new Pipe());

            }

    
       
  }


function keyPressed(){

    if(key == ' '){
        train.up();
        //console.log("PRESSED!");
        }

   


}
