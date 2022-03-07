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

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkEnemyCollisions();
        this.checkCoinCollisions();
        this.checkBottleCollisions();
        this.checkHeartCollisions();
    }

    setWorld(){
        this.character.world = this;
    }

    checkEnemyCollisions(){
        setInterval(() => {
            this.level.enemies.forEach( (enemy) => {
                if(this.character.isColliding(enemy) ){
                    this.character.hit();
                    this.character.loseCoin();
                    this.coinBar.setBar(this.character.coins);
                    this.statusBar.setPercentage(this.character.energy);
                }
            });
        }, 1000);
    }

    checkCoinCollisions(){
        setInterval(() => {
            this.level.coins.forEach( (coin, index) => {
                if(this.character.isColliding(coin) && !coin.deletable ){
                    this.character.collectCoin();
                    this.coinBar.setBar(this.character.coins);
                    this.level.coins.splice(index, 1);
                }
            });
            
        }, 1000);
    }

    checkBottleCollisions(){
        setInterval(() => {
            this.level.bottles.forEach( (bottle, index) => {
                if(this.character.isColliding(bottle) ){
                    this.character.collectBottle();
                    this.bottleBar.setBar(this.character.bottles);
                    this.level.bottles.splice(index, 1);
                }
            });
        }, 1000);
    }

    checkHeartCollisions(){
        setInterval(() => {
            this.level.hearts.forEach( (heart, index) => {
                if(this.character.isColliding(heart) ){
                    this.character.collectHeart();
                    this.statusBar.setPercentage(this.character.energy);
                    this.level.hearts.splice(index, 1);
                }
            });
        }, 1000);
    }

    isDead(){
        setInterval(() => {
            if (this.character.energy <= 0){
                this.character.isDead();
            }
        }, 1000);
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
        this.addObjectsToMap(this.level.coins); 
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.hearts);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
               

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