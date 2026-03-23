//All Characters & Sprites were made by & copyright to Shanghai Alice(上海アリス幻樂団) with the 
//The Sprites are pulled from a data sheet using the images from this Github repo: https://github.com/Hatboxforses/Code-Studio-App-Lab-Touhou-Game
//The Sprites were originally ripped & published on this site: https://www.spriters-resource.com/pc_computer/touhoueiyashouimperishablenight/
//The Project uses 2 Librequake textures which is copyright of Contributors to the LibreQuake project https://librequake.queer.sh/
//The project is in no way reliant on these sprites & new ones could be used via drop in replacement if necessary
//The project uses the heart icon from code.org
  var playerX = 110;
  var playerY = 300;
  var enemyX = 80;
  var enemyY = 46;
  var enemyHealth = 400;
  var lives = 3;
  var liveSpam = -1;
  var spells = 3;
  var spellSpam = 0;
  var icons = getColumn("Touhou Sprites", "Property");
  var marisaPos = 1;
  var newMarisaPos;
  var shot;
  var shotX;
  var shotY;
  var eshotX;
  var eshotY;
  var c;
  var d;
  var g;
  var h;
  var i;
  var count;
  var yin1X;
  var yin1Y;
  var yin2X;
  var yin2Y;
    
  
  
  
reimuTitleScroll();

//Click the button to start the game
onEvent("startGame", "click", function() {
  setImageURL("uiBorder", icons[41]);
    setImageURL("bg2", icons[42]);
      loopNoKey();
        loopMarisa();
          setImageURL("enemyHealthBar", icons[46]);
            setPosition("enemyHealthBar", 25, 25, enemyHealth*2);
  for(i = 1; i < 4; i++){
    setImageURL("health" + i, "icon://fa-heart");
      setProperty("health" + i, "icon-color", "red");
  }
  for(i = 1; i < 4; i++){
    setImageURL("star"+i, icons[37]);
  }
  for(i = 0; i < 44; i++){
    setImageURL("enemyProjectile"+i, icons[37]);
      setPosition("enemyProjectile"+i, -100, -100);
  }
  for(i = 0; i < 10; i++){
    setImageURL("playerProjectilesN" + i, icons[39]);
      setPosition("playerProjectilesN" + i, -100, -100);
  }
  for(i = 0; i < 10; i++){
    setImageURL("playerProjectilesY1-" + i, icons[40]);
      setPosition("playerProjectilesY1-" + i, -100, -100);
  }
  for(i = 0; i < 10; i++){
    setImageURL("playerProjectilesY2-" + i, icons[40]);
      setPosition("playerProjectilesY2-" + i, -100, -100);
  }
  for(i = 1; i < 4; i++){
    setImageURL("spell" + i, icons[43]);
      setPosition("spell" + i, -100, -100);
  }
      setImageURL("yin1", icons[27]);
        setImageURL("yin2", icons[27]);
    setTimeout(function() {
      setScreen("gameScreen");
    }, 2000);
    timedLoop(20000, function() {
      marisaRandomAttack();
    });
    timedLoop(50, function() {
      hitDetect();
    });
    timedLoop(20, function() {
      marisaHitDetect();
    });
});

onEvent("restartGame", "click", function() {
  stopTimedLoop(c);
    stopTimedLoop(d);
      stopTimedLoop(g);
        clearInterval(h);
          enemyHealth = 400;
            marisaPos = 1;
              setPosition("enemySprite", 100, 46);
                lives = 3;
                  spells = 3;
                    setImageURL("uiBorder", icons[41]);
                      setImageURL("bg2", icons[42]);
                        loopNoKey();
                          loopMarisa();
                            setImageURL("enemyHealthBar", icons[46]);
                              setPosition("enemyHealthBar", 25, 25, enemyHealth/2);
  for(i = 1; i < 4; i++){
    setImageURL("health" + i, "icon://fa-heart");
      setProperty("health" + i, "icon-color", "red");
        showElement("health" + i);
  }
  for(i = 1; i < 4; i++){
    setImageURL("star"+i, icons[37]);
      showElement("star" + i);
  }
  for(i = 0; i < 44; i++){
    setImageURL("enemyProjectile" + i, icons[37]);
      setPosition("enemyProjectile" + i, -100, -100);
        showElement("enemyProjectile" + i);
  }
  for(i = 0; i < 10; i++){
    setImageURL("playerProjectilesN" + i, icons[39]);
      setPosition("playerProjectilesN" + i, -100, -100);
        showElement("playerProjectilesN" + i);
  }
  for(i = 0; i < 10; i++){
    setImageURL("playerProjectilesY1-" + i, icons[40]);
      setPosition("playerProjectilesY1-" + i, -100, -100);
        showElement("playerProjectilesY1-" + i);
  }
  for(i = 0; i < 10; i++){
    setImageURL("playerProjectilesY2-" + i, icons[40]);
      setPosition("playerProjectilesY2-" + i, -100, -100);
        showElement("playerProjectilesY2-" + i);
  }
  for(i = 1; i < 4; i++){
    setImageURL("spell" + i, icons[43]);
      setPosition("spell" + i, -100, -100);
        showElement("spell" + i);
  }
      setImageURL("yin1", icons[27]);
        setImageURL("yin2", icons[27]);
    setTimeout(function() {
      setScreen("gameScreen");
    }, 2000);
    timedLoop(20000, function() {
      marisaRandomAttack();
    });
    timedLoop(50, function() {
      hitDetect();
    });
    timedLoop(20, function() {
      marisaHitDetect();
    });
});

onEvent("winRestartGame", "click", function() {
  stopTimedLoop(c);
    stopTimedLoop(d);
      stopTimedLoop(g);
        clearInterval(h);
          enemyHealth = 400;
            marisaPos = 1;
              setPosition("enemySprite", 100, 46);
                lives = 3;
                  spells = 3;
                    setImageURL("uiBorder", icons[41]);
                      setImageURL("bg2", icons[42]);
                        loopNoKey();
                          loopMarisa();
                            setImageURL("enemyHealthBar", icons[46]);
                              setPosition("enemyHealthBar", 25, 25, enemyHealth/2);
  for(i = 1; i < 4; i++){
    setImageURL("health" + i, "icon://fa-heart");
      setProperty("health" + i, "icon-color", "red");
        showElement("health" + i);
  }
  for(i = 1; i < 4; i++){
    setImageURL("star"+i, icons[37]);
      showElement("star" + i);
  }
  for(i = 0; i < 44; i++){
    setImageURL("enemyProjectile" + i, icons[37]);
      setPosition("enemyProjectile" + i, -100, -100);
        showElement("enemyProjectile" + i);
  }
  for(i = 0; i < 10; i++){
    setImageURL("playerProjectilesN" + i, icons[39]);
      setPosition("playerProjectilesN" + i, -100, -100);
        showElement("playerProjectilesN" + i);
  }
  for(i = 0; i < 10; i++){
    setImageURL("playerProjectilesY1-" + i, icons[40]);
      setPosition("playerProjectilesY1-" + i, -100, -100);
        showElement("playerProjectilesY1-" + i);
  }
  for(i = 0; i < 10; i++){
    setImageURL("playerProjectilesY2-" + i, icons[40]);
      setPosition("playerProjectilesY2-" + i, -100, -100);
        showElement("playerProjectilesY2-" + i);
  }
  for(i = 1; i < 4; i++){
    setImageURL("spell" + i, icons[43]);
      setPosition("spell" + i, -100, -100);
        showElement("spell" + i);
  }
      setImageURL("yin1", icons[27]);
        setImageURL("yin2", icons[27]);
    setTimeout(function() {
      setScreen("gameScreen");
    }, 2000);
    timedLoop(20000, function() {
      marisaRandomAttack();
    });
    timedLoop(50, function() {
      hitDetect();
    });
    timedLoop(20, function() {
      marisaHitDetect();
    });
});

//The controls
onEvent("gameScreen", "keydown", function(event) {
  if(event.key == "Up"){
    setPosition("playerSprite", playerX, updatePos("posY","-"));
  }
  else if(event.key == "Left"){
    //REALLY had to make sure to stop that damn clock
    stopTimedLoop(c);
      setPosition("playerSprite", updatePos("posX","-"), playerY);
            updateSprite("-");
    onEvent("gameScreen", "keyup", function() {
      stopTimedLoop(c);
        stopTimedLoop(c);
          stopTimedLoop(c);
            loopNoKey();
    });
  }
  else if(event.key == "Down"){
    setPosition("playerSprite", playerX, updatePos("posY","+"));
  }
  else if(event.key == "Right"){
    //REALLY REAAAALLLYYY had to make sure to stop that damn clock
    setPosition("playerSprite", updatePos("posX","+"), playerY);
      stopTimedLoop(c);
            updateSprite("+");
    onEvent("gameScreen", "keyup", function() {
      stopTimedLoop(c);
        stopTimedLoop(c);
          stopTimedLoop(c);
            loopNoKey();
    });
  }
  if(event.key == "z"){
    shoot("normal");
    //reset positions
    onEvent("gameScreen", "keyup", function() {
      for(i=0; i<10; i++){
        setPosition("playerProjectilesN"+i, -100, -100);
          setPosition("playerProjectilesY1-"+i, -100, -100);
            setPosition("playerProjectilesY2-"+i, -100, -100);
              shotX = playerX+20;
                shotY = playerY;
      }
    });
  }
  else if(event.key == "x"){
      setImageURL("yin1", icons[44]);
        setImageURL("yin2", icons[44]);
          setPosition("yin1", playerX+2, playerY-33);
            setPosition("yin2", playerX+28, playerY-33);
              shoot("focus");
    //Reset positions & textures
    onEvent("gameScreen", "keyup", function() {
      for(i=0; i<10; i++){
        setPosition("playerProjectilesN"+i, -100, -100);
          setPosition("playerProjectilesY1-"+i, -100, -100);
            setPosition("playerProjectilesY2-"+i, -100, -100);
              setImageURL("yin1", icons[27]);
                setImageURL("yin2", icons[27]);
                  setPosition("yin1", playerX-17, playerY+18);
                    setPosition("yin2", playerX+47, playerY+18);
                      shotX = playerX+20;
                        shotY = playerY;
      }
    });
  }
  else if(event.key == "c"){
    shoot("spells");
      hideElement("star"+spells);
  }
});


