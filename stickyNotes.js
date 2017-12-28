

'use strict';

var draggedEl,
    onDragStart,
    onDrag,
    OnDragEnd,
    grabPointX,
    grabPointY;
        
        onDragStart = function (ev){

var boundingClientRect;


                if(ev.target.className.indexOf('bar') === -1){

                        return;

}

                draggedEl = this;
              
                boundingClientRect = draggedEl.getBoundingClientRect();
               grabPointY = boundingClientRect.top - ev.clientY;
                grabPointX = boundingClientRect.left - ev.clientX;
                
                
                
                
                
                
                
                
                
};
        
        onDrag = function(ev){
if(!draggedEl){
return;
}
        var posX = ev.clientX + grabPointX, 
            posY = ev.clientY + grabPointY;
        draggedEl.style.transform = "translateX(" + posX + "px)translateY("+ posY +"px)";


};


        document.addEventListener('mousemove', onDrag, false);
        document.querySelector('.sticker').addEventListener('mousedown',onDragStart,false)

