let zBereich;

function setup() {
  zBereich = createCanvas(windowWidth,windowHeight);
  zBereich.position(0,0)
  zBereich.style('z-Index','-1')
}

function draw() {
  noStroke();
  fill(255,0,0)
  //circle(mouseX-100,mouseY-100,20)
}