let box = document.querySelector('body');
let w = box.clientWidth,
    h = box.clientHeight;
//import {porcentaje} from './index';

// box.addEvent(window, "resize", function(e) {
//     w = box.clientWidth;
//     h = box.clientHeight;
// });
function setup(){
    createCanvas(w,h);
}

function draw(){
    //background(0);
    translate(w/2,h/2);
    stroke(50,255,255);
    rotate (frameCount*0.01);
    line(0,0,w/-3.5,0);
}

function windowResized() {
    resizeCanvas(w,h);
}