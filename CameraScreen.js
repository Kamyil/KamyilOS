  

  var video;
var canvas;
var button;
var snaps = [];



function setup(){
    canvas = createCanvas(450,400);
    canvas.parent('CameraScreen');
 
    canvas.background(50);
     video = createCapture(VIDEO);
      video.size(450,400);
      video.hide();
      button = createButton('');
      button.id('snap');
      button.parent('CameraScreen');
    button.mousePressed(takeSnap);
}
function takeSnap(){
snaps.push(video.get());
}
function draw(){
 var w=80, h = 60, x = 0, y= 0;
image(video,0,0,450,400);
    for(var i = 0; i < snaps.length; i++){
        image(snaps[i],0,0);
        x = x + w;
        if(x > width) {
            x = 0;
            y = y + h;
        }
    }

}

