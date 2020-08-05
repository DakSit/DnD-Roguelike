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

class Monster {
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
  player = new Hero("D", "Catalyst", 30, 3, 3, 3);
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
  showClass();
  classHide();
  displayStats();
}

function populateMonsters(){
  let monsters = [
    {
      name: "Knight",
      health: "5",
      option1: "Deal 5",
      option2: "Heal 5",
      option3: "Deal 3"
    },
    {
      name: "Rogue",
      health: "5",
      option1: "Deal 5",
      option2: "Heal 5",
      option3: "Deal 3"
    },
    {
      name: "Big boy",
      health: "5",
      option1: "Deal 5",
      option2: "Heal 5",
      option3: "Deal 3"
    }
  ];
  var currentMonster = monsters[Math.floor(Math.random() * monsters.length)];
  document.getElementById('enemyName').innerHTML = currentMonster.name;
  document.getElementById('enemyHealth').innerHTML = currentMonster.health;
  document.getElementById('enemyOption1').innerHTML = currentMonster.option1;
  document.getElementById('enemyOption2').innerHTML = currentMonster.option2;
  document.getElementById('enemyOption3').innerHTML = currentMonster.option3;
}




function deckCheck(){
  if (Deck.length <= 6)
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
});})


//document.getElementById("playerHealth").innerHTML =  player.health;
