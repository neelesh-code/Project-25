class Dustbin1{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width, height,{isStatic:true});
        this.width=width;
        this.height=height;

        this.image=loadImage("dustbingreen.png")

        World.add(world, this.body);
    }

    display(){
        push();
        var pos=this.body.position;
        rectMode(CENTER);
        fill("green");
        stroke("green");
        image(this.image, pos.x,pos.y, this.width, this.height);
        pop();
    }

}
