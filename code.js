var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var startingpoint = createSprite(10, 210,100,180);
startingpoint.shapeColor="green"
var endingpoint = createSprite(390, 210,100,180);
endingpoint.shapeColor="yellow"

var count=3

var player = createSprite(20, 200,20,20);
player.shapeColor="blue"
var wall1 = createSprite(200, 120,400,10);
var wall2 = createSprite(200, 300,400,10);


var target1 = createSprite(100, 250,30,30);
target1.shapeColor="red"
target1.velocityY=-1



var target2 = createSprite(150, 270,30,30);
target2.shapeColor="red"
target2.velocityY=1
var target3 = createSprite(280, 220,30,30);
target3.shapeColor="red"
target3.velocityY=-1
var target4 = createSprite(220, 150,30,30);
target4.shapeColor="red"
target4.velocityY=1

target1.rotationSpeed=40
target2.rotationSpeed=30
target3.rotationSpeed=40
target4.rotationSpeed=30
playSound("sound//category_bell/long_bell_notification.mp3", true);

function draw() {
background("white");
 var edges=createEdgeSprites();
target1.bounceOff(wall1);
target1.bounceOff(wall2);
target2.bounceOff(wall1);
target2.bounceOff(wall2);
target3.bounceOff(wall1);
target3.bounceOff(wall2);
target4.bounceOff(wall1);
target4.bounceOff(wall2);
player.bounceOff(edges)

if(keyDown("left")){
  player.x-=3
}
if(keyDown("RIGHT")){
  player.x+=3
}

if(player.isTouching(target1)||player.isTouching(target2)||
player.isTouching(target3)||player.isTouching(target4)){
  player.x=20
  player.y=200
  count=count-1
 
   
}
if(player.isTouching(endingpoint)){
  target1.velocityY=0
  target2.velocityY=0
  target3.velocityY=0
  target4.velocityY=0
   fill("black")
   textSize(25)
  text("Player cross the optical stream",40,50)
  stopSound("assets/category_bell/long_bell_notification.mp3");
  
 
}
if(count===0){
  target1.velocityY=0
  target2.velocityY=0
  target3.velocityY=0
  target4.velocityY=0
   fill("black")
   textSize(25)
  text("You lost the game",50,50)
  stopSound("assets/category_bell/long_bell_notification.mp3");
  
}
fill("black")
textSize(25)
text("Lives:"+count,150,350)




drawSprites();
    
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
