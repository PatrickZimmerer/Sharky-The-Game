class MovableObject extends DrawableObject {

    offsetW = 0;
    offsetH = 0;
    offsetX = 0;
    offsetY = 0;

    speed = 0.04;
    speedY = 0.04;
    otherDirection = false;
    energy = 100;

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

    
    isColliding(movableObj) {
        return this.x + this.width - this.offsetW > movableObj.x && 
        this.y + this.height - this.offsetH > movableObj.y && 
        this.x + this.offsetX < movableObj.x && 
        this.y + this.offsetY < movableObj.y + movableObj.height;
    }

    hit(){
        this.energy -= 20;
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

    playAnimation(images){
        let i = this.currentImage % images.length; // i = 0, 1, 2, ... 6, 0, 1, 2
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
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