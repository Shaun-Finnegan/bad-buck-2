const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const image = new Image();
image.src = "images/bad buck game map.png";

const playerImage = new Image();
playerImage.src = "images/playerDown.png";

image.onload = () => {
    ctx.drawImage(image, -1000, -550);
    ctx.drawImage(playerImage, canvas.width/2 - playerImage.width/2, canvas.height/2);
};




