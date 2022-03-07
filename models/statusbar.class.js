class Statusbar extends DrawableObject {
    IMAGES_HEALTH_BAR = [
        './img/4. Marcadores/Purple/100_ .png',
        './img/4. Marcadores/Purple/80_ .png',
        './img/4. Marcadores/Purple/60_ .png',
        './img/4. Marcadores/Purple/40_ .png',
        './img/4. Marcadores/Purple/20__1.png',
        './img/4. Marcadores/Purple/0_ .png'
    ];
    
    world;

    constructor(){
        super();
        this.loadImages(this.IMAGES_HEALTH_BAR);
        this.x = 8;
        this.y = -8;
        this.height = 50;
        this.width = 160;
        this.setPercentage(100);        
    }

    setPercentage(percentage){
        this.percentage = percentage;
        let path = this.IMAGES_HEALTH_BAR[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    };

   

}