//Sets the shooting type & shoots based on keypress
function shoot(type){
  var shotY1 = shotY+40;
  var shotY2 = shotY+80;
  var shotY3 = shotY+120;
  var shotY4 = shotY+160;
  var shotY5 = shotY+200;
  var shotY6 = shotY+240;
  var shotY7 = shotY+280;
  var shotY8 = shotY+320;
  var shotY9 = shotY+360;
  var shotY10 = shotY+400;
  var shotXY1 = playerX-14;
  var shotXY2 = playerX+50;
  var shotFXY1 = playerX+4;
  var shotFXY2 = playerX+30;
  var shotFYY = 33;
  //Normal
  if(type == "normal"){
  //Normal Pos
    //N0
      if(shotY > 0){
        shotY = shotY-6;
          setPosition("playerProjectilesN0", shotX, shotY);
      }
      else if(shotY <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesN0", shotX, shotY);
      }
    //N1
      if(shotY1 > 0 && playerY>=shotY+40){
        shotY1 = shotY1-6;
          setPosition("playerProjectilesN1", shotX, shotY1);
      }
      else if(shotY1 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesN1", shotX, shotY1);
      }
    //N2
      if(shotY2 > 0 && playerY>=shotY+80){
        shotY2 = shotY2-6;
          setPosition("playerProjectilesN2", shotX, shotY2);
      }
      else if(shotY2 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesN2", shotX, shotY2);
      }
    //N3
      if(shotY3 > 0 && playerY>=shotY+120){
        shotY3 = shotY3-6;
          setPosition("playerProjectilesN3", shotX, shotY3);
      }
      else if(shotY3 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesN3", shotX, shotY3);
      }
    //N4
      if(shotY4 > 0 && playerY>=shotY+160){
        shotY4 = shotY4-6;
          setPosition("playerProjectilesN4", shotX, shotY4);
      }
      else if(shotY4 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesN4", shotX, shotY4);
      }
    //N5
      if(shotY5 > 0 && playerY>=shotY+200){
        shotY5 = shotY5-6;
          setPosition("playerProjectilesN5", shotX, shotY5);
      }
      else if(shotY4 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesN5", shotX, shotY5);
      }
    //N6
      if(shotY6 > 0 && playerY>=shotY+240){
        shotY6 = shotY6-6;
          setPosition("playerProjectilesN6", shotX, shotY6);
      }
      else if(shotY6 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesN6", shotX, shotY6);
      }
    //N7
      if(shotY7 > 0 && playerY>=shotY+280){
        shotY7 = shotY7-6;
          setPosition("playerProjectilesN7", shotX, shotY7);
      }
      else if(shotY7 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesN7", shotX, shotY7);
      }
    //N8
      if(shotY8 > 0 && playerY>=shotY+320){
        shotY8 = shotY8-6;
          setPosition("playerProjectilesN8", shotX, shotY8);
      }
      else if(shotY8 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesN8", shotX, shotY8);
      }
    //N9
      if(shotY9 > 0 && playerY>=shotY+360){
        shotY9 = shotY9-6;
          setPosition("playerProjectilesN9", shotX, shotY9);
      }
      else if(shotY9 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesN9", shotX, shotY9);
      }
    //N10
      if(shotY10 > 0 && playerY>=shotY+400){
        shotY10 = shotY10-6;
          setPosition("playerProjectilesN10", shotX, shotY10);
      }
      else if(shotY10 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesN10", shotX, shotY10);
      }
  //Yin Yang 1 Pos
    //Y1-0
      if(shotY > 0){
        shotY = shotY-6;
          setPosition("playerProjectilesY1-0", shotXY1, shotY);
      }
      else if(shotY <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY1-0", shotXY1, shotY);
      }
    //Y1-1
      if(shotY1 > 0 && playerY>=shotY+40){
        shotY1 = shotY1-6;
          setPosition("playerProjectilesY1-1", shotXY1, shotY1);
      }
      else if(shotY1 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY1-1", shotXY1, shotY1);
      }
    //Y1-2
      if(shotY2 > 0 && playerY>=shotY+80){
        shotY2 = shotY2-6;
          setPosition("playerProjectilesY1-2", shotXY1, shotY2);
      }
      else if(shotY2 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY1-2", shotXY1, shotY2);
      }
    //Y1-3
      if(shotY3 > 0 && playerY>=shotY+120){
        shotY3 = shotY3-6;
          setPosition("playerProjectilesY1-3", shotXY1, shotY3);
      }
      else if(shotY3 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY1-3", shotXY1, shotY3);
      }
    //Y1-4
      if(shotY4 > 0 && playerY>=shotY+160){
        shotY4 = shotY4-6;
          setPosition("playerProjectilesY1-4", shotXY1, shotY4);
      }
      else if(shotY4 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY1-4", shotXY1, shotY4);
      }
    //Y1-5
      if(shotY5 > 0 && playerY>=shotY+200){
        shotY5 = shotY5-6;
          setPosition("playerProjectilesY1-5", shotXY1, shotY5);
      }
      else if(shotY4 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY1-5", shotXY1, shotY5);
      }
    //Y1-6
      if(shotY6 > 0 && playerY>=shotY+240){
        shotY6 = shotY6-6;
          setPosition("playerProjectilesY1-6", shotXY1, shotY6);
      }
      else if(shotY6 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY1-6", shotXY1, shotY6);
      }
    //Y1-7
      if(shotY7 > 0 && playerY>=shotY+280){
        shotY7 = shotY7-6;
          setPosition("playerProjectilesY1-7", shotXY1, shotY7);
      }
      else if(shotY7 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY1-7", shotXY1, shotY7);
      }
    //Y1-8
      if(shotY8 > 0 && playerY>=shotY+320){
        shotY8 = shotY8-6;
          setPosition("playerProjectilesY1-8", shotXY1, shotY8);
      }
      else if(shotY8 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY1-8", shotXY1, shotY8);
      }
    //Y1-9
      if(shotY9 > 0 && playerY>=shotY+360){
        shotY9 = shotY9-6;
          setPosition("playerProjectilesY1-9", shotXY1, shotY9);
      }
      else if(shotY9 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY1-9", shotXY1, shotY9);
      }
    //Y1-10
      if(shotY10 > 0 && playerY>=shotY+400){
        shotY10 = shotY10-6;
          setPosition("playerProjectilesY1-10", shotXY1, shotY10);
      }
      else if(shotY10 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY1-10", shotXY1, shotY10);
      }
    //Yin Yang 2 Pos
    //Y2-0
      if(shotY > 0){
        shotY = shotY-6;
          setPosition("playerProjectilesY2-0", shotXY2, shotY);
      }
      else if(shotY <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY2-0", shotXY2, shotY);
      }
    //Y2-1
      if(shotY1 > 0 && playerY>=shotY+40){
        shotY1 = shotY1-6;
          setPosition("playerProjectilesY2-1", shotXY2, shotY1);
      }
      else if(shotY1 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY2-1", shotXY2, shotY1);
      }
    //Y2-2
      if(shotY2 > 0 && playerY>=shotY+80){
        shotY2 = shotY2-6;
          setPosition("playerProjectilesY2-2", shotXY2, shotY2);
      }
      else if(shotY2 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY2-2", shotXY1, shotY2);
      }
    //Y2-3
      if(shotY3 > 0 && playerY>=shotY+120){
        shotY3 = shotY3-6;
          setPosition("playerProjectilesY2-3", shotXY2, shotY3);
      }
      else if(shotY3 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY2-3", shotXY2, shotY3);
      }
    //Y2-4
      if(shotY4 > 0 && playerY>=shotY+160){
        shotY4 = shotY4-6;
          setPosition("playerProjectilesY2-4", shotXY2, shotY4);
      }
      else if(shotY4 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY2-4", shotXY2, shotY4);
      }
    //Y2-5
      if(shotY5 > 0 && playerY>=shotY+200){
        shotY5 = shotY5-6;
          setPosition("playerProjectilesY2-5", shotXY2, shotY5);
      }
      else if(shotY4 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY2-5", shotXY2, shotY5);
      }
    //Y2-6
      if(shotY6 > 0 && playerY>=shotY+240){
        shotY6 = shotY6-6;
          setPosition("playerProjectilesY2-6", shotXY2, shotY6);
      }
      else if(shotY6 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY2-6", shotXY2, shotY6);
      }
    //Y2-7
      if(shotY7 > 0 && playerY>=shotY+280){
        shotY7 = shotY7-6;
          setPosition("playerProjectilesY2-7", shotXY2, shotY7);
      }
      else if(shotY7 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY2-7", shotXY2, shotY7);
      }
    //Y2-8
      if(shotY8 > 0 && playerY>=shotY+320){
        shotY8 = shotY8-6;
          setPosition("playerProjectilesY2-8", shotXY2, shotY8);
      }
      else if(shotY8 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY2-8", shotXY2, shotY8);
      }
    //Y2-9
      if(shotY9 > 0 && playerY>=shotY+360){
        shotY9 = shotY9-6;
          setPosition("playerProjectilesY2-9", shotXY2, shotY9);
      }
      else if(shotY9 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY2-9", shotXY2, shotY9);
      }
    //Y2-10
      if(shotY10 > 0 && playerY>=shotY+400){
        shotY10 = shotY10-6;
          setPosition("playerProjectilesY2-10", shotXY2, shotY10);
      }
      else if(shotY10 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY2-10", shotXY2, shotY10);
      }
  shot="normal";
  }
  //Focus
  else if(type == "focus"){
    shot="focus";
  //Normal Pos
    //N0
      if(shotY > 0){
        shotY = shotY-6;
          setPosition("playerProjectilesN0", shotX, shotY);
      }
      else if(shotY <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesN0", shotX, shotY);
      }
    //N1
      if(shotY1 > 0 && playerY>=shotY+40){
        shotY1 = shotY1-6;
          setPosition("playerProjectilesN1", shotX, shotY1);
      }
      else if(shotY1 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesN1", shotX, shotY1);
      }
    //N2
      if(shotY2 > 0 && playerY>=shotY+80){
        shotY2 = shotY2-6;
          setPosition("playerProjectilesN2", shotX, shotY2);
      }
      else if(shotY2 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesN2", shotX, shotY2);
      }
    //N3
      if(shotY3 > 0 && playerY>=shotY+120){
        shotY3 = shotY3-6;
          setPosition("playerProjectilesN3", shotX, shotY3);
      }
      else if(shotY3 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesN3", shotX, shotY3);
      }
    //N4
      if(shotY4 > 0 && playerY>=shotY+160){
        shotY4 = shotY4-6;
          setPosition("playerProjectilesN4", shotX, shotY4);
      }
      else if(shotY4 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesN4", shotX, shotY4);
      }
    //N5
      if(shotY5 > 0 && playerY>=shotY+200){
        shotY5 = shotY5-6;
          setPosition("playerProjectilesN5", shotX, shotY5);
      }
      else if(shotY4 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesN5", shotX, shotY5);
      }
    //N6
      if(shotY6 > 0 && playerY>=shotY+240){
        shotY6 = shotY6-6;
          setPosition("playerProjectilesN6", shotX, shotY6);
      }
      else if(shotY6 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesN6", shotX, shotY6);
      }
    //N7
      if(shotY7 > 0 && playerY>=shotY+280){
        shotY7 = shotY7-6;
          setPosition("playerProjectilesN7", shotX, shotY7);
      }
      else if(shotY7 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesN7", shotX, shotY7);
      }
    //N8
      if(shotY8 > 0 && playerY>=shotY+320){
        shotY8 = shotY8-6;
          setPosition("playerProjectilesN8", shotX, shotY8);
      }
      else if(shotY8 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesN8", shotX, shotY8);
      }
    //N9
      if(shotY9 > 0 && playerY>=shotY+360){
        shotY9 = shotY9-6;
          setPosition("playerProjectilesN9", shotX, shotY9);
      }
      else if(shotY9 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesN9", shotX, shotY9);
      }
    //N10
      if(shotY10 > 0 && playerY>=shotY+400){
        shotY10 = shotY10-6;
          setPosition("playerProjectilesN10", shotX, shotY10);
      }
      else if(shotY10 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesN10", shotX, shotY10);
      }
  //Yin Yang 1 Pos
    //Y1-0
      if(shotY > 0){
        shotY = shotY-6;
          setPosition("playerProjectilesY1-0", shotFXY1, shotY-shotFYY);
      }
      else if(shotY <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY1-0", shotFXY1, shotY-shotFYY);
      }
    //Y1-1
      if(shotY1 > 0 && playerY>=shotY+40+shotFYY){
        shotY1 = shotY1-6;
          setPosition("playerProjectilesY1-1", shotFXY1, shotY1-shotFYY);
      }
      else if(shotY1 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY1-1", shotFXY1, shotY1-shotFYY);
      }
    //Y1-2
      if(shotY2 > 0 && playerY>=shotY+80+shotFYY){
        shotY2 = shotY2-6;
          setPosition("playerProjectilesY1-2", shotFXY1, shotY2-shotFYY);
      }
      else if(shotY2 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY1-2", shotFXY1, shotY2-shotFYY);
      }
    //Y1-3
      if(shotY3 > 0 && playerY>=shotY+120+shotFYY){
        shotY3 = shotY3-6;
          setPosition("playerProjectilesY1-3", shotFXY1, shotY3-shotFYY);
      }
      else if(shotY3 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY1-3", shotFXY1, shotY3-shotFYY);
      }
    //Y1-4
      if(shotY4 > 0 && playerY>=shotY+160+shotFYY){
        shotY4 = shotY4-6;
          setPosition("playerProjectilesY1-4", shotFXY1, shotY4-shotFYY);
      }
      else if(shotY4 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY1-4", shotFXY1, shotY4-shotFYY);
      }
    //Y1-5
      if(shotY5 > 0 && playerY>=shotY+200+shotFYY){
        shotY5 = shotY5-6;
          setPosition("playerProjectilesY1-5", shotFXY1, shotY5-shotFYY);
      }
      else if(shotY4 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY1-5", shotFXY1, shotY5-shotFYY);
      }
    //Y1-6
      if(shotY6 > 0 && playerY>=shotY+240+shotFYY){
        shotY6 = shotY6-6;
          setPosition("playerProjectilesY1-6", shotFXY1, shotY6-shotFYY);
      }
      else if(shotY6 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY1-6", shotFXY1, shotY6-shotFYY);
      }
    //Y1-7
      if(shotY7 > 0 && playerY>=shotY+280+shotFYY){
        shotY7 = shotY7-6;
          setPosition("playerProjectilesY1-7", shotFXY1, shotY7-shotFYY);
      }
      else if(shotY7 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY1-7", shotFXY1, shotY7-shotFYY);
      }
    //Y1-8
      if(shotY8 > 0 && playerY>=shotY+320+shotFYY){
        shotY8 = shotY8-6;
          setPosition("playerProjectilesY1-8", shotFXY1, shotY8-shotFYY);
      }
      else if(shotY8 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY1-8", shotFXY1, shotY8-shotFYY);
      }
    //Y1-9
      if(shotY9 > 0 && playerY>=shotY+360+shotFYY){
        shotY9 = shotY9-6;
          setPosition("playerProjectilesY1-9", shotFXY1, shotY9-shotFYY);
      }
      else if(shotY9 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY1-9", shotFXY1, shotY9-shotFYY);
      }
    //Y1-10
      if(shotY10 > 0 && playerY>=shotY+400+shotFYY){
        shotY10 = shotY10-6;
          setPosition("playerProjectilesY1-10", shotFXY1, shotY10-shotFYY);
      }
      else if(shotY10 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY1-10", shotFXY1, shotY10-shotFYY);
      }
    //Yin Yang 2 Pos
    //Y2-0
      if(shotY > 0){
        shotY = shotY-6;
          setPosition("playerProjectilesY2-0", shotFXY2, shotY-shotFYY);
      }
      else if(shotY <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY2-0", shotFXY2, shotY-shotFYY);
      }
    //Y2-1
      if(shotY1 > 0 && playerY>=shotY+40+shotFYY){
        shotY1 = shotY1-6;
          setPosition("playerProjectilesY2-1", shotFXY2, shotY1-shotFYY);
      }
      else if(shotY1 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY2-1", shotFXY2, shotY1-shotFYY);
      }
    //Y2-2
      if(shotY2 > 0 && playerY>=shotY+80+shotFYY){
        shotY2 = shotY2-6;
          setPosition("playerProjectilesY2-2", shotFXY2, shotY2-shotFYY);
      }
      else if(shotY2 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY2-2", shotFXY2, shotY2-shotFYY);
      }
    //Y2-3
      if(shotY3 > 0 && playerY>=shotY+120+shotFYY){
        shotY3 = shotY3-6;
          setPosition("playerProjectilesY2-3", shotFXY2, shotY3-shotFYY);
      }
      else if(shotY3 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY2-3", shotFXY2, shotY3-shotFYY);
      }
    //Y2-4
      if(shotY4 > 0 && playerY>=shotY+160+shotFYY){
        shotY4 = shotY4-6;
          setPosition("playerProjectilesY2-4", shotFXY2, shotY4-shotFYY);
      }
      else if(shotY4 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY2-4", shotFXY2, shotY4-shotFYY);
      }
    //Y2-5
      if(shotY5 > 0 && playerY>=shotY+200+shotFYY){
        shotY5 = shotY5-6;
          setPosition("playerProjectilesY2-5", shotFXY2, shotY5-shotFYY);
      }
      else if(shotY4 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY2-5", shotFXY2, shotY5-shotFYY);
      }
    //Y2-6
      if(shotY6 > 0 && playerY>=shotY+240+shotFYY){
        shotY6 = shotY6-6;
          setPosition("playerProjectilesY2-6", shotFXY2, shotY6-shotFYY);
      }
      else if(shotY6 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY2-6", shotFXY2, shotY6-shotFYY);
      }
    //Y2-7
      if(shotY7 > 0 && playerY>=shotY+280+shotFYY){
        shotY7 = shotY7-6;
          setPosition("playerProjectilesY2-7", shotFXY2, shotY7-shotFYY);
      }
      else if(shotY7 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY2-7", shotFXY2, shotY7-shotFYY);
      }
    //Y2-8
      if(shotY8 > 0 && playerY>=shotY+320+shotFYY){
        shotY8 = shotY8-6;
          setPosition("playerProjectilesY2-8", shotFXY2, shotY8-shotFYY);
      }
      else if(shotY8 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY2-8", shotFXY2, shotY8-shotFYY);
      }
    //Y2-9
      if(shotY9 > 0 && playerY>=shotY+360+shotFYY){
        shotY9 = shotY9-6;
          setPosition("playerProjectilesY2-9", shotFXY2, shotY9-shotFYY);
      }
      else if(shotY9 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY2-9", shotFXY2, shotY9-shotFYY);
      }
    //Y2-10
      if(shotY10 > 0 && playerY>=shotY+400+shotFYY){
        shotY10 = shotY10-6;
          setPosition("playerProjectilesY2-10", shotFXY2, shotY10-shotFYY);
      }
      else if(shotY10 <= 0){
        shotX=playerX+20;
          shotY=playerY;
            setPosition("playerProjectilesY2-10", shotFXY2, shotY10-shotFYY);
      }
  }
  else if(type == "spells"){
    shot="spells";
    if(spellSpam == 0){
      var curX=getXPosition("playerSprite")+20;
      var curY=getYPosition("playerSprite");
      spellSpam=spellSpam+1;
    g = timedLoop(100, function() {
      if(curY > 0){
            curY = curY-6;
              setPosition("spell"+spells, curX, curY);
      }
      else if(curY <= 0){
        shotX=playerX+20;
          shotY=playerY;
          stopTimedLoop(g);
            setPosition("spell"+spells, -100, -100);
              spellSpam = 0;
                spells = spells-1;
      }
    });
    }
    else if(spellSpam >= 1){
    }
  }
}

