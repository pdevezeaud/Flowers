
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Variable
//let size = 0;
let positionX = 0;
let positionY = 0;
let angle = 0;


function drawFlower(){
    //Circle
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(positionX, positionY, 20,0,Math.PI * 2);
    ctx.closePath();
    ctx.fill()
    ctx.stroke();

}

function animate() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
positionX += 0.5;
positionY += 0.5;
angle += 0.1;
    
drawFlower();


requestAnimationFrame(animate);
}

animate();