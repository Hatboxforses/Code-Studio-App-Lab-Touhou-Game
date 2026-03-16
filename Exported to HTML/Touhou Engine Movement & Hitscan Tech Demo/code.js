//All Characters & Sprites were made by & copyright to Shanghai Alice(上海アリス幻樂団) with the 
//The Sprites are pulled from a data sheet using the images from this Github repo: https://github.com/Hatboxforses/Code-Studio-App-Lab-Touhou-Game
//The Sprites were originally ripped & published on this site: https://www.spriters-resource.com/pc_computer/touhoueiyashouimperishablenight/
//The project is in no way reliant on these sprites & new ones could be used via drop in replacement
//The project uses the heart icon from code.org
  var playerX;
  var playerY;
  var enemyX;
  var enemyY;
  var enemyHealth = 100;
  var lives = 3;
  var spells = 3;
  var icons = getColumn("Touhou Sprites", "Property");
  var marisaPos = 1;
  var newMarisaPos;
  var shot;
  var c;
  var d;
  
reimuTitleScroll();

//Click the button to start the game
onEvent("startGame", "click", function() {
  loopNoKey();
    loopMarisa();
  // insert i < however many hearts
  for(var i = 1; i < 4; i++){
    setImageURL("health" + i, "icon://fa-heart");
    setProperty("health" + i, "icon-color", "red");
  }
  // insert i < however many spells
  for(var i = 1; i < 4; i++){
    setImageURL("star"+i, icons[37]);
  }
  // insert i < however many enemy projectiles
  for(var i = 0; i < 1; i++){
    setImageURL("enemyProjectile"+i, icons[37]);
  }
      setImageURL("yin1", icons[27]);
        setImageURL("yin2", icons[27]);
    setTimeout(function() {
      setScreen("gameScreen");
    }, 1000);
    timedLoop(40000, function() {
      marisaRandomAttack();
    });
    timedLoop(1000, function() {
      hitDetect();
    });
});

onEvent("restartGame", "click", function() {
  enemyHealth = 100;
  lives = 3;
    spells = 3;
      loopNoKey();
        loopMarisa();
  // insert i < however many hearts
  for(var i = 1; i < 4; i++){
    setImageURL("health" + i, "icon://fa-heart");
    setProperty("health" + i, "icon-color", "red");
  }
  // insert i < however many spells
  for(var i = 1; i < 4; i++){
    setImageURL("star"+i, icons[37]);
  }
  // insert i < however many enemy projectiles
  for(var i = 0; i < 1; i++){
    setImageURL("enemyProjectile"+i, icons[37]);
  }
      setImageURL("yin1", icons[27]);
        setImageURL("yin2", icons[27]);
    setTimeout(function() {
      setScreen("gameScreen");
    }, 1000);
    timedLoop(40000, function() {
      marisaRandomAttack();
    });
    timedLoop(1000, function() {
      hitDetect();
    });
});

//The controls
onEvent("gameScreen", "keydown", function(event) {
  if(event.key == "Up"){
    setPosition("playerSprite", playerX, updatePos("posY","+"));
      setPosition("yin1", playerX-17, updatePos("posY","+")+18);
        setPosition("yin2", playerX+46, updatePos("posY","+")+18);
  }
  else if(event.key == "Left"){
    //REALLY had to make sure to stop that damn clock
    stopTimedLoop(c);
      setPosition("playerSprite", updatePos("posX","-"), playerY);
        setPosition("yin1", updatePos("posX","-")-7, playerY+8);
          setPosition("yin2", updatePos("posX","-")+56, playerY+8);
            updateSprite("-");
    onEvent("gameScreen", "keyup", function() {
      stopTimedLoop(c);
        stopTimedLoop(c);
          stopTimedLoop(c);
            loopNoKey();
    });
  }
  else if(event.key == "Down"){
    setPosition("playerSprite", playerX, updatePos("posY","-"));
      setPosition("yin1", playerX-17, updatePos("posY","-"));
        setPosition("yin2", playerX+46, updatePos("posY","-"));
  }
  else if(event.key == "Right"){
    //REALLY REAAAALLLYYY had to make sure to stop that damn clock
    setPosition("playerSprite", updatePos("posX","+"), playerY);
      stopTimedLoop(c);
        setPosition("yin1", updatePos("posX","-")-7, playerY+8);
          setPosition("yin2", updatePos("posX","-")+56, playerY+8);
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
  }
  else if(event.key == "x"){ 
    shoot("focus");
  }
  else if(event.key == "c"){
    hideElement("star"+spells);
    spells = spells-1;
    shoot("spells");
  }
});


