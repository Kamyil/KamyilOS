function Train(){
this.y = height/2;
this.x = 64;
this.lift = -14; // Siła skakania pociągu
this.gravity = 0.8; //grawitacja
this.velocity = 1; 
    this.show= function(){
        fill(255);
        rect(this.x,this.y,38,24);



}

    this.update = function(){
        this.velocity += this.gravity;
        this.y += this.velocity;

        if(this.y > height){
            this.y = height;
            this.velocity = 0;

            }
        if(this.y < 0){
            this.y = 0;
            this.velocity = 0;

        }
        
        this.up = function(){
            this.velocity += this.lift;
            console.log(this.velocity += this.lift);

            }
        
        
        
        
        
    }









}