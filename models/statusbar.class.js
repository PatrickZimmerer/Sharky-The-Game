class Statusbar extends DrawableObject {
    IMAGES_HEALTH_BAR = [
        './img/4. Marcadores/Purple/100_ .png',
        './img/4. Marcadores/Purple/80_ .png',
        './img/4. Marcadores/Purple/60_ .png',
        './img/4. Marcadores/Purple/40_ .png',
        './img/4. Marcadores/Purple/20__1.png',
        './img/4. Marcadores/Purple/0_ .png'
    ];
    /*
    IMAGES_COIN_BAR = [
        './img/4. Marcadores/Purple/0_ _1.png',
        './img/4. Marcadores/Purple/20_ .png',
        './img/4. Marcadores/Purple/40_ _1.png',
        './img/4. Marcadores/Purple/60_ _1.png',
        './img/4. Marcadores/Purple/80_ _1.png',
        './img/4. Marcadores/Purple/100__1.png'
    ];
    IMAGES_BOTTLE_BAR = [
        './img/4. Marcadores/Purple/0_.png',
        './img/4. Marcadores/Purple/20_.png',
        './img/4. Marcadores/Purple/40_.png',
        './img/4. Marcadores/Purple/60_.png',
        './img/4. Marcadores/Purple/80_.png',
        './img/4. Marcadores/Purple/100_.png'
    ];
    */
    
    world;

    constructor(){
        super();
        this.loadImages(this.IMAGES_HEALTH_BAR);
        this.x = 28;
        this.y = -8;
        this.height = 50;
        this.width = 180;
        this.setPercentage(100);        
    }

    setPercentage(percentage){
        this.percentage = percentage;
        let path = this.IMAGES_HEALTH_BAR[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    };

    resolveImageIndex(){
        if (this.percentage == 100) {
            return 0;
        } else if (this.percentage == 80){
            return 1;
        } else if (this.percentage == 60){
            return 2;
        } else if (this.percentage == 40){
            return 3;
        } else if (this.percentage == 20){
            return 4;
        } else {
            return 5;
        }
    }

}