class World {

    character = new Character();
    endboss = level1.enemies[level1.enemies.length - 1];
    level = level1;
    canvas;
    ctx;
    keyboard;
    lose = false;
    win = false;
    camera_x = -100;
    statusBar = new Statusbar();
    coinBar = new Coinbar();
    bottleBar = new Bottlebar();
    youWin = new YouWin();
    gameOver = new GameOver();
    tryAgain = new TryAgain();
    throwableObjects = [];
    images = [];
    coin_sound = new Audio('./audio/coin.mp3');
    hurt_sound = new Audio('./audio/hurt.mp3');
    heal_sound = new Audio('./audio/heal.mp3');
    bottle_sound = new Audio('./audio/bottle.mp3');
    bubble_sound = new Audio('./audio/bubble.mp3');


    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
        this.checkGameState();
    }


    checkGameState(){
        setInterval(() => {
        if (this.character.energy == 0) {
            this.lose = true;
            this.system.sound.volume = 0;
        }
        if (this.endboss.energy == 0) {
            console.log('you win')
            this.win = true;
        }
        }, 400);
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
        }, 200);
    }
    

    checkThrowObjects(){
        if (this.keyboard.SPACE && this.character.bottles > 0) {
            let throwableObject = new ThrowableObject(this.character.x + 230, this.character.y + 200)
            this.throwableObjects.push(throwableObject);
            this.bubble_sound.play();
            this.character.bottles -=10;
            this.bottleBar.setBar(this.character.bottles);
            this.checkEnemyHit();
        }
    }


    checkEnemyHit(){
            
        
        this.throwableObjects.forEach( (enemy) => {
            if(this.throwableObject.isColliding(enemy) ){
                console.log('enemy hit');
                this.enemy.hit();
            }
        });
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
    

    draw() {
        if(!this.lose && !this.win) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.ctx.translate(this.camera_x, 0);
            this.addBackgrounds();
            this.ctx.translate(-this.camera_x, 0); 
            this.addBars();  // SPACE FOR FIXED OBJECTS
            this.ctx.translate(this.camera_x, 0);                         
            this.addToMap(this.character);
            this.addAllObjectsToMap();
            this.ctx.translate(-this.camera_x, 0);
            let self = this;
            requestAnimationFrame(function() {
                self.draw();
            });
        }else if(!this.lose && this.win) {
            this.addToMap(this.youWin);
        }else if(this.lose && !this.win) {
            this.addToMap(this.gameOver);
            this.showTryAgain();
        } 

    }

    showTryAgain(){
        document.getElementById('tryAgain').classList.remove('d-none');
    }


    addBars(){
        this.addToMap(this.statusBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.bottleBar);
    }


    addBackgrounds(){
        this.addObjectsToMap(this.level.lights); 
        this.addObjectsToMap(this.level.backgroundObjects);
    }


    addAllObjectsToMap(){
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.coins); 
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.hearts);
        this.addObjectsToMap(this.throwableObjects);
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
    

    // preloadImages(imagesVar) {

    //     for (let i = 0; i < imagesVar.length; i++) {
      
    //       let image = new Image();
      
    //       image.src = imagesVar[i];
      
    //       images.push(image); // push image-path to images-array (which contains all image-paths)
      
    //     }
      
    // }

    // checkBackgroundImageCache(src_path) {

    //     // Check if image is found in images-array.
      
    //     base_image = images.find(function (img) {
      
    //       return img.src.endsWith(src_path.substring(src_path, src_path.length));
      
    //     })
      
        
      
    //     // Create new image if not found in cache
      
    //     if (!base_image) {
      
    //       base_image = new Image();
      
    //       base_image.src = src_path;
      
    //     }
        
    //     return base_image;
      
    // }
}