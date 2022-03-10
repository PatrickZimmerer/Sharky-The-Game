class MovableObject extends DrawableObject {

    offsetW = 0;
    offsetH = 0;
    offsetX = 0;
    offsetY = 0;
    speed = 0.04;
    speedY = 0.5;
    acceleration = 1;
    otherDirection = false;
    energy = 100;
    hadFirstContact = false;
    lastHit = 0;
    
    
    flipImage(ctx){
        ctx.save();
        ctx.translate(this.width, 0);
        ctx.scale(-1, 1 );
        this.x = this.x * -1;
    }


    flipImageBack(ctx){
        ctx.restore();
        this.x = this.x * -1;
    }


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25)
    }


    isAboveGround(){

        return this.y < 1550;
    }

    
    isColliding(movableObj) {
        return this.x + this.width - this.offsetW > movableObj.x && 
        this.y + this.height - this.offsetH > movableObj.y && 
        this.x + this.offsetX < movableObj.x && 
        this.y + this.offsetY < movableObj.y + movableObj.height;
    }


    hit(){
        this.energy -= 10;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit; // differnece in ms
        timePassed = timePassed / 1000; // difference in sec
        return timePassed < 1;
    }

    
    isDead() {
        return this.energy == 0;
    }

    
    moveLeft(){        
        this.x -= this.speed;
    }


    moveRight(){
        this.x += this.speed;
    }


    moveDown(){
        this.y += this.speed;
    }


    moveUp(){
        this.y -= this.speed;
    }

    
}