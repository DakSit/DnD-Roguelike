//var currentEnemy;


var completedRooms = 0;
var fightingBoss = false;

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
  constructor(name, health, enemyAttack){
    this.name = name;
    this.health = health;
    this.enemyAttack = enemyAttack;
    }

    attackPlayer() {
      player.health -= this.enemyAttack;
      updateScreen('playerHealth',player.health);
    }
}

class Knight extends Enemy {
  attackPlayer() {
    player.health -= this.enemyAttack;
    this.enemyAttack += this.enemyAttack;
    updateScreen('playerHealth', player.health);
  }
}

class Mage extends Enemy {
  attackPlayer() {
    player.health -= this.enemyAttack;
    player.intelligence -= 1;
    updateScreen('playerHealth', player.health);
    updateScreen('playerInt', player.intelligence);
  }
}

class Rogue extends Enemy {
  attackPlayer() {
    player.health -= this.enemyAttack;
    player.strength -= 1;
    updateScreen('playerHealth', player.health);
    updateScreen('playerInt', player.strength);
  }
}

function updateScreen(id, target)
{
  document.getElementById(id).innerHTML = target;
}

<<<<<<< Updated upstream
var Deck = [];

function howToPlay(){
  alert("Welcome! Click a class, click a room, and start clicking!");
}

function classCrusher() {
  player = new Hero("D", "Crusher", 30, 3, 3, 3);
   updateScreen('playerName',player.name);
   updateScreen('playerClass',player.className);
   updateScreen('playerHealth',player.health);
   updateScreen('playerAgi',player.agility);
   updateScreen('playerInt',player.intelligence);
   updateScreen('playerStr',player.strength);
}

function classCatalyst() {
  player = new Hero("D", "Catalyst", 30, 3, 10, 3);
   updateScreen('playerName',player.name);
   updateScreen('playerClass',player.className);
   updateScreen('playerHealth',player.health);
   updateScreen('playerAgi',player.agility);
   updateScreen('playerInt',player.intelligence);
   updateScreen('playerStr',player.strength);
}

function classCretin() {
  player = new Hero("D", "Cretin", 30, 3, 3, 3);
   updateScreen('playerName',player.name);
   updateScreen('playerClass',player.className);
   updateScreen('playerHealth',player.health);
   updateScreen('playerAgi',player.agility);
   updateScreen('playerInt',player.intelligence);
   updateScreen('playerStr',player.strength);
=======
function howToPlay(){
  alert("Welcome! Click a class, click a room, and start clicking!\r\nEvery time you end your turn the foe will go if you haven't defeated it.\r\nStats matter! And so do the buttons you can collect.");
}
function updatePlayer() {
  updateScreen('playerName',player.name);
  updateScreen('playerClass',player.className);
  updateScreen('playerHealth',player.health);
  updateScreen('playerAgi',player.maxAgility);
  updateScreen('playerInt',player.maxIntelligence);
  updateScreen('playerStr',player.maxStrength);
}

function classCrusher() {
  var heroName = prompt("Enter your name!");
  player = new Hero(heroName, "Crusher", 40000, 10, 10, 10, 10, 10, 10);
   updatePlayer();
   addButton(0);
   displayDeck();
   showRooms();
   $("#roomSection").show();
}

function classCatalyst() {
  var heroName = prompt("Enter your name!");
  player = new Hero(heroName, "Crusher", 30, 3, 10, 3, 3, 3, 3);
   updatePlayer();
   addButton(2);
   displayDeck();
   showRooms();
   $("#roomSection").show();
}

function classCretin() {
  var heroName = prompt("Enter your name!");
  player = new Hero(heroName, "Crusher", 30, 3, 15, 3, 3, 3, 3);
   updatePlayer();
   addButton(1);
   displayDeck();
   showRooms();
   $("#roomSection").show();
>>>>>>> Stashed changes
}

function checkBoss() {
  if (completedRooms >= 5)
  {
    let enemies = [
      new Knight("Mega Knight", 10, 5),
      new Enemy("Mega Mage", 5, 10),
      new Enemy("Mega Big Boy", 15, 10)
    ];
    currentEnemy = enemies[Math.floor(Math.random() * enemies.length)];
    updateScreen('enemyName',currentEnemy.name);
    updateScreen('enemyHealth',currentEnemy.health);
    updateScreen('enemyAttack',currentEnemy.enemyAttack);
    fightingBoss = true;
  }
    else {

    }
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
    new Knight("Knight", 10, 5),
    new Mage("Mage", 5, 10),
    new Rogue("Rogue", 15, 10)
  ];
  currentEnemy = enemies[Math.floor(Math.random() * enemies.length)];
  updateScreen('enemyName',currentEnemy.name);
  updateScreen('enemyHealth',currentEnemy.health);
  updateScreen('enemyAttack',currentEnemy.enemyAttack);
  checkBoss();
}




function deckCheck(){
  if (Deck.length <= 4)
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
    loseCondition();
    currentEnemy.attackPlayer();
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


function hitEnemy(){
  currentEnemy.health -= player.strength * 100;
  updateScreen('enemyHealth',currentEnemy.health);
  endCombatCheck();
}

function endCombatCheck(){
  if (currentEnemy.health <= 0)
  {
    completedRooms++;
    $( ".enemyStatsDisplay" ).hide();
    $( "#roomSelection" ).show();
    $( "#startTurnButtonDisplay" ).hide();
    if (fightingBoss == true)
    {
      $("body").hide();
      alert("You win!");
    }
    else
    {

    }
  }
  else
  {

  }
}

function loseCondition(){
  if (player.health <= 0)
  {
    var disabler = document.getElementsByClassName("startTurnButton");
    for (var i = 0; i < disabler.length; i++) {
        disabler[i].disabled = true;
    }
    alert("YOU LOSE! Click Instantly Die at the top to play again");
  }
  else
  {
  }
}

$(document).ready(function(){
$(".optionButton").click(function(){
  $("#bottomStatsWrapper").show();
  $("#characterOptions").hide();
  $("#characterSelect").hide();
  $("#roomSection").show();
});})

$(document).ready(function(){
$(".roomButton").click(function(){
  $("#roomSelection").hide();
  $("#startTurnButtonDisplay").show();
  $("#enemyStatsDisplay").show();
});})


//document.getElementById("playerHealth").innerHTML =  player.health;
