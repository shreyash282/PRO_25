class Paper {
    constructor(x,y,radius){
        var option = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
}
this.x = x
this.y = y
this.r = radius
this.image = loadImage("paper.png")


this.body =Bodies.circle(this.x,this.y,this.r,option)
World.add(world,this.body)
    }
    display(){
        imageMode(CENTER)
       image(this.image,this.body.position.x,this.body.position.y,2*this.r,2*this.r)
    }

}