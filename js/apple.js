class Apple{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("images/apple4.png")
		this.body=Bodies.circle(this.x+60, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var applePos=this.body.position;	
		push();
		translate(applePos.x, applePos.y); 
		imageMode(CENTER);
		image(this.image, 0,0,this.r*2.35, this.r*2.35);
		pop();
 }
}