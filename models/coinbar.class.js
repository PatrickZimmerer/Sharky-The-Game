class Coinbar extends DrawableObject {
    IMAGES_COIN_BAR = [
        './img/4. Marcadores/Purple/100__1.png',
        './img/4. Marcadores/Purple/80_ _1.png',
        './img/4. Marcadores/Purple/60_ _1.png',
        './img/4. Marcadores/Purple/40_ _1.png',
        './img/4. Marcadores/Purple/20_ .png',
        './img/4. Marcadores/Purple/0_ _1.png',
    ];

    constructor(){
        super();
        this.loadImages(this.IMAGES_COIN_BAR);
        this.x = 8;
        this.y = 68;
        this.height = 50;
        this.width = 190;
        this.setBar(0);
    }

    setBar(percentage){
        this.percentage = percentage;
        let path = this.IMAGES_COIN_BAR[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

}