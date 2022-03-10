class Character extends MovableObject {

    height = 400;
    width = 300;
    offsetW = 80;
    offsetH = 100;
    offsetX = 20;
    offsetY = 250;
    y = 50;
    speed = 5;
    coins = 0;
    bottles = 0;
    gameOver = false;

    IMAGES_IDLE = [
        './img/1.Sharkie/1.IDLE/1.png',
        './img/1.Sharkie/1.IDLE/2.png',
        './img/1.Sharkie/1.IDLE/3.png',
        './img/1.Sharkie/1.IDLE/4.png',
        './img/1.Sharkie/1.IDLE/5.png',
        './img/1.Sharkie/1.IDLE/6.png',
        './img/1.Sharkie/1.IDLE/7.png',
        './img/1.Sharkie/1.IDLE/8.png',
        './img/1.Sharkie/1.IDLE/9.png',
        './img/1.Sharkie/1.IDLE/10.png',
        './img/1.Sharkie/1.IDLE/11.png',
        './img/1.Sharkie/1.IDLE/12.png',
        './img/1.Sharkie/1.IDLE/13.png',
        './img/1.Sharkie/1.IDLE/14.png',
        './img/1.Sharkie/1.IDLE/15.png',
        './img/1.Sharkie/1.IDLE/16.png',
        './img/1.Sharkie/1.IDLE/17.png',
        './img/1.Sharkie/1.IDLE/18.png'
    ];
    IMAGES_SWIM = [
        './img/1.Sharkie/3.Swim/1.png',
        './img/1.Sharkie/3.Swim/2.png',
        './img/1.Sharkie/3.Swim/3.png',
        './img/1.Sharkie/3.Swim/4.png',
        './img/1.Sharkie/3.Swim/5.png',
        './img/1.Sharkie/3.Swim/6.png'
    ];
    IMAGES_ATTACK = [
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png',
    ]
    IMAGES_HURT = [
        './img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/4.png'
    ];
    IMAGES_DEAD = [
        './img/1.Sharkie/6.dead/1.Poisoned/1.png',
        './img/1.Sharkie/6.dead/1.Poisoned/2.png',
        './img/1.Sharkie/6.dead/1.Poisoned/3.png',
        './img/1.Sharkie/6.dead/1.Poisoned/4.png',
        './img/1.Sharkie/6.dead/1.Poisoned/5.png',
        './img/1.Sharkie/6.dead/1.Poisoned/6.png',
        './img/1.Sharkie/6.dead/1.Poisoned/7.png',
        './img/1.Sharkie/6.dead/1.Poisoned/8.png',
        './img/1.Sharkie/6.dead/1.Poisoned/9.png',
        './img/1.Sharkie/6.dead/1.Poisoned/10.png',
        './img/1.Sharkie/6.dead/1.Poisoned/11.png',
        './img/1.Sharkie/6.dead/1.Poisoned/12.png'
    ];
    swim_sound = new Audio('./audio/swim.mp3');
    
    lose_sound = new Audio('./audio/lose.mp3');


    constructor(){
        super().loadImage('./img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_ATTACK);
        this.animate();
    }


    collectCoin(){
        this.coins += 20;
        if (this.coins >= 100) {
            this.coins = 100;
        }
    }


    loseCoin(){
        this.coins -= 5;
        if (this.coins <= 0) {
            this.coins = 0;
        }
    }


    collectBottle(){
        this.bottles += 20;
        if (this.bottles >= 100) {
            this.bottles = 100
        }
    }


    collectHeart(){
        this.energy +=20;
        if (this.energy >= 100) {
            this.energy = 100;
        }
    }


    animate() {
        
        setInterval(() => {
            this.characterSwimming();
        }, 1000/40);

        setInterval(() => {
            this.characterInteraction();
        }, 200);
    }


    characterSwimming(){
        if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x){
                this.swimRight();
            }
            if (this.world.keyboard.LEFT && this.x > -1000){
                this.swimLeft();
            }
            if (this.world.keyboard.UP && this.y > this.world.level.level_top_y){
                this.swimUp();
            }
            if (this.world.keyboard.DOWN && this.y < this.world.level.level_bottom_y){
                this.swimDown();
            }
            this.world.camera_x = -this.x + 80;
    }


    swimRight(){
        this.moveRight();
        this.otherDirection = false;
        this.swim_sound.play();
    }


    swimLeft(){
        this.moveLeft();
        this.otherDirection = true;
        this.swim_sound.play();
    }


    swimUp(){
        this.moveUp();
        this.swim_sound.play();
    }


    swimDown(){
        this.moveDown();
        this.swim_sound.play();
    }
    

    characterInteraction(){
        if (this.isDead()) {
            this.playAnimation(this.IMAGES_DEAD);
        }else if (this.isHurt()){
            this.playAnimation(this.IMAGES_HURT)
        }else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN){
            this.playAnimation(this.IMAGES_SWIM);                
        }else if (this.world.keyboard.SPACE){
            this.playAnimation(this.IMAGES_ATTACK);
        }else{
            this.playAnimation(this.IMAGES_IDLE);
        }
    }

}