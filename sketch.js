var garden, rabbit, apple, orangeL, redL;
var gardenImg, rabbitImg, carrotImg, orangeImg, redImg;


function preload() {
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}


function setup() {

  createCanvas(windowWidth, windowHeight);
  // Moving background
  // garden=createSprite(200,200);
  // garden.addImage(gardenImg);


  //creating boy running
  rabbit = createSprite(160, height-50, 20, 20);
  rabbit.scale = 1;
  rabbit.debug = false;
  rabbit.setCollider("rectangle",0,0,150,400);
  rabbit.addImage(rabbitImg);
}

function draw() {
  background(gardenImg);

  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;

  edges = createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();


  // var select_sprites = Math(random(1,3));

  // var select_sprites = Math.random(random(1,3));

  // var select_sprites = Math.round(1,3);

  var select_sprites = Math.round(random(1, 3));


  if (frameCount % 50 == 0) {
    if (select_sprites == 1) {
      createApples();
    } else if (select_sprites == 2) {
      createOrange();
    } else {
      createRed();
    }
  }

  // if (frameCount % 80 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }
  // }

  // if (frameCount / 80 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }

  // if (frameCount % 80 = 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }



}

function createApples() {
  apple = createSprite(random(50, width-50), 40, 10, 10);
  apple.addImage(appleImg);
  apple.scale = 0.25;
  apple.velocityY = 3;
  apple.lifetime = 150;

}

function createOrange() {
  orangeL = createSprite(random(50, width-50), 40, 10, 10);
  orangeL.addImage(orangeImg);
  orangeL.scale = 0.25;
  orangeL.velocityY = 3;
  orangeL.lifetime = 150;
}

function createRed() {
  redL = createSprite(random(50, width-50), 40, 10, 10);
  redL.addImage(redImg);
  redL.scale = 0.25;
  redL.velocityY = 3;
  redL.lifetime = 150;
}
