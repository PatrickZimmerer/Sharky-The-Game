class Coin extends DrawableObject {
    
    width = 35;
    height = 35;
    
    constructor(){
        super().loadImage('./img/4. Marcadores/1. Coins/1.png');
        this.x = 400 + Math.random() * 1700;
        this.y = 50 + Math.random() * 380
    }
}