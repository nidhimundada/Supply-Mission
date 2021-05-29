class Box {
    constructor(x, y, l, b) {
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, l, b, options);
        this.length = l;
        this.breadth = b;
        World.add(world,this.body);
        
    }

    displayBox() {
        var pos = this.body.position
        rectMode(CENTER);
        rect(pos.x, pos.y, this.length, this.breadth);
        
    }

}