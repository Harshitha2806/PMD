class Ground {
    constructor(x, y, width, height) {
      var options = 
      {
          isStatic : true
      }

      this.x=x;
      this.y=y;
      this.width = width;
      this.height = height;

      this.ground = Bodies.rectangle(x, y, width, height , options );
      World.add(world, this.ground);
    }
      
     
    display(){
     var pos =this.ground.position;
      //var angle = this.body.angle;
      push();
     translate(pos.x,pos.y);
      //rotate(angle);
      rectMode(CENTER);
      fill(255);
      rect(0,0, this.width, this.height);
      pop ();
    }
  }