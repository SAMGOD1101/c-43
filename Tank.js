class Tank{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        this.image=loadImage("tank topview.jpg");

        World.add(world, this.body);
    }
    display(){
     var pos = this.body.position;
     
    rect(this.x,this.y,this.width,this.height);
        push()
    translate(pos.x,pos.y);
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,50, 50);
        pop();
    }
}