//Updates the player position
function updatePos(type,RLUD){
  playerX = getXPosition("playerSprite");
  playerY = getYPosition("playerSprite");
  for(i=1;i<3;i++){
    if(i == 1){
    yin1X = getXPosition("playerSprite");
    yin1Y = getYPosition("playerSprite");
    }
    else if(i == 2){
    yin2X = getXPosition("playerSprite");
    yin2Y = getYPosition("playerSprite");
    }
  }
  shotX = playerX+20;
  shotY = playerY;
    if(type == "posX"){
      if(RLUD == "+"){
        playerX=playerX+10;
          setPosition("yin1", yin1X-7, yin1Y+8);
            setPosition("yin2", yin2X+57, yin2Y+8);
              return playerX;
      }
      else if(RLUD == "-"){
        playerX=playerX-10;
          setPosition("yin1", yin1X-27, yin1Y+8);
            setPosition("yin2", yin2X+37, yin2Y+8);
              return playerX;
      }
    }
    else if(type == "posY"){
      if(RLUD == "-"){
        playerY=playerY-10;
          setPosition("yin1", yin1X-17, yin1Y);
            setPosition("yin2", yin2X+47, yin2Y);
              return playerY;
      }
      else if(RLUD == "+"){
        playerY=playerY+10;
          setPosition("yin1", yin1X-17, yin1Y+18);
            setPosition("yin2", yin2X+47, yin2Y+18);
              return playerY;
      }
    }
}


