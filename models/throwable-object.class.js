class ThrowableObject extends MovableObject {
    constructor(x, y){
        super().loadImage('./img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png');
        this.x = x;
        this.y = y;
        this.height = 40;
        this.width = 40;
        this.applyGravity();
        this.throw();
        
    }

    
    throw() {     
        this.speed = 10;
        this.speedY = 5;
        setInterval( () => {
            this.x += 10;
        }, 25)
    }
}