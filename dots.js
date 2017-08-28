const dots = [];

const setColor = () => {
  const randomColor = [random(255), random(255), random(255)];
  fill(color(randomColor));
}

const getDistance = (circleA, circleB) => {
  const dx = circleA.x - circleB.x;
  const dy = circleA.y - circleB.y;
  return Math.sqrt(dx * dx + dy * dy);
}

const hasCollision = (circleA, circleB) => {
  const distance = getDistance(circleA, circleB);
  return (distance < circleA.r + circleB.r);
}

const createDots = () => {
  const angle = random(Math.PI * 2);
  const diameter = random(10, 20);
  const startPoint = { x: random(windowWidth), y: random(windowHeight) };
  const currentBoundingBox = { x: startPoint.x, y: startPoint.y, r: diameter / 2 };
  const startArea = { x: windowWidth / 2, y: windowHeight / 2, r: windowWidth < windowHeight ? windowWidth * 0.4 : windowHeight * 0.4 };
  if (dots.some(e => hasCollision(e, currentBoundingBox))) {
    console.log('nooooo!');
  } else {
    push();
    setColor();
    translate(startPoint.x, startPoint.y);
    rotate(angle);
    rect(0, 0, 2, diameter / 2, 2);
    dots.push(currentBoundingBox);
    pop();
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(600);
  rectMode(RADIUS);
  noStroke();
}

function draw() {
  createDots();
}

function reset() {
  background('white');
  dots.length = 0;
  createdots();

}

function mouseClicked() {
  reset();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  reset();
}