//Scrolls through 8 left/right textures when sitting moving left/right
function updateSprite(ULDR){
  if(ULDR == "-"){
    setTimeout(function() {
      setImageURL("playerSprite", icons[11]);
    }, 15);
    setTimeout(function() {
      setImageURL("playerSprite", icons[12]);
    }, 30);
    setTimeout(function() {
      setImageURL("playerSprite", icons[13]);
    }, 45);
    setTimeout(function() {
      setImageURL("playerSprite", icons[14]);
    }, 60);
    setTimeout(function() {
      setImageURL("playerSprite", icons[15]);
    }, 75);
    setTimeout(function() {
      setImageURL("playerSprite", icons[16]);
    }, 90);
    setTimeout(function() {
      setImageURL("playerSprite", icons[17]);
    }, 105);
    setTimeout(function() {
      setImageURL("playerSprite", icons[18]);
    }, 120);
  }
  else if(ULDR == "+"){
    setTimeout(function() {
      setImageURL("playerSprite", icons[19]);
    }, 15);
    setTimeout(function() {
      setImageURL("playerSprite", icons[20]);
    }, 30);
    setTimeout(function() {
      setImageURL("playerSprite", icons[21]);
    }, 45);
    setTimeout(function() {
      setImageURL("playerSprite", icons[22]);
    }, 60);
    setTimeout(function() {
      setImageURL("playerSprite", icons[23]);
    }, 75);
    setTimeout(function() {
      setImageURL("playerSprite", icons[24]);
    }, 90);
    setTimeout(function() {
      setImageURL("playerSprite", icons[25]);
    }, 105);
    setTimeout(function() {
      setImageURL("playerSprite", icons[26]);
    }, 120);
  }
}

//Scrolls through 8 idle textures when sitting idle
function noKey(){
  setTimeout(function() {
    setImageURL("playerSprite", icons[3]);
  }, 700);
  setTimeout(function() {
    setImageURL("playerSprite", icons[4]);
  }, 1700);
  setTimeout(function() {
    setImageURL("playerSprite", icons[5]);
  }, 2700);
  setTimeout(function() {
    setImageURL("playerSprite", icons[6]);
  }, 3700);
  setTimeout(function() {
    setImageURL("playerSprite", icons[7]);
  }, 4700);
  setTimeout(function() {
    setImageURL("playerSprite", icons[8]);
  }, 5700);
  setTimeout(function() {
    setImageURL("playerSprite", icons[9]);
  }, 6700);
  setTimeout(function() {
    setImageURL("playerSprite", icons[10]);
  }, 7700);
}

//Scrolling Reimu & the logo on the title screen
function reimuTitleScroll(){
  //All the stuff happening before anything important
  setImageURL("reimuTitle", icons[0]);
    setImageURL("logoImage", icons[1]);
      setImageURL("bg1", icons[2]);
        setPosition("logoImage", 28, -30);
          setPosition("reimuTitle", -222, -50);
            var reimuTitleX = getXPosition("reimuTitle");
              var logoImageY = getYPosition("logoImage");
                setImageURL("Catty", icons[38]);
  var a = timedLoop(10, function() {
    if(reimuTitleX != 60){
      reimuTitleX = reimuTitleX+2;
        setPosition("reimuTitle", reimuTitleX, -50);
    }
    else if(reimuTitleX == 60){
      stopTimedLoop(a);
    }
  });
  var b = timedLoop(30, function() {
    if(logoImageY != 50){
      logoImageY = logoImageY+2;
        setPosition("logoImage", 28, logoImageY);
    }
    else if(logoImageY == 50){
        stopTimedLoop(b);
    }
  });
}

//For looping the noKey function every 300ms
function loopNoKey(){
  c = timedLoop(300, function() {
    noKey();
  });
}

//Randomizes Marisa's attack in 3 positions; this is how touhou works
function marisaRandomAttack(){
  enemyX = getXPosition("enemySprite");
    enemyY = getYPosition("enemySprite");
        count = 0;
    if (enemyX == 18 && enemyY == 46){
      marisaPos = 0;
    }
    else if (enemyX == 100 && enemyY == 46){
      marisaPos = 1;
    }
    else if (enemyX == 182 && enemyY == 46){
      marisaPos = 2;
    }
      if (marisaPos == 0){
        newMarisaPos = randomNumber(0,1);
        enemyX = getXPosition("enemySprite");
          enemyY = getYPosition("enemySprite");
            marisaAttackPos(newMarisaPos);
              eshotX=68;
                eshotY=106;
        for(i = 0; i < 44; i++){
          setPosition("enemyProjectile"+i, eshotX, eshotY);
        }
        setTimeout(function() {
              h = setInterval(function() {
                count = count + 1;
                  marisaScriptedAttack(newMarisaPos);
                    if(count>=150){
                      clearInterval(h);
                }
              }, 125);
        }, 3000);
        for(i = 0; i < 44; i++){
          setPosition("enemyProjectile"+i, -100, -100);
        }
      }
      else if (marisaPos == 1){
        newMarisaPos = randomNumber(0,2);
          marisaAttackPos(newMarisaPos);
            eshotX=150;
              eshotY=106;
        for(i = 0; i < 44; i++){
          setPosition("enemyProjectile"+i, eshotX, eshotY);
        }
        setTimeout(function() {
          enemyX = getXPosition("enemySprite");
            enemyY = getYPosition("enemySprite");
              h = setInterval(function() {
                count = count + 1;
                  marisaScriptedAttack(newMarisaPos);
                    if(count>=150){
                      clearInterval(h);
                }
              }, 125);
        }, 3000);
        for(i = 0; i < 44; i++){
          setPosition("enemyProjectile"+i, -100, -100);
        }
      }
      else if (marisaPos == 2){
        newMarisaPos = randomNumber(1,2);
          marisaAttackPos(newMarisaPos);
            eshotX=232;
              eshotY=106;
        for(i = 0; i < 44; i++){
          setPosition("enemyProjectile"+i, eshotX, eshotY);
        }
        setTimeout(function() {
          enemyX = getXPosition("enemySprite");
            enemyY = getYPosition("enemySprite");
              h = setInterval(function() {
                count = count + 1;
                  marisaScriptedAttack(newMarisaPos);
                    if(count>=150){
                      clearInterval(h);
                }
              }, 125);
        }, 3000);
        for(i = 0; i < 44; i++){
          setPosition("enemyProjectile"+i, -100, -100);
        }
      }
}

//The attack animation for Marisa
function marisaAttackAnim(){
    setTimeout(function() {
      setImageURL("enemySprite", icons[32]);
    }, 15);
    setTimeout(function() {
      setImageURL("enemySprite", icons[33]);
    }, 30);
    setTimeout(function() {
      setImageURL("enemySprite", icons[34]);
    }, 45);
    setTimeout(function() {
      setImageURL("enemySprite", icons[35]);
    }, 60);
}

//Does simple collision detection based on positions of the enemyProjectiles which is admitidly very leniant
function hitDetect(){
  // insert i < however many enemy projectiles
  for(var i = 0; i < 44; i++){
    if(playerX+46 >= getXPosition("enemyProjectile" + i)&&playerX <= getXPosition("enemyProjectile" + i)-12) {
      if(playerY+46 >= getYPosition("enemyProjectile" + i)&&playerY <= getYPosition("enemyProjectile" + i)+4) {
        setPosition("playerSprite", 110, 300);
          playerX = getXPosition("playerSprite");
            playerY = getYPosition("playerSprite");
              setPosition("yin1", playerX-17, playerY+18);
                setPosition("yin2", playerX+46, playerY+18);
          liveSpam = liveSpam+1;
          dying();
      }
    }
    else if(playerX >= 175) {
        setPosition("playerSprite", 174, playerY);
    }
    else if(playerX <= 0) {
        setPosition("playerSprite", 1, playerY);
    }
    else if(playerY <= 0) {
        setPosition("playerSprite", playerX, 1);
    }
    else if(playerY >= 400) {
        setPosition("playerSprite", playerX, 399);
    }
  }
}

