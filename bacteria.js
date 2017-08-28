const bacteria = [];

setColor = () => {
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

createBacterium = () => {
  const angle = random(Math.PI * 2);
  const diameter = random(10, 20);
  const startPoint = { x: random(windowWidth), y: random(windowHeight) };
  const currentBoundingBox = { x: startPoint.x, y: startPoint.y, r: diameter / 2 };
  const startArea = { x: windowWidth / 2, y: windowHeight / 2, r: windowWidth < windowHeight ? windowWidth * 0.4 : windowHeight * 0.4 };
  if (bacteria.some(e => hasCollision(e, currentBoundingBox))) {
    console.log('nooooo!');
  } else {
    // if (hasCollision(startArea, currentBoundingBox)) {
      push();
      setColor();
      translate(startPoint.x, startPoint.y);
      rotate(angle);
      const bacterium = rect(0, 0, 2, diameter / 2, 2);
      bacteria.push(currentBoundingBox);
      pop();
    // }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(600);
  rectMode(RADIUS);
  noStroke();
  noLoop();
}

const createBacteria = () => {
  let i = 0;
  console.log(performance.now());
  while(i < 20000) {
    createBacterium();
    i++;
  }
  console.log(performance.now());
}

function draw() {
  createBacteria();
}

function reset() {
  background('white');
  bacteria.length = 0;
  createBacteria();

}

function mouseClicked() {
  reset();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  reset();
}
