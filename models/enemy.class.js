class Enemy extends MovableObject {
    offsetW = 0;
    offsetH = 0;
    offsetX = 0;
    offsetY = 0;
    height = 80;
    width = 100;
    IMAGES_SWIMMING = [
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png',
    ];


    constructor() {
        super().loadImage('./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png');  
        this.loadImages(this.IMAGES_SWIMMING);
        this.x = 600 + Math.random() * 2100; // Zahl zw 200 und 700
        this.y = -20 + Math.random() * 600
        this.speed = 0.2 + Math.random() * 0.4;
        this.speedY = 0.02 + Math.random() * 0.4;
        this.animate();
        
    }

    animate() {
        setInterval( () => {
        this.moveLeft();
        }, 1000 / 60);

        /*setInterval( () => {
            if (this.y >= 180 ) {
                this.moveDown();
                if (this.y <= 0) {
                this.moveUp();
                } 
            }
            } 
        , 1000 / 60);
        */

        setInterval(() => {
            this.playAnimation(this.IMAGES_SWIMMING);
        }, 150);
    }


}
    

