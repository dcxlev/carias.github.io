
let ballX = 100;
let ballY = 100;

let ballSize = 40;
let speedX = 3;
let speedY = 2;

let isPaused = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);

  
  fill(255, 100, 100);
  noStroke();
  circle(ballX, ballY, ballSize);

 
  if (isPaused == false) {
    ballX = ballX + speedX;
    ballY = ballY + speedY;

    
    if (ballX + ballSize / 2 > width || ballX - ballSize / 2 < 0) {
      speedX = speedX * -1;
    }

    if (ballY + ballSize / 2 > height || ballY - ballSize / 2 < 0) {
      speedY = speedY * -1;
    }
  }

  fill(0);
  textSize(14);
  text("SPACE = Pause / Resume", 15, 25);
  text("UP = Faster | DOWN = Slower", 15, 45);
  text("Current Speed: " + abs(speedX), 15, 65);
}

function keyPressed() {
  if (key == ' ') {
    isPaused = !isPaused;
  }

  if (keyCode == UP_ARROW) {
    speedX = speedX * 1.2;
    speedY = speedY * 1.2;
  }

  if (keyCode == DOWN_ARROW) {
    speedX = speedX * 0.8;
    speedY = speedY * 0.8;
  }
}
