function Pipe(){
this.top = random(height/2);
    this.bottom = random(height/2);
this.x = width;
this.w = 20;
this.stop = false;
    this.speed = 2;
    this.show = function(){
        fill(255);
      if(this.stop){
        fill(255,0,0);
      }
        rect(this.x,0,this.w, this.top); // Górne bloki
        rect(this.x, height-this.bottom, this.w, this.bottom);  //Dolne boki



    }
    this.update = function(){
            this.x -= this.speed;

        }

    this.offscreen = function(){
        if(this.x < -this.w){
            return true;
            }
            else {
                return false;
            }

    }
    this.hits = function(train){
        if(train.y < this.top || train.y > height - this.bottom)
            if(train.x>this.x && train.x < this.x + this.w){
                this.stop = true;
            return true;
        
            }
        this.stop = false;
        return false;
        }



}