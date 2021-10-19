class Player{
    constructor(x,y)
    {
        var options={
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.image = loadImage("./images/player.png")
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world,this.body);
    }

    handlePlayerControl()
    {
        if(keyDown(UP_ARROW))
        {
            this.body.position.y-=5;
        }
        if(keyDown(DOWN_ARROW))
        {
            this.body.position.y+=5;
        }
        if(keyDown(LEFT_ARROW) && this.body.position.x>width/2-230)
        {
            this.body.position.x-=5;
        }
        if(keyDown(RIGHT_ARROW)&& this.body.position.x<width/2+200)
        {
            this.body.position.x+=5;
        }
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        imageMode(CENTER);
        image(this.image,0,0,150,150);
        pop();
    }
}