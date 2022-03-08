let canvas;
let world;
let keyboard = new Keyboard();
let e;

function getById(id){
    return document.getElementById(id);
}

function init(){
    getById('fullscreen').classList.remove('d-none');
    getById('wrapper').classList.add('d-none');
    canvas = getById('canvas');
    canvas.classList.remove('d-none');
    world = new World(canvas, keyboard);

}

function fullscreen(){
    canvas.requestFullscreen();
}

window.addEventListener('keydown', (e) =>{
    if(e.keyCode == 39){
        keyboard.RIGHT = true;
    }
    if(e.keyCode == 37){
        keyboard.LEFT = true;
    }
    if(e.keyCode == 38){
        keyboard.UP = true;
    }
    if(e.keyCode == 40){
        keyboard.DOWN = true;
    }
    if(e.keyCode == 32){
        keyboard.SPACE = true;
    }
    
});

window.addEventListener('keyup', (e) =>{
    if(e.keyCode == 39){
        keyboard.RIGHT = false;
    }
    if(e.keyCode == 37){
        keyboard.LEFT = false;
    }
    if(e.keyCode == 38){
        keyboard.UP = false;
    }
    if(e.keyCode == 40){
        keyboard.DOWN = false;
    }
    if(e.keyCode == 32){
        keyboard.SPACE = false;
    }
});
