class Box{
    constructor(x,y,width,height){
     var options = {
         restitution:0.8,
         friction:1.0, 
         density:1.0
     }
   this.visibility=225
      this.body=Bodies.rectangle(x,y,width,height,options);
      this.width=width;
      this.height=height;
      World.add(world,this.body);
   }

   Score(){
   if(this.visibility<0 && this.visibility>-105){
   Score++

   }


   }
   
   display(){
        

        if(this.body.speed<3){
            var pos=this.body.position;
            rectMode(CENTER);
            rect(pos.x,pos.y,this.width,this.height);
            fill("white");

        }
        else{
        World.remove(world,this.body)
        push()
        this.visibility = this.visibility-5
        pop()

        }
   }
   }