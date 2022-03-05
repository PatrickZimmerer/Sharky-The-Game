class DrawableObject {

    img;
    x = 100;
    y = 130;
    height = 200;
    width = 120;
    imageCache = {};
    currentImage = 0;

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
    
    playAnimation(images){
        let i = this.currentImage % images.length; // i = 0, 1, 2, ... 6, 0, 1, 2
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    
    drawFrame(ctx){

        if(this instanceof Character || this instanceof Enemy || 
           this instanceof Endboss || this instanceof Coin ||
           this instanceof Bottle){
        ctx.beginPath();
        ctx.lineWidth = "2";
        ctx.strokeStyle = "transparent";
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        }
    }

    resolveImageIndex(){
        if (this.percentage >= 100) {
            return 0;
        } else if (this.percentage >= 80){
            return 1;
        } else if (this.percentage >= 60){
            return 2;
        } else if (this.percentage >= 40){
            return 3;
        } else if (this.percentage >= 20){
            return 4;
        } else if (this.percentage >= 0){
            return 5;
        }
    }
    
}