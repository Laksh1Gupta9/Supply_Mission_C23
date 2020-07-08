class bars{
 constructor(x,y){
     var options = {
      isStatic:true
     }
  this.body=Bodies.rectangle(x,y,width,height,options);
  this.height = height;
  this.width = width

  World.add(world, this.body);
 }

 display(){
  
   push();
   fill("red"); 
   rect(x,y,this.width,this.height);
   pop();

 }
}