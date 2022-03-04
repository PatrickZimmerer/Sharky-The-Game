class Character extends MovableObject {

    height = 380;
    width = 280;
    y = 30;
    x = 0;
    speed = 5;
    IMAGES_SWIMMING = [
        './img/1.Sharkie/3.Swim/1.png',
        './img/1.Sharkie/3.Swim/2.png',
        './img/1.Sharkie/3.Swim/3.png',
        './img/1.Sharkie/3.Swim/4.png',
        './img/1.Sharkie/3.Swim/5.png',
        './img/1.Sharkie/3.Swim/6.png'
    ];
    world;
    swimming_sound = new Audio('./audio/swimming.mp3');

    constructor(){
        super().loadImage('./img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_SWIMMING);

        this.animate();
    }

    animate() {
        
        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x){
                this.moveRight();
                this.otherDirection = false;
                //this.swimming_sound.play();
            }
            
            if (this.world.keyboard.LEFT && this.x > -1000){
                this.moveLeft();
                this.otherDirection = true;
                //this.swimming_sound.play();
            }

            if (this.world.keyboard.UP && this.y > this.world.level.level_top_y){
                this.moveUp();
                //this.swimming_sound.play();
            }

            if (this.world.keyboard.DOWN && this.y < this.world.level.level_bottom_y){
                this.moveDown();
                //this.swimming_sound.play();
            }
            this.world.camera_x = -this.x + 80;
        }, 1000/60);

        setInterval(() => {

            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {

                this.playAnimation(this.IMAGES_SWIMMING);
                
            }
        }, 200);
        
    }

    
    
}