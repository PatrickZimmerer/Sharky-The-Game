class World {

    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = -100;
    isDead = false;

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
        this.checkDeath();
    }

    setWorld(){
        this.character.world = this;
    }

    checkCollisions(){
        setInterval(() => {
            this.level.enemies.forEach( (enemy) => {
                if(this.character.isColliding(enemy) ){
                    this.character.hit();
                    console.log('energy is', this.character.energy)
                }
            });
        }, 1000);
    }

    checkDeath(){
        setInterval(() => {
            if (this.character.energy <= 0){
                this.character.isDead = true;
                console.log(this.character.isDead);
            }
        }, 1000);
    }
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.lights);  
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