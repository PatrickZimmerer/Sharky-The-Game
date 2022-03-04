class World {

    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = -100;
    isDead = false;
    statusBar = new Statusbar();

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
            this.level.enemies.forEach( (enemy) => {
                if(this.character.isColliding(enemy) ){
                    this.character.hit();
                    this.statusBar.setPercentage(this.character.energy);
                    console.log(this.statusBar.percentage, this.character.energy)
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
        this.ctx.translate(this.camera_x, 0);
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