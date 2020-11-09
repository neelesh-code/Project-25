class Ground{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width, height,{isStatic:true});
        this.width=width;
        this.height=height;
        World.add(world, this.body);
    }

    display(){
        push();
        var pos=this.body.position;
        rectMode(CENTER);
        fill("grey");
        stroke("black");
        rect(pos.x,pos.y, this.width, this.height);
        pop();
    }









}