function marisaHitDetect(){
  // insert i < however many player projectiles
  if(enemyHealth>0){
    for(var i = 0; i < 10; i++){
      if(enemyX+100 >= getXPosition("playerProjectilesN" + i)&&enemyX <= getXPosition("playerProjectilesN" + i)+7) {
        if(enemyY+100 >= getYPosition("playerProjectilesN" + i)&&enemyY <= getYPosition("playerProjectilesN" + i)+29) {
          enemyHealth = enemyHealth - 1;
            shotX=playerX+20;
              shotY=playerY;
        }
      }
      else if(enemyX+100 >= getXPosition("playerProjectilesY1-" + i)&&enemyX <= getXPosition("playerProjectilesY1-" + i)+7) {
        if(enemyY+100 >= getYPosition("playerProjectilesY1-" + i)&&enemyY <= getYPosition("playerProjectilesY1-" + i)+29) {
          enemyHealth = enemyHealth - 1;
            shotX=playerX+20;
              shotY=playerY;
        }
      }
      else if(enemyX+100 >= getXPosition("playerProjectilesY2-" + i)&&enemyX <= getXPosition("playerProjectilesY2-" + i)+7) {
        if(enemyY+100 >= getYPosition("playerProjectilesY2-" + i)&&enemyY <= getYPosition("playerProjectilesY2-" + i)+29) {
          enemyHealth = enemyHealth - 1;
            shotX=playerX+20;
              shotY=playerY;
        }
      }
    }
    for(i = 1; i < 4; i++){
      if(enemyX+100 >= getXPosition("spell" + i)&&enemyX <= getXPosition("spell" + i)+7) {
        if(enemyY+100 >= getYPosition("spell" + i)&&enemyY <= getYPosition("spell" + i)+29) {
          enemyHealth = enemyHealth - 20;
            stopTimedLoop(g);
              shotX=playerX+20;
                shotY=playerY;
                  setPosition("spell" + i, -100, -100);
                    spellSpam = 0;
                      spells = spells-1;
        }
      }
  }
  if(enemyHealth<=0){
    setScreen("winScreen");
    }
    setPosition("enemyHealthBar", 25, 25, enemyHealth/2);
  }
}

//Called when losing a life or dying when life = 0
function dying(){
    if(liveSpam == 0){
        hideElement("health"+lives);
          lives = lives - 1;
      if(lives <= 0){
        setScreen("deathScreen");
      }
    }
    if(liveSpam >= 1){
      setTimeout(function() {
        liveSpam = -1;
      }, 4000);
    }
}

//Loop marisa()
function loopMarisa(){
  d = timedLoop(400, function() {
    marisa();
  });
}

//Idle anim for Marisa
function marisa(){
  setTimeout(function() {
    setImageURL("enemySprite", icons[28]);
  }, 600);
  setTimeout(function() {
    setImageURL("enemySprite", icons[29]);
  }, 1600);
  setTimeout(function() {
    setImageURL("enemySprite", icons[30]);
  }, 2600);
  setTimeout(function() {
    setImageURL("enemySprite", icons[31]);
  }, 3600);
}

//Changes the Positions for Marisa randomly 
function marisaAttackPos(number){
  var e;
  if (number == 0){
    stopTimedLoop(d);
      stopTimedLoop(d);
        stopTimedLoop(d);
    e = timedLoop(10, function() {
      marisaAttackAnim();
      if(enemyX != 20){
        stopTimedLoop(d);
          enemyX = enemyX-2;
            setPosition("enemySprite", enemyX, 46);
      }
      else if(enemyX == 20){
        stopTimedLoop(e);
            marisaPos = 0;
            loopMarisa();
      }
    });
  }
  else if (marisaPos == 0 && number == 1){
      stopTimedLoop(d);
        stopTimedLoop(d);
          stopTimedLoop(d);
    e = timedLoop(10, function() {
      marisaAttackAnim();
      if(enemyX != 80){
        stopTimedLoop(d);
          enemyX = enemyX+2;
            setPosition("enemySprite", enemyX, 46);
      }
      else if(enemyX == 80){
        stopTimedLoop(e);
            marisaPos = 1;
            loopMarisa();
      }
    });
  }
  else if (marisaPos == 2 && number == 1){
    stopTimedLoop(d);
      stopTimedLoop(d);
        stopTimedLoop(d);
    e = timedLoop(10, function() {
      marisaAttackAnim();
      if(enemyX != 80){
        stopTimedLoop(d);
          enemyX = enemyX-2;
            setPosition("enemySprite", enemyX, 46);
      }
      else if(enemyX == 80){
        stopTimedLoop(e);
            marisaPos = 1;
            loopMarisa();
      }
    });
  }
  else if (number == 2){
    stopTimedLoop(d);
      stopTimedLoop(d);
        stopTimedLoop(d);
    e = timedLoop(10, function() {
      marisaAttackAnim();
      if(enemyX != 140){
        stopTimedLoop(d);
          enemyX = enemyX+2;
            setPosition("enemySprite", enemyX, 46);
      }
      else if(enemyX == 140){
        stopTimedLoop(e);
            marisaPos = 2;
            loopMarisa();
      }
    });
  }
}

