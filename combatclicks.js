class Hero {
    constructor(name, className, health, agility, intelligence, strength) {
        this.name = name;
        this.className = className;
        this.health = health;
        this.agility = agility;
        this.intelligence = intelligence;
        this.strength = strength;
    }

}

class Enemy {
  constructor(name, health, option1, option2, option3){
    this.name = name;
    this.health = health;
    this.option1 = option1;
    this.option2 = option2;
    this.option3 = option3;
    }
}

var Deck = [];

function howToPlay(){
  alert("Welcome! Click a class, click a room, and start clicking!");
}

function classCrusher() {
  player = new Hero("D", "Crusher", 30, 3, 3, 3);
   document.getElementById('playerName').innerHTML = player.name;
   document.getElementById('playerClass').innerHTML = player.className;
   document.getElementById('playerHealth').innerHTML = player.health;
   document.getElementById('playerAgi').innerHTML = player.agility;
   document.getElementById('playerInt').innerHTML = player.intelligence;
   document.getElementById('playerStr').innerHTML = player.strength;
}

function classCatalyst() {
  player = new Hero("D", "Catalyst", 30, 3, 10, 3);
   document.getElementById('playerName').innerHTML = player.name;
   document.getElementById('playerClass').innerHTML = player.className;
   document.getElementById('playerHealth').innerHTML = player.health;
   document.getElementById('playerAgi').innerHTML = player.agility;
   document.getElementById('playerInt').innerHTML = player.intelligence;
   document.getElementById('playerStr').innerHTML = player.strength;
}

function classCretin() {
  player = new Hero("D", "Cretin", 30, 3, 3, 3);
   document.getElementById('playerName').innerHTML = player.name;
   document.getElementById('playerClass').innerHTML = player.className;
   document.getElementById('playerHealth').innerHTML = player.health;
   document.getElementById('playerAgi').innerHTML = player.agility;
   document.getElementById('playerInt').innerHTML = player.intelligence;
   document.getElementById('playerStr').innerHTML = player.strength;
}



function classSelection(name){
  if (name==1)
  {
    classCrusher();
  }
  else if(name==2)
  {
    classCatalyst();
  }
  else {
    classCretin();
  }
  displayStats();
}

function populateEnemies(){
  let enemies = [
    {
      name: "Knight",
      health: 5,
      option1: "Deal 5",
      option2: "Heal 5",
      option3: "Deal 3"
    },
    {
      name: "Rogue",
      health: 5,
      option1: "Deal 5",
      option2: "Heal 5",
      option3: "Deal 3"
    },
    {
      name: "Big boy",
      health: 5,
      option1: "Deal 5",
      option2: "Heal 5",
      option3: "Deal 3"
    }
  ];
  var currentEnemy = enemies[Math.floor(Math.random() * enemies.length)];
  document.getElementById('enemyName').innerHTML = currentEnemy.name;
  document.getElementById('enemyHealth').innerHTML = currentEnemy.health;
  document.getElementById('enemyOption1').innerHTML = currentEnemy.option1;
  document.getElementById('enemyOption2').innerHTML = currentEnemy.option2;
  document.getElementById('enemyOption3').innerHTML = currentEnemy.option3;
}




function deckCheck(){
  if (Deck.length <= 6)
  {

  }
}

function turnTimerStart(){
var turnleft = player.intelligence;
var enabler = document.getElementsByClassName("deckButton");
for (var i = 0; i < enabler.length; i++) {
    enabler[i].disabled = false;
}
var turnTimer = setInterval(function(){
  if(turnleft <= 0){
    clearInterval(turnTimer);
    document.getElementById("turnClock").innerHTML = "Over";
    monsterTurn();
    var disabler = document.getElementsByClassName("deckButton");
    for (var i = 0; i < disabler.length; i++) {
        disabler[i].disabled = true;
    }
  } else {
    document.getElementById("turnClock").innerHTML = turnleft + " seconds";
  }
  turnleft -= 1;
}, 1000);
}

function monsterTurn(){
  player.health -= 5;
  document.getElementById('playerHealth').innerHTML = player.health;
}

function hitThatBitch(){
  currentEnemy.health -= 5;
  document.getElementById('enemyHealth').innerHTML = currentEnemy.health;
}

function loseCondition(){
  if (player.health <= 0)
  {
    alert("YOU LOSE!");
  }
  else
  {

  }
}

$(document).ready(function(){
$(".optionButton").click(function(){
  $("#characterStatsWrapper").show();
  $("#characterOptions").hide();
  $("#roomSection").show();
});})

$(document).ready(function(){
$(".roomButton").click(function(){
  $("#roomSelection").hide();
  $("#startTurnButtonDisplay").show();
});})


//document.getElementById("playerHealth").innerHTML =  player.health;
