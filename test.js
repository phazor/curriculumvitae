function setup() {
  noLoop();
}

function draw() {}

const twoCirclesShouldCollide = () => {
  const a = { x: 0, y: 0, r: 2 };
  const b = { x: 3, y: 0, r: 2 };

  console.log(hasCollision(a, b));
}

twoCirclesShouldCollide();
