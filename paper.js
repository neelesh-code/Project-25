class Paper{
    constructor(x,y,radius){
        this.body= Matter.Bodies.circle(x,y,radius, {isStatic:false, restitution:0.3, friction:0.5, density:1.2});
        this.radius=radius;
        
        this.image=loadImage("paper.png")
        
        World.add(world, this.body)

        
    }

    display(){

        push();
        imageMode(CENTER);
        fill("purple");
        stroke("purple");
        var pos=this.body.position
        image(this.image, pos.x, pos.y, this.radius*2,this.radius*2);
        pop();

    }








}