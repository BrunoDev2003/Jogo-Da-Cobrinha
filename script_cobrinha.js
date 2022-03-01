let canvas = document.getElementById('snake');
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 0 * box,
    y: 0 * box

}

function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0,0,16 * box, 16 * box);

}
function criarCobrinha() {
    for(i=0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y,box,box);
    }


}


criarBG();
criarCobrinha();