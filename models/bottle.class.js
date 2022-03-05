class Bottle extends DrawableObject {
    
    width = 80;
    height = 110;

    constructor(){
        super().loadImage('./img/4. Marcadores/Posión/Dark - Right.png');
        this.x = 100 + Math.random() * 1700;
        this.y = 350;
    }
}