//Scripted attacks by Marisa
function marisaScriptedAttack(number){
  var shotY1 = eshotY-40;
  var shotY2 = eshotY-80;
  var shotY3 = eshotY-120;
  var shotY4 = eshotY-160;
  var shotY5 = eshotY-200;
  var shotY6 = eshotY-240;
  var shotY7 = eshotY-280;
  var shotY8 = eshotY-320;
  var shotY9 = eshotY-360;
  var shotY10 = eshotY-400;
  var shotXL1 = eshotX+132;
  var shotXL2 = eshotX+264;
  var shotXL3 = eshotX+396;
  var shotXM1 = eshotX+264;
  var shotXM2 = eshotX+132;
  var shotXM3 = eshotX-132;
  var shotXM4 = eshotX-264;
  var shotXR1 = eshotX-132;
  var shotXR2 = eshotX-264;
  var shotXR3 = eshotX+396;
  if (number == 0){
    //Left Attack
      //L0
        if(eshotY < 450){
          eshotY = eshotY+2;
            setPosition("enemyProjectile0", eshotX, eshotY);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile0", eshotX, eshotY);
        }
      //L1
        if(eshotY < 450&& enemyY<=eshotY-40){
          eshotY = eshotY+2;
            setPosition("enemyProjectile1", eshotX, shotY1);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile1", eshotX, shotY);
        }
      //L2
        if(eshotY < 450&& enemyY<=eshotY-80){
          eshotY = eshotY+2;
            setPosition("enemyProjectile2", eshotX, shotY2);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile2", eshotX, shotY2);
        }
      //L3
        if(eshotY < 450&& enemyY<=eshotY-120){
          eshotY = eshotY+2;
            setPosition("enemyProjectile3", eshotX, shotY3);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile3", eshotX, shotY3);
        }
      //L4
        if(eshotY < 450&& enemyY<=eshotY-160){
          eshotY = eshotY+2;
            setPosition("enemyProjectile4", eshotX, shotY4);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile4", eshotX, shotY4);
        }
      //L5
        if(eshotY < 450&& enemyY<=eshotY-200){
          eshotY = eshotY+2;
            setPosition("enemyProjectile5", eshotX, shotY5);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile5", eshotX, shotY5);
        }
      //L6
        if(eshotY < 450&& enemyY<=eshotY-240){
          eshotY = eshotY+2;
            setPosition("enemyProjectile6", eshotX, shotY6);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile6", eshotX, shotY6);
        }
      //L7
        if(eshotY < 450&& enemyY<=eshotY-280){
          eshotY = eshotY+2;
            setPosition("enemyProjectile7", eshotX, shotY7);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile7", eshotX, shotY7);
        }
      //L8
        if(eshotY < 450&& enemyY<=eshotY-320){
          eshotY = eshotY+2;
            setPosition("enemyProjectile8", eshotX, shotY8);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile8", eshotX, shotY8);
        }
      //L9
        if(eshotY < 450 && enemyY<=eshotY-360){
          eshotY = eshotY+2;
            setPosition("enemyProjectile9", eshotX, shotY9);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile9", eshotX, shotY9);
        }
      //L10
        if(eshotY < 450 && enemyY<=eshotY-400){
          eshotY = eshotY+2;
            setPosition("enemyProjectile10", eshotX, shotY10);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile10", eshotX, shotY10);
        }
    //Left Middle 1 Attack
      //M1-0
        if(eshotY < 450){
          eshotY = eshotY+2;
            shotXL1 = shotXL1-12;
              setPosition("enemyProjectile11", shotXL1, eshotY);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile11", shotXL1, eshotY);
        }
      //M1-1
        if(eshotY < 450&& enemyY<=eshotY-40){
          eshotY = eshotY+2;
            shotXL1 = shotXL1-12;
              setPosition("enemyProjectile12", shotXL1, shotY1);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile12", shotXL1, shotY1);
        }
      //M1-2
        if(eshotY < 450&& enemyY<=eshotY-80){
          eshotY = eshotY+2;
            shotXL1 = shotXL1-12;
              setPosition("enemyProjectile13", shotXL1, shotY2);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile13", shotXL1, shotY2);
        }
      //M1-3
        if(eshotY < 450&& enemyY<=eshotY-120){
          eshotY = eshotY+2;
            shotXL1 = shotXL1-12;
              setPosition("enemyProjectile14", shotXL1, shotY3);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile14", shotXL1, shotY3);
        }
      //M1-4
        if(eshotY < 450&& enemyY<=eshotY-160){
          eshotX=68;
            shotXL1 = shotXL1-12;
              setPosition("enemyProjectile15", shotXL1, shotY4);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile15", shotXL1, shotY4);
        }
      //M1-5
        if(eshotY < 450&& enemyY<=eshotY-200){
          eshotY = eshotY+2;
            shotXL1 = shotXL1-12;
              setPosition("enemyProjectile16", shotXL1, shotY5);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile16", shotXL1, shotY5);
        }
      //M1-6
        if(eshotY < 450&& enemyY<=eshotY-240){
          eshotY = eshotY+2;
            shotXL1 = shotXL1-12;
              setPosition("enemyProjectile17", shotXL1, shotY6);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile17", shotXL1, shotY6);
        }
      //M1-7
        if(eshotY < 450&& enemyY<=eshotY-280){
          eshotY = eshotY+2;
            shotXL1 = shotXL1-12;
              setPosition("enemyProjectile18", shotXL1, shotY7);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile18", shotXL1, shotY7);
        }
      //M1-8
        if(eshotY < 450&& enemyY<=eshotY-320){
          eshotY = eshotY+2;
            shotXL1 = shotXL1-12;
              setPosition("enemyProjectile19", shotXL1, shotY8);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile19", shotXL1, shotY8);
        }
      //M1-9
        if(eshotY < 450 && enemyY<=eshotY-360){
          eshotY = eshotY+2;
            shotXL1 = shotXL1-12;
              setPosition("enemyProjectile20", shotXL1, shotY9);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile20", shotXL1, shotY9);
        }
      //M1-10
        if(eshotY < 450 && enemyY<=eshotY-400){
          eshotY = eshotY+2;
            shotXL1 = shotXL1-12;
              setPosition("enemyProjectile21", shotXL1, shotY10);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile21", shotXL1, shotY10);
        }
    //Left Middle 2 Attack
      //M2-0
        if(eshotY < 450){
          eshotY = eshotY+2;
            shotXL2 = shotXL2-24;
              setPosition("enemyProjectile22", shotXL2, eshotY);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile22", shotXL2, eshotY);
        }
      //M2-1
        if(eshotY < 450&& enemyY<=eshotY-40){
          eshotY = eshotY+2;
            shotXL2 = shotXL2-24;
              setPosition("enemyProjectile23", shotXL2, shotY1);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile23", shotXL2, shotY1);
        }
      //M2-2
        if(eshotY < 450&& enemyY<=eshotY-80){
          eshotY = eshotY+2;
            shotXL2 = shotXL2-24;
              setPosition("enemyProjectile24", shotXL2, shotY2);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile24", shotXL2, shotY2);
        }
      //M2-3
        if(eshotY < 450&& enemyY<=eshotY-120){
          eshotY = eshotY+2;
            shotXL2 = shotXL2-24;
              setPosition("enemyProjectile25", shotXL2, shotY3);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile25", shotXL2, shotY3);
        }
      //M2-4
        if(eshotY < 450&& enemyY<=eshotY-160){
          eshotY = eshotY+2;
            shotXL2 = shotXL2-24;
              setPosition("enemyProjectile26", shotXL2, shotY4);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile26", shotXL2, shotY4);
        }
      //M2-5
        if(eshotY < 450&& enemyY<=eshotY-200){
          eshotY = eshotY+2;
            shotXL2 = shotXL2-24;
              setPosition("enemyProjectile27", shotXL2, shotY5);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile27", shotXL2, shotY5);
        }
      //M2-6
        if(eshotY < 450&& enemyY<=eshotY-240){
          eshotY = eshotY+2;
            shotXL2 = shotXL2-24;
              setPosition("enemyProjectile28", shotXL2, shotY6);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile28", shotXL2, shotY6);
        }
      //M2-7
        if(eshotY < 450&& enemyY<=eshotY-280){
          eshotY = eshotY+2;
            shotXL2 = shotXL2-24;
              setPosition("enemyProjectile29", shotXL2, shotY7);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile29", shotXL2, shotY7);
        }
      //M2-8
        if(eshotY < 450&& enemyY<=eshotY-320){
          eshotY = eshotY+2;
            shotXL2 = shotXL2-24;
              setPosition("enemyProjectile30", shotXL2, shotY8);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile30", shotXL2, shotY8);
        }
      //M2-9
        if(eshotY < 450 && enemyY<=eshotY-360){
          eshotY = eshotY+2;
            shotXL2 = shotXL2-24;
              setPosition("enemyProjectile31", shotXL2, shotY9);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile31", shotXL2, shotY9);
        }
      //M2-10
        if(eshotY < 450 && enemyY<=eshotY-400){
          eshotY = eshotY+2;
            shotXL2 = shotXL2-24;
              setPosition("enemyProjectile32", shotXL2, shotY10);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile32", shotXL2, shotY10);
        }
    //Right Attack
      //R0
        if(eshotY < 450){
          eshotY = eshotY+2;
            shotXL2 = shotXL2-36;
              setPosition("enemyProjectile33", shotXL3, eshotY);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile33", shotXL3, eshotY);
        }
      //R1
        if(eshotY < 450&& enemyY<=eshotY-40){
          eshotY = eshotY+2;
            shotXL2 = shotXL2-36;
              setPosition("enemyProjectile34", shotXL3, shotY1);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile34", shotXL3, shotY1);
        }
      //R2
        if(eshotY < 450&& enemyY<=eshotY-80){
          eshotY = eshotY+2;
            shotXL2 = shotXL2-36;
              setPosition("enemyProjectile35", shotXL3, shotY2);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile35", shotXL3, shotY2);
        }
      //R3
        if(eshotY < 450&& enemyY<=eshotY-120){
          eshotY = eshotY+2;
            shotXL2 = shotXL2-36;
              setPosition("enemyProjectile36", shotXL3, shotY3);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile36", shotXL3, shotY3);
        }
      //R4
        if(eshotY < 450&& enemyY<=eshotY-160){
          eshotY = eshotY+2;
            shotXL2 = shotXL2-36;
              setPosition("enemyProjectile37", shotXL3, shotY4);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile37", shotXL3, shotY4);
        }
      //R5
        if(eshotY < 450&& enemyY<=eshotY-200){
          eshotY = eshotY+2;
            shotXL3 = shotXL3-36;
              setPosition("enemyProjectile38", shotXL3, shotY5);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile38", shotXL3, shotY5);
        }
      //R6
        if(eshotY < 450&& enemyY<=eshotY-240){
          eshotY = eshotY+2;
            shotXL3 = shotXL3-36;
              setPosition("enemyProjectile39", shotXL3, shotY6);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile39", shotXL3, shotY6);
        }
      //R7
        if(eshotY < 450&& enemyY<=eshotY-280){
          eshotY = eshotY+2;
            shotXL3 = shotXL3-36;
              setPosition("enemyProjectile40", shotXL3, shotY7);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile40", shotXL3, shotY7);
        }
      //R8
        if(eshotY < 450&& enemyY<=eshotY-320){
          eshotY = eshotY+2;
            shotXL3 = shotXL3-36;
              setPosition("enemyProjectile41", shotXL3, shotY8);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile41", shotXL3, shotY8);
        }
      //R9
        if(eshotY < 450 && enemyY<=eshotY-360){
          eshotY = eshotY+2;
            shotXL3 = shotXL3-36;
              setPosition("enemyProjectile42", shotXL3, shotY9);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile42", shotXL3, shotY9);
        }
      //R10
        if(eshotY < 450 && enemyY<=eshotY-400){
          eshotY = eshotY+2;
            shotXL3 = shotXL3-36;
              setPosition("enemyProjectile43", shotXL3, shotY10);
        }
        else if(eshotY >= 450){
          eshotX=68;
            eshotY=106;
              setPosition("enemyProjectile43", shotXL3, shotY10);
        }
  }
  else if (number == 1){
    //Middle Middle 1 Attack
      //MM1-0
        if(eshotY < 450){
          eshotY = eshotY+2;
            shotXM1 = shotXM1-12;
              setPosition("enemyProjectile0", shotXM1, eshotY);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile0", shotXM1, eshotY);
        }
      //MM1-1
        if(eshotY < 450&& enemyY<=eshotY-40){
          eshotY = eshotY+2;
            shotXM1 = shotXM1-12;
              setPosition("enemyProjectile1", shotXM1, shotY1);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile1", shotXM1, shotY1);
        }
      //MM1-2
        if(eshotY < 450&& enemyY<=eshotY-80){
          eshotY = eshotY+2;
            shotXM1 = shotXM1-12;
              setPosition("enemyProjectile2", shotXM1, shotY2);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile2", shotXM1, shotY2);
        }
      //MM1-3
        if(eshotY < 450&& enemyY<=eshotY-120){
          eshotY = eshotY+2;
            shotXM1 = shotXM1-12;
              setPosition("enemyProjectile3", shotXM1, shotY3);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile3", shotXM1, shotY3);
        }
      //MM1-4
        if(eshotY < 450&& enemyY<=eshotY-160){
          eshotY = eshotY+2;
            shotXM1 = shotXM1-12;
              setPosition("enemyProjectile4", shotXM1, shotY4);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile4", shotXM1, shotY4);
        }
      //MM1-5
        if(eshotY < 450&& enemyY<=eshotY-200){
          eshotY = eshotY+2;
            shotXM1 = shotXM1-12;
              setPosition("enemyProjectile5", shotXM1, shotY5);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile5", shotXM1, shotY5);
        }
      //MM1-6
        if(eshotY < 450&& enemyY<=eshotY-240){
          eshotY = eshotY+2;
            shotXM1 = shotXM1-12;
              setPosition("enemyProjectile6", shotXM1, shotY6);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile6", shotXM1, shotY6);
        }
      //MM1-7
        if(eshotY < 450&& enemyY<=eshotY-280){
          eshotY = eshotY+2;
            shotXM1 = shotXM1-12;
              setPosition("enemyProjectile7", shotXM1, shotY7);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile7", shotXM1, shotY7);
        }
      //MM1-8
        if(eshotY < 450&& enemyY<=eshotY-320){
          eshotY = eshotY+2;
            shotXM1 = shotXM1-12;
              setPosition("enemyProjectile8", shotXM1, shotY8);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile8", shotXM1, shotY8);
        }
      //MM1-9
        if(eshotY < 450 && enemyY<=eshotY-360){
          eshotY = eshotY+2;
            shotXM1 = shotXM1-12;
              setPosition("enemyProjectile9", shotXM1, shotY9);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile9", shotXM1, shotY9);
        }
      //MM1-10
        if(eshotY < 450 && enemyY<=eshotY-400){
          eshotY = eshotY+2;
            shotXM1 = shotXM1-12;
              setPosition("enemyProjectile10", shotXM1, shotY10);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile10", shotXL1, shotY10);
        }
    //Middle Middle 2 Attack
      //MM2-0
        if(eshotY < 450){
          eshotY = eshotY+2;
            shotXM2 = shotXM2-24;
              setPosition("enemyProjectile11", shotXM2, eshotY);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile11", shotXM2, eshotY);
        }
      //MM2-1
        if(eshotY < 450&& enemyY<=eshotY-40){
          eshotY = eshotY+2;
            shotXM2 = shotXM2-24;
              setPosition("enemyProjectile12", shotXM2, shotY1);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile12", shotXM2, shotY1);
        }
      //MM2-2
        if(eshotY < 450&& enemyY<=eshotY-80){
          eshotY = eshotY+2;
            shotXM2 = shotXM2-24;
              setPosition("enemyProjectile13", shotXM2, shotY2);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile13", shotXM2, shotY2);
        }
      //MM2-3
        if(eshotY < 450&& enemyY<=eshotY-120){
          eshotY = eshotY+2;
            shotXM2 = shotXM2-24;
              setPosition("enemyProjectile14", shotXM2, shotY3);
        }
        else if(eshotY >= 450){
          eshotX=150;
            shotXM2 = shotXM2-24;
              setPosition("enemyProjectile14", shotXM2, shotY3);
        }
      //MM2-4
        if(eshotY < 450&& enemyY<=eshotY-160){
          eshotY = eshotY+2;
            shotXM2 = shotXM2-24;
              setPosition("enemyProjectile15", shotXM2, shotY4);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile15", shotXM2, shotY4);
        }
      //MM2-5
        if(eshotY < 450&& enemyY<=eshotY-200){
          eshotY = eshotY+2;
            shotXM2 = shotXM2-24;
              setPosition("enemyProjectile16", shotXM2, shotY5);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile16", shotXM2, shotY5);
        }
      //MM2-6
        if(eshotY < 450&& enemyY<=eshotY-240){
          eshotY = eshotY+2;
            shotXM2 = shotXM2-24;
              setPosition("enemyProjectile17", shotXM2, shotY6);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile17", shotXM2, shotY6);
        }
      //MM2-7
        if(eshotY < 450&& enemyY<=eshotY-280){
          eshotY = eshotY+2;
            shotXM2 = shotXM2-24;
              setPosition("enemyProjectile18", shotXM2, shotY7);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile18", shotXM2, shotY7);
        }
      //MM2-8
        if(eshotY < 450&& enemyY<=eshotY-320){
          eshotY = eshotY+2;
            shotXM2 = shotXM2-24;
              setPosition("enemyProjectile19", shotXM2, shotY8);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile19", shotXM2, shotY8);
        }
      //MM2-9
        if(eshotY < 450 && enemyY<=eshotY-360){
          eshotY = eshotY+2;
            shotXM2 = shotXM2-24;
              setPosition("enemyProjectile20", shotXM2, shotY9);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile20", shotXM2, shotY9);
        }
      //MM2-10
        if(eshotY < 450 && enemyY<=eshotY-400){
          eshotY = eshotY+2;
            shotXM2 = shotXM2-24;
              setPosition("enemyProjectile21", shotXM2, shotY10);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile21", shotXM2, shotY10);
        }
    //Middle Middle 3 Attack
      //MM3-0
        if(eshotY < 450){
          eshotY = eshotY+2;
            shotXM3 = shotXM3+12;
              setPosition("enemyProjectile22", shotXM3, eshotY);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile22", shotXM3, eshotY);
        }
      //MM3-1
        if(eshotY < 450&& enemyY<=eshotY-40){
          eshotY = eshotY+2;
            shotXM3 = shotXM3+12;
              setPosition("enemyProjectile23", shotXM3, shotY1);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile23", shotXM3, shotY1);
        }
      //MM3-2
        if(eshotY < 450&& enemyY<=eshotY-80){
          eshotY = eshotY+2;
            shotXM3 = shotXM3+12;
              setPosition("enemyProjectile24", shotXM3, shotY2);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile24", shotXM3, shotY2);
        }
      //MM3-3
        if(eshotY < 450&& enemyY<=eshotY-120){
          eshotY = eshotY+2;
            shotXM3 = shotXM3+12;
              setPosition("enemyProjectile25", shotXM3, shotY3);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile25", shotXM3, shotY3);
        }
      //MM3-4
        if(eshotY < 450&& enemyY<=eshotY-160){
          eshotY = eshotY+2;
            shotXM3 = shotXM3+12;
              setPosition("enemyProjectile26", shotXM3, shotY4);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile26", shotXM3, shotY4);
        }
      //MM3-5
        if(eshotY < 450&& enemyY<=eshotY-200){
          eshotY = eshotY+2;
            shotXM3 = shotXM3+12;
              setPosition("enemyProjectile27", shotXM3, shotY5);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile27", shotXM3, shotY5);
        }
      //MM3-6
        if(eshotY < 450&& enemyY<=eshotY-240){
          eshotY = eshotY+2;
            shotXM3 = shotXM3+12;
              setPosition("enemyProjectile28", shotXM3, shotY6);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile28", shotXM3, shotY6);
        }
      //MM3-7
        if(eshotY < 450&& enemyY<=eshotY-280){
          eshotY = eshotY+2;
            shotXM3 = shotXM3+12;
              setPosition("enemyProjectile29", shotXM3, shotY7);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile29", shotXM3, shotY7);
        }
      //MM3-8
        if(eshotY < 450&& enemyY<=eshotY-320){
          eshotY = eshotY+2;
            shotXM3 = shotXM3+12;
              setPosition("enemyProjectile30", shotXM3, shotY8);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile30", shotXM3, shotY8);
        }
      //MM3-9
        if(eshotY < 450 && enemyY<=eshotY-360){
          eshotY = eshotY+2;
            shotXM3 = shotXM3+12;
              setPosition("enemyProjectile31", shotXM3, shotY9);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile31", shotXM3, shotY9);
        }
      //MM3-10
        if(eshotY < 450 && enemyY<=eshotY-400){
          eshotY = eshotY+2;
            shotXM3 = shotXM3+12;
              setPosition("enemyProjectile32", shotXM3, shotY10);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile32", shotXM3, shotY10);
        }
    //Middle Middle 4 Attack
      //MM4-0
        if(eshotY < 450){
          eshotY = eshotY+2;
            shotXM4 = shotXM4+24;
              setPosition("enemyProjectile33", shotXM4, eshotY);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile33", shotXM4, eshotY);
        }
      //MM4-1
        if(eshotY < 450&& enemyY<=eshotY-40){
          eshotY = eshotY+2;
            shotXM4 = shotXM4+24;
              setPosition("enemyProjectile34", shotXM4, shotY1);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile34", shotXM4, shotY1);
        }
      //MM4-2
        if(eshotY < 450&& enemyY<=eshotY-80){
          eshotY = eshotY+2;
            shotXM4 = shotXM4+24;
              setPosition("enemyProjectile35", shotXM4, shotY2);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile35", shotXM4, shotY2);
        }
      //MM4-3
        if(eshotY < 450&& enemyY<=eshotY-120){
          eshotY = eshotY+2;
            shotXM4 = shotXM4+24;
              setPosition("enemyProjectile36", shotXM4, shotY3);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile36", shotXM4, shotY3);
        }
      //MM4-4
        if(eshotY < 450&& enemyY<=eshotY-160){
          eshotY = eshotY+2;
            shotXM4 = shotXM4+24;
              setPosition("enemyProjectile37", shotXM4, shotY4);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile37", shotXM4, shotY4);
        }
      //MM4-5
        if(eshotY < 450&& enemyY<=eshotY-200){
          eshotY = eshotY+2;
            shotXM4 = shotXM4+24;
              setPosition("enemyProjectile38", shotXM4, shotY5);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile38", shotXM4, shotY5);
        }
      //MM4-6
        if(eshotY < 450&& enemyY<=eshotY-240){
          eshotY = eshotY+2;
            shotXM4 = shotXM4+24;
              setPosition("enemyProjectile39", shotXM4, shotY6);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile39", shotXM4, shotY6);
        }
      //MM4-7
        if(eshotY < 450&& enemyY<=eshotY-280){
          eshotY = eshotY+2;
            shotXM4 = shotXM4+24;
              setPosition("enemyProjectile40", shotXM4, shotY7);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile40", shotXM4, shotY7);
        }
      //MM4-8
        if(eshotY < 450&& enemyY<=eshotY-320){
          eshotY = eshotY+2;
            shotXM4 = shotXM4+24;
              setPosition("enemyProjectile41", shotXM4, shotY8);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile41", shotXM4, shotY8);
        }
      //MM4-9
        if(eshotY < 450 && enemyY<=eshotY-360){
          eshotY = eshotY+2;
            shotXM4 = shotXM4+24;
              setPosition("enemyProjectile42", shotXM4, shotY9);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile42", shotXM4, shotY9);
        }
      //MM4-10
        if(eshotY < 450 && enemyY<=eshotY-400){
          eshotY = eshotY+2;
            shotXM4 = shotXM4+24;
              setPosition("enemyProjectile43", shotXM4, shotY10);
        }
        else if(eshotY >= 450){
          eshotX=150;
            eshotY=106;
              setPosition("enemyProjectile43", shotXM4, shotY10);
        }
  }
  else if (number == 2){
    //Right Attack
      //R0
        if(eshotY < 450){
          eshotY = eshotY+2;
            setPosition("enemyProjectile0", eshotX, eshotY);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile0", eshotX, eshotY);
        }
      //R1
        if(eshotY < 450&& enemyY<=eshotY-40){
          eshotY = eshotY+2;
            setPosition("enemyProjectile1", eshotX, shotY1);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile1", eshotX, shotY);
        }
      //R2
        if(eshotY < 450&& enemyY<=eshotY-80){
          eshotY = eshotY+2;
            setPosition("enemyProjectile2", eshotX, shotY2);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile2", eshotX, shotY2);
        }
      //R3
        if(eshotY < 450&& enemyY<=eshotY-120){
          eshotY = eshotY+2;
            setPosition("enemyProjectile3", eshotX, shotY3);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile3", eshotX, shotY3);
        }
      //R4
        if(eshotY < 450&& enemyY<=eshotY-160){
          eshotY = eshotY+2;
            setPosition("enemyProjectile4", eshotX, shotY4);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile4", eshotX, shotY4);
        }
      //R5
        if(eshotY < 450&& enemyY<=eshotY-200){
          eshotY = eshotY+2;
            setPosition("enemyProjectile5", eshotX, shotY5);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile5", eshotX, shotY5);
        }
      //R6
        if(eshotY < 450&& enemyY<=eshotY-240){
          eshotY = eshotY+2;
            setPosition("enemyProjectile6", eshotX, shotY6);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile6", eshotX, shotY6);
        }
      //R7
        if(eshotY < 450&& enemyY<=eshotY-280){
          eshotY = eshotY+2;
            setPosition("enemyProjectile7", eshotX, shotY7);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile7", eshotX, shotY7);
        }
      //R8
        if(eshotY < 450&& enemyY<=eshotY-320){
          eshotY = eshotY+2;
            setPosition("enemyProjectile8", eshotX, shotY8);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile8", eshotX, shotY8);
        }
      //R9
        if(eshotY < 450 && enemyY<=eshotY-360){
          eshotY = eshotY+2;
            setPosition("enemyProjectile9", eshotX, shotY9);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile9", eshotX, shotY9);
        }
      //R10
        if(eshotY < 450 && enemyY<=eshotY-400){
          eshotY = eshotY+2;
            setPosition("enemyProjectile10", eshotX, shotY10);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile10", eshotX, shotY10);
        }
    //Right Middle 1 Attack
      //M1-0
        if(eshotY < 450){
          eshotY = eshotY+2;
            shotXR1 = shotXR1+12;
              setPosition("enemyProjectile11", shotXR1, eshotY);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile11", shotXR1, eshotY);
        }
      //M1-1
        if(eshotY < 450&& enemyY<=eshotY-40){
          eshotY = eshotY+2;
            shotXR1 = shotXR1+12;
              setPosition("enemyProjectile12", shotXR1, shotY1);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile12", shotXR1, shotY1);
        }
      //M1-2
        if(eshotY < 450&& enemyY<=eshotY-80){
          eshotY = eshotY+2;
            shotXR1 = shotXR1+12;
              setPosition("enemyProjectile13", shotXR1, shotY2);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile13", shotXR1, shotY2);
        }
      //M1-3
        if(eshotY < 450&& enemyY<=eshotY-120){
          eshotY = eshotY+2;
            shotXR1 = shotXR1+12;
              setPosition("enemyProjectile14", shotXR1, shotY3);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile14", shotXR1, shotY3);
        }
      //M1-4
        if(eshotY < 450&& enemyY<=eshotY-160){
          eshotY = eshotY+2;
            shotXR1 = shotXR1+12;
              setPosition("enemyProjectile15", shotXR1, shotY4);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile15", shotXR1, shotY4);
        }
      //M1-5
        if(eshotY < 450&& enemyY<=eshotY-200){
          eshotY = eshotY+2;
            shotXR1 = shotXR1+12;
              setPosition("enemyProjectile16", shotXR1, shotY5);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile16", shotXR1, shotY5);
        }
      //M1-6
        if(eshotY < 450&& enemyY<=eshotY-240){
          eshotY = eshotY+2;
            shotXR1 = shotXR1+12;
              setPosition("enemyProjectile17", shotXR1, shotY6);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile17", shotXR1, shotY6);
        }
      //M1-7
        if(eshotY < 450&& enemyY<=eshotY-280){
          eshotY = eshotY+2;
            shotXR1 = shotXR1+12;
              setPosition("enemyProjectile18", shotXR1, shotY7);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile18", shotXR1, shotY7);
        }
      //M1-8
        if(eshotY < 450&& enemyY<=eshotY-320){
          eshotY = eshotY+2;
            shotXL1 = shotXL1+12;
              setPosition("enemyProjectile19", shotXR1, shotY8);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile19", shotXR1, shotY8);
        }
      //M1-9
        if(eshotY < 450 && enemyY<=eshotY-360){
          eshotY = eshotY+2;
            shotXL1 = shotXL1+12;
              setPosition("enemyProjectile20", shotXR1, shotY9);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile20", shotXR1, shotY9);
        }
      //M1-10
        if(eshotY < 450 && enemyY<=eshotY-400){
          eshotY = eshotY+2;
            shotXL1 = shotXL1+12;
              setPosition("enemyProjectile21", shotXR1, shotY10);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile21", shotXR1, shotY10);
        }
    //Right Middle 2 Attack
      //M2-0
        if(eshotY < 450){
          eshotY = eshotY+2;
            shotXR2 = shotXR2+24;
              setPosition("enemyProjectile22", shotXR2, eshotY);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile22", shotXR2, eshotY);
        }
      //M2-1
        if(eshotY < 450&& enemyY<=eshotY-40){
          eshotY = eshotY+2;
            shotXR2 = shotXR2+24;
              setPosition("enemyProjectile23", shotXR2, shotY1);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile23", shotXR2, shotY1);
        }
      //M2-2
        if(eshotY < 450&& enemyY<=eshotY-80){
          eshotY = eshotY+2;
            shotXR2 = shotXR2+24;
              setPosition("enemyProjectile24", shotXR2, shotY2);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile24", shotXR2, shotY2);
        }
      //M2-3
        if(eshotY < 450&& enemyY<=eshotY-120){
          eshotY = eshotY+2;
            shotXR2 = shotXR2+24;
              setPosition("enemyProjectile25", shotXR2, shotY3);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile25", shotXR2, shotY3);
        }
      //M2-4
        if(eshotY < 450&& enemyY<=eshotY-160){
          eshotY = eshotY+2;
            shotXR2 = shotXR2+24;
              setPosition("enemyProjectile26", shotXR2, shotY4);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile26", shotXR2, shotY4);
        }
      //M2-5
        if(eshotY < 450&& enemyY<=eshotY-200){
          eshotY = eshotY+2;
            shotXR2 = shotXR2+24;
              setPosition("enemyProjectile27", shotXR2, shotY5);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile27", shotXR2, shotY5);
        }
      //M2-6
        if(eshotY < 450&& enemyY<=eshotY-240){
          eshotY = eshotY+2;
            shotXR2 = shotXR2+24;
              setPosition("enemyProjectile28", shotXR2, shotY6);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile28", shotXR2, shotY6);
        }
      //M2-7
        if(eshotY < 450&& enemyY<=eshotY-280){
          eshotY = eshotY+2;
            shotXR2 = shotXR2+24;
              setPosition("enemyProjectile29", shotXR2, shotY7);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile29", shotXR2, shotY7);
        }
      //M2-8
        if(eshotY < 450&& enemyY<=eshotY-320){
          eshotY = eshotY+2;
            shotXR2 = shotXR2+24;
              setPosition("enemyProjectile30", shotXR2, shotY8);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile30", shotXR2, shotY8);
        }
      //M2-9
        if(eshotY < 450 && enemyY<=eshotY-360){
          eshotY = eshotY+2;
            shotXR2 = shotXR2+24;
              setPosition("enemyProjectile31", shotXR2, shotY9);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile31", shotXR2, shotY9);
        }
      //M2-10
        if(eshotY < 450 && enemyY<=eshotY-400){
          eshotY = eshotY+2;
            shotXR2 = shotXR2+24;
              setPosition("enemyProjectile32", shotXR2, shotY10);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile32", shotXR2, shotY10);
        }
    //Left Attack
      //L0
        if(eshotY < 450){
          eshotY = eshotY+2;
            shotXR3 = shotXR3+36;
              setPosition("enemyProjectile33", shotXR3, eshotY);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile33", shotXR3, eshotY);
        }
      //L1
        if(eshotY < 450&& enemyY<=eshotY-40){
          eshotY = eshotY+2;
            shotXR3 = shotXR3+36;
              setPosition("enemyProjectile34", shotXR3, shotY1);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile34", shotXR3, shotY1);
        }
      //L2
        if(eshotY < 450&& enemyY<=eshotY-80){
          eshotY = eshotY+2;
            shotXR3 = shotXR3+36;
              setPosition("enemyProjectile35", shotXR3, shotY2);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile35", shotXR3, shotY2);
        }
      //L3
        if(eshotY < 450&& enemyY<=eshotY-120){
          eshotY = eshotY+2;
            shotXR3 = shotXR3+36;
              setPosition("enemyProjectile36", shotXR3, shotY3);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile36", shotXR3, shotY3);
        }
      //L4
        if(eshotY < 450&& enemyY<=eshotY-160){
          eshotY = eshotY+2;
            shotXR3 = shotXR3+36;
              setPosition("enemyProjectile37", shotXR3, shotY4);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile37", shotXR3, shotY4);
        }
      //L5
        if(eshotY < 450&& enemyY<=eshotY-200){
          eshotY = eshotY+2;
            shotXR3 = shotXR3+36;
              setPosition("enemyProjectile38", shotXR3, shotY5);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile38", shotXR3, shotY5);
        }
      //L6
        if(eshotY < 450&& enemyY<=eshotY-240){
          eshotY = eshotY+2;
            shotXR3 = shotXR3+36;
              setPosition("enemyProjectile39", shotXR3, shotY6);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile39", shotXR3, shotY6);
        }
      //L7
        if(eshotY < 450&& enemyY<=eshotY-280){
          eshotY = eshotY+2;
            shotXR3 = shotXR3+36;
              setPosition("enemyProjectile40", shotXR3, shotY7);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile40", shotXR3, shotY7);
        }
      //L8
        if(eshotY < 450&& enemyY<=eshotY-320){
          eshotY = eshotY+2;
            shotXR3 = shotXR3+36;
              setPosition("enemyProjectile41", shotXR3, shotY8);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile41", shotXR3, shotY8);
        }
      //L9
        if(eshotY < 450 && enemyY<=eshotY-360){
          eshotY = eshotY+2;
            shotXR3 = shotXR3+36;
              setPosition("enemyProjectile42", shotXR3, shotY9);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile42", shotXR3, shotY9);
        }
      //L10
        if(eshotY < 450 && enemyY<=eshotY-400){
          eshotY = eshotY+2;
            shotXR3 = shotXR3+36;
              setPosition("enemyProjectile43", shotXR3, shotY10);
        }
        else if(eshotY >= 450){
          eshotX=232;
            eshotY=106;
              setPosition("enemyProjectile43", shotXR3, shotY10);
        }
  }
}