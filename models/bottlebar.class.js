class Bottlebar extends DrawableObject {
    IMAGES_BOTTLE_BAR = [
        './img/4. Marcadores/Purple/100_.png',
        './img/4. Marcadores/Purple/80_.png',
        './img/4. Marcadores/Purple/60_.png',
        './img/4. Marcadores/Purple/40_.png',
        './img/4. Marcadores/Purple/20_.png',
        './img/4. Marcadores/Purple/0_.png',
    ];

    constructor(){
        super();
        this.loadImages(this.IMAGES_BOTTLE_BAR);
        this.x = 8;
        this.y = 30;
        this.height = 50;
        this.width = 160;
        this.setBar(0);
    }

    setBar(percentage){
        this.percentage = percentage;
        let path = this.IMAGES_BOTTLE_BAR[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


}