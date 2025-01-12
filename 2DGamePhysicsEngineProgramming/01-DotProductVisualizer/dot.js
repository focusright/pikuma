var a;
var b;
var c;

function setup() {
  createCanvas(800, 800);
}

function vector_dot(a, b) {
  return (a.x * b.x) + (a.y * b.y);
}

function draw() {
  translate(400, 400);
  background(0);

  a = createVector(300.0, 0.0);
  b = createVector(mouseX-440, mouseY-370);
  c = vector_dot(a,b) / 300.0;

  // Gray projection
  if (c > -300 && c < 300) {
    stroke("#222");
    strokeWeight(1);
    line(b.x,b.y, c, 0);
  }

  // Two white lines
  stroke("white");
  strokeWeight(1);
  line(0, 0, a.x, a.y);
  line(0, 0, b.x, b.y);

  // Two white arrows (a, b)
  push()
  fill("white");
  var offset = 6.0;
  var angle = atan2(0 - a.y, 0 - a.x); //gets the angle of the line
  translate(a.x, a.y); //translates to the destination vertex
  rotate(angle-HALF_PI); //rotates the arrow point
  triangle(-offset*0.5, offset, offset*0.5, offset, 0, -offset/2); //draws the arrow point as a triangle
  pop();
  push()
  fill("white");
  var offset = 6.0;
  var angle = atan2(0 - b.y, 0 - b.x); //gets the angle of the line
  translate(b.x, b.y); //translates to the destination vertex
  rotate(angle-HALF_PI); //rotates the arrow point
  triangle(-offset*0.5, offset, offset*0.5, offset, 0, -offset/2); //draws the arrow point as a triangle
  pop();

  // Magenta dot product
  stroke((c >= 0) ? "#FF00FF" : "#FF00FF77");
  strokeWeight(3);
  line(0, 1, c, 1);

  // Text labels
  noStroke();
  textSize(18);
  fill("white");
  text("a", a.x+10, a.y+3);
  text("b", b.x-25, b.y-10);
  fill((c >= 0) ? "#FF00FF" : "#FF00FF77");
  text("a.b = "+(c/300).toFixed(2), c-100, 30);

  // Origin circle
  noStroke();
  fill("white");
  circle(0, 0, 3);
}