//Sets the shooting type based on keypress
function shoot(type){
  if(type == "normal"){
    shot="normal";
    //Script attack "normal"
  }
  else if(type == "focus"){
    shot="focus";
    //Script attack "focus"
  }
  else if(type == "spells"){
    shot="spells";
    //Script attack "spell"
  }
}

//Updates the player position
function updatePos(type,ULDR){
  playerX = getXPosition("playerSprite");
  playerY = getYPosition("playerSprite");
    if(type == "posX"){
      if(ULDR == "+"){
          playerX=playerX+10;
        return playerX;
      }
      else if(ULDR == "-"){
          playerX=playerX-10;
        return playerX;
      }
    }
    else if(type == "posY"){
      if(ULDR == "-"){
          playerY=playerY+10;
        return playerY;
      }
      else if(ULDR == "+"){
          playerY=playerY-10;
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
      setImageURL("titleScreen", icons[2]);
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
            marisaAttackPos(newMarisaPos);
                marisaScriptedAttack();
        }
        else if (marisaPos == 1){
          newMarisaPos = randomNumber(0,2);
            marisaAttackPos(newMarisaPos);
                marisaScriptedAttack();
        }
        else if (marisaPos == 2){
          newMarisaPos = randomNumber(1,2);
            marisaAttackPos(newMarisaPos);
                marisaScriptedAttack();
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
  for(var i = 0; i < 1; i++){
    if(playerX+56 >= getXPosition("enemyProjectile" + i)&&playerX <= getXPosition("enemyProjectile" + i)-12) {
      if(playerY+56 >= getYPosition("enemyProjectile" + i)&&playerY <= getYPosition("enemyProjectile" + i)+4) {
        dying();
      }
    }
  }
}

//Called when losing a life or dying when life = 0
function dying(){
      setPosition("playerSprite", 125, 300);
        playerX = getXPosition("playerSprite");
          playerY = getYPosition("playerSprite");
            setPosition("yin1", playerX-17, updatePos("posY","+")+18);
              setPosition("yin2", playerX+46, updatePos("posY","+")+18);
    setTimeout(function(){
      hideElement("health"+lives);
      lives = lives - 1;
    }, 1000);
    if(lives <= 0){
      setScreen("deathScreen");
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
  }, 2600);
  setTimeout(function() {
    setImageURL("enemySprite", icons[30]);
  }, 4600);
  setTimeout(function() {
    setImageURL("enemySprite", icons[31]);
  }, 6600);
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
      if(enemyX != 14){
        stopTimedLoop(d);
          enemyX = enemyX-2;
            setPosition("enemySprite", enemyX, 46);
      }
      else if(enemyX == 14){
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
      if(enemyX != 100){
        stopTimedLoop(d);
          enemyX = enemyX+2;
            setPosition("enemySprite", enemyX, 46);
      }
      else if(enemyX == 100){
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
      if(enemyX != 100){
        stopTimedLoop(d);
          enemyX = enemyX-2;
            setPosition("enemySprite", enemyX, 46);
      }
      else if(enemyX == 100){
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
      if(enemyX != 182){
        stopTimedLoop(d);
          enemyX = enemyX+2;
            setPosition("enemySprite", enemyX, 46);
      }
      else if(enemyX == 182){
        stopTimedLoop(e);
            marisaPos = 2;
            loopMarisa();
      }
    });
  }
}

//Scripted attacks by Marisa
function marisaScriptedAttack(number){
  if (number == 0){
    //This is where the 1st scripted attack would go
  }
  else if (number == 1){
    //This is where the 2nd scripted attack would go
  }
  else if (number == 2){
    //This is where the 3rd scripted attack would go
  }
}
