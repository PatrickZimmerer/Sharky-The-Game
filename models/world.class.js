class World {

    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = -100;
    isDead = false;
    statusBar = new Statusbar();
    coinBar = new Coinbar();
    bottleBar = new Bottlebar();
    throwableObjects = [];
    coin_sound = new Audio('./audio/coin.mp3');
    hurt_sound = new Audio('./audio/hurt.mp3');
    heal_sound = new Audio('./audio/heal.mp3');
    bottle_sound = new Audio('./audio/bottle.mp3');
    bubble_sound = new Audio('./audio/bubble.mp3');
    lose_sound = new Audio('/audio/lose.mp3');

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
    }

    setWorld(){
        this.character.world = this;
    }

    checkCollisions(){
        setInterval(() => {
            this.checkEnemyCollisions();
            this.checkCoinCollisions();
            this.checkBottleCollisions();
            this.checkHeartCollisions();
            this.checkThrowObjects();
            //this.checkEnemyHit();
        }, 200);
    }
    /*checkEnemyHit(){

    }*/

    checkThrowObjects(){
        if (this.keyboard.SPACE) {
            let bottle = new ThrowableObject(this.character.x + 230, this.character.y + 200)
            this.throwableObjects.push(bottle);
            this.bubble_sound.play();
        }
    }
    checkEnemyCollisions(){
        this.level.enemies.forEach( (enemy) => {
            if(this.character.isColliding(enemy) ){
                this.character.hit();
                this.character.loseCoin();
                this.coinBar.setBar(this.character.coins);
                this.statusBar.setPercentage(this.character.energy);
                this.hurt_sound.play();
            }
        });
    }

    checkCoinCollisions(){
            this.level.coins.forEach( (coin, index) => {
                if(this.character.isColliding(coin) && !coin.deletable ){
                    this.character.collectCoin();
                    this.coinBar.setBar(this.character.coins);
                    this.level.coins.splice(index, 1);
                    this.coin_sound.play();
                }
            });
            
    }

    checkBottleCollisions(){
            this.level.bottles.forEach( (bottle, index) => {
                if(this.character.isColliding(bottle) ){
                    this.character.collectBottle();
                    this.bottleBar.setBar(this.character.bottles);
                    this.level.bottles.splice(index, 1);
                    this.bottle_sound.play();
                }
            });
    }

    checkHeartCollisions(){
            this.level.hearts.forEach( (heart, index) => {
                if(this.character.isColliding(heart) ){
                    this.character.collectHeart();
                    this.statusBar.setPercentage(this.character.energy);
                    this.level.hearts.splice(index, 1);
                    this.heal_sound.play();
                }
            });
    }

    isDead(){
        setInterval(() => {
            if (this.character.energy <= 0){
                this.character.isDead();
                this.lose_sound.play();
            }
        }, 500);
    }
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.lights); 
        this.addObjectsToMap(this.level.backgroundObjects);
        this.ctx.translate(-this.camera_x, 0); 
        //------ SPACE FOR FIXED OBJECTS -------//
        this.addToMap(this.statusBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.bottleBar);
        this.ctx.translate(this.camera_x, 0); 
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.coins); 
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.hearts);
        this.addObjectsToMap(this.throwableObjects);
               

        this.ctx.translate(-this.camera_x, 0);
        let self = this;

        requestAnimationFrame(function() {
            self.draw();
        });
        }

        addObjectsToMap(objects){
            objects.forEach(object => {
                this.addToMap(object);
            });
        }

        addToMap(movableObj) {

            if(movableObj.otherDirection) {
                movableObj.flipImage(this.ctx);
            }

            movableObj.draw(this.ctx);
            movableObj.drawFrame(this.ctx);

            if (movableObj.otherDirection) {
                movableObj.flipImageBack(this.ctx);
            }
            
        }
    }