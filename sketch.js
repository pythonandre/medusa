let transform = 1;

setInterval(() => {
  let r = (180 * pow(abs(sin(frameCount * 15)), 0.1) + 225) * frameCount / 80;

  if (transform >= 0) {
    transform -= 0.05;
  }
  if (transform <= 0) {
    transform += 1;
  }
}, 55);

function setup() {
  createCanvas(1920, 1080, WEBGL);
  angleMode(DEGREES);
  colorMode(HSB);
  stroke(200, 150, 150);
  strokeWeight(4);
}

function draw() {
  background(0, 0, 0);
  orbitControl(4, 4); // 3D mouse control
  rotateX(55);

  for (let i = 0; i < 60; i += 1) {
    beginShape(POINTS);
    for (let j = 0; j < 360; j += 2) {
      let r = (180 * pow(abs(sin(frameCount * 15)), 0.1) + 225) * i / 80;
      let x = r * cos(j) * 1.3;
      let y = r * sin(j) * 1.3;

      let z = formadeMedusa(450, r / 50, 0.8, 0.111, transform) - 200 +
        perturbacion(-10, r / 100, 12, j);

      vertex(x, y, z);
    }
    endShape();
  }
}

function formadeMedusa(A, r, a, b, transform) {
  return A * pow(Math.E, -b * pow(abs(r), 1.9)) * pow(abs(r), a) * transform;
}

function perturbacion(A, r, p, angle) {
  return 1 + A * pow(r, 2) * sin(p * angle);
}