class MovableObject {

    offsetW = 0;
    offsetH = 0;
    offsetX = 0;
    offsetY = 0;
    
    x = 100;
    y = 130;
    img;
    height = 200;
    width = 120;
    imageCache = {};
    currentImage = 0;
    speed = 0.04;
    speedY = 0.04;
    otherDirection = false;
    energy = 100;
    
    loadImage(path){
        this.img = new Image();  // this.img = document.getElementById('image') <img id="image" src>
        this.img.src = path;
    }
    loadImages(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

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

    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx){

        if(this instanceof Character || this instanceof Enemy || 
           this instanceof Endboss){
        ctx.beginPath();
        ctx.lineWidth = "3";
        ctx.strokeStyle = "blue";
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        }
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
        }
    }

    isDead() {
        return this.energy == 0;
    }

    isHurt() {

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