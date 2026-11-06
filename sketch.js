
let modoForma = 0;

function setup() {
  createCanvas(800, 600);
  rectMode(CENTER);
  strokeWeight(2);
}

function draw() {
  if (mouseY < height / 2) {
    background(240, 235, 220);
  } else {
    background(20, 25, 40); 
  }

  let corElemento;
  if (mouseX < width / 3) {
    corElemento = color(230, 80, 60);
  } else if (mouseX < (2 * width) / 3) {
    corElemento = color(40, 180, 160);
  } else {
    corElemento = color(240, 180, 40);
  }

  if (mouseIsPressed) {
    stroke(255, 50, 100);
    strokeWeight(4);
  } else {
    stroke(50, 50, 50, 150);
    strokeWeight(1.5);
  }

  let tamanhoBase = map(mouseX, 0, width, 15, 50);
  let espacamento = 50;

  for (let x = 50; x < width; x += espacamento) {
    for (let y = 50; y < height; y += espacamento) {
      
      // Distância de cada ponto ao cursor do rato
      let d = dist(mouseX, mouseY, x, y);
      let tamanho = map(d, 0, 400, tamanhoBase * 1.8, 5, true);

      if (modoForma === 0) {
        fill(corElemento);
        if (d < 120) {
          rect(x, y, tamanho, tamanho); 
        } else {
          ellipse(x, y, tamanho, tamanho);
        }
      } else {
        stroke(corElemento);
        if (d < 150) {
          line(x, y, mouseX, mouseY);
        } else {
          point(x, y);
        }
      }
    }
  }

  desenharInterface();
}

function keyPressed() {
  if (key === ' ' || key === 'm' || key === 'M') {
    if (modoForma === 0) {
      modoForma = 1;
    } else {
      modoForma = 0;
    }
  }
}

function desenharInterface() {
  noStroke();
  fill(mouseY < height / 2 ? 30 : 220);
  textSize(14);
  textAlign(LEFT, BOTTOM);
  text("Mover Rato: Altera cor (X) e fundo (Y)", 20, height - 40);
  text("Manter Clique: Destaca contornos | Tecla [ESPAÇO]: Alterna modo visual", 20, height - 20);
}