class Heart extends DrawableObject {
    width = 60;
    height = 60;
    
    constructor(){
        super().loadImage('./img/4. Marcadores/green/100_  copia 3.png');
        this.x = 400 + Math.random() * 1700;
        this.y = 40 + Math.random() * 360
    }
}