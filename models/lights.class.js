class Light extends MovableObject {
    y=10;
    height = 150;
    width = 500;

    constructor() {
        super().loadImage('./img/3. Background/Layers/1. Light/1.png')

        this.x = Math.random() * 2500; // Zahl zw 200 und 700
        this.animate();
    }
    

    animate(){
        this.moveLeft();
    }
}