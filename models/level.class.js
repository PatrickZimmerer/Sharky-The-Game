class Level {
    enemies;
    lights;
    backgroundObjects;
    level_end_x = 2100;
    level_bottom_y = 180;
    level_top_y = -165;

    constructor(enemies, lights, backgroundObjects){
        this.enemies = enemies;
        this.lights = lights;
        this.backgroundObjects = backgroundObjects;
    }
}