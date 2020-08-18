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

function createDeck(){
  const deck = [{
      text: 'Big Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiit',
      titleContent: 'Deal 999 damage'
    },
    {
      text: 'Big Kick',
      titleContent: 'Deal 999 damage'
    },
    {
      text: 'Big Bite',
      titleContent: 'Deal 999 damage'
    }
  ];

  const buttonsContainer = document.getElementById('deckButtons');

/*  deck.forEach((item, i) => {
  item.id = i + 1;
}); */
var j = 0
  deck.forEach(buttonData => {
    const button = document.createElement('button');
    //$( "p" ).last().addClass( "selected" );
    button.textContent = buttonData.text;
    button.title = buttonData.titleContent;
    button.id = "button" + j;
    j++;
    button.classList.add("deckButton");
    buttonsContainer.appendChild(button);
    console.log(deck);
  });

  document.getElementById("button0").addEventListener("click", hitEnemy);
  document.getElementById("button1").addEventListener("click", hitEnemy);
  document.getElementById("button2").addEventListener("click", hitEnemy);
}
  function crusherOne() {
      var r=$('<input/>').attr({
          type: "button",
          id: "punchButton",
          class: "deckButton",
          value: 'Big Hit',
          title: 'Deal 999 damage'
      });
      $(".deckButtons").append(r);
       $("#punchButton").prop("disabled",true);
      //$(“.deckButton”).attr(“disabled”, true);
      document.getElementById("punchButton").addEventListener("click", hitEnemy);
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

    displayIntent() {
      updateScreen('combatlog', "The Knight intends to hit you");
    }
}


class Knight extends Enemy {
  attackPlayer() {
    if (this.health >= 0)
    {
    player.health -= this.enemyAttack;
    this.enemyAttack += this.enemyAttack;
    updateScreen('playerHealth', player.health);
  }
  }
  displayIntent() {
    $("#log").show();
    updateScreen('combatlog', "The Knight intends to hit you");
  }
}

class Mage extends Enemy {
  attackPlayer() {
    if (this.health >= 0)
    {
    player.health -= this.enemyAttack;
    player.intelligence -= 1;
    updateScreen('playerHealth', player.health);
    updateScreen('playerInt', player.intelligence);
    }
  }
  displayIntent() {
    $("#log").show();
    updateScreen('combatlog', "The Knight intends to hit you");
  }
}

class Rogue extends Enemy {
  attackPlayer() {
    if (this.health >= 0)
    {
    player.health -= this.enemyAttack;
    player.strength -= 1;
    updateScreen('playerHealth', player.health);
    updateScreen('playerInt', player.strength);
  }
}
  displayIntent() {
    $("#log").show();
    updateScreen('combatlog', "The Knight intends to hit you");

  }
}

function updateScreen(id, target)
{
  document.getElementById(id).innerHTML = target;
}

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
   createDeck();
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
  currentEnemy.displayIntent();
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
    currentEnemy.attackPlayer();
    loseCondition();
    currentEnemy.displayIntent();
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

function heal(){
  player.health += 5;
  updateScreen('playerHealth', player.health);
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

//Class Button section

function crusherOne() {
    var r=$('<input/>').attr({
        type: "button",
        id: "punchButton",
        class: "deckButton",
        value: 'Big Hit',
        title: 'Deal 999 damage'
    });
    $(".deckButtons").append(r);
     $("#punchButton").prop("disabled",true);
    //$(“.deckButton”).attr(“disabled”, true);
    document.getElementById("punchButton").addEventListener("click", hitEnemy);
}

function crusherTwo() {
    var r=$('<input/>').attr({
        type: "button",
        id: "kickButton",
        class: "deckButton",
        value: 'Big Kick',
        title: 'Deal 999 damage'
    });
    $(".deckButtons").append(r);
     $("#kickButton").prop("disabled",true);
    //$(“.deckButton”).attr(“disabled”, true);
    document.getElementById("kickButton").addEventListener("click", hitEnemy);
}

function crusherThree() {
    var r=$('<input/>').attr({
        type: "button",
        id: "biteButton",
        class: "deckButton",
        value: 'Big Bite',
        title: 'Deal 999 damage'
    });
    $(".deckButtons").append(r);
     $("#biteButton").prop("disabled",true);
    //$(“.deckButton”).attr(“disabled”, true);
    document.getElementById("biteButton").addEventListener("click", hitEnemy);
}

//document.getElementById("playerHealth").innerHTML =  player.health;
