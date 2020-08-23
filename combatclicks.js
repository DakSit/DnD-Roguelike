//var currentEnemy;

var completedRooms = 0;
var fightingBoss = false;

class Hero {
    constructor(name, className, health, maxAgility, maxIntelligence, maxStrength, currentAgility, currentIntelligence, currentStrength) {
        this.name = name;
        this.className = className;
        this.health = health;
        this.maxAgility = maxAgility;
        this.maxIntelligence = maxIntelligence;
        this.maxStrength = maxStrength;
        this.currentAgility = currentAgility;
        this.currentStrength = currentStrength;
        this.currentIntelligence = currentIntelligence;
    }

}

function createRooms(){
  const rooms = [{
      text: 'Stat Increase',
      titleContent: 'This room lets you increase some of your stats',
      buttonid: 'statRoom'
    },
    {
      text: 'New Button',
      titleContent: 'This room lets you choose a new button',
      buttonid: 'buttonRoom'
    },
    {
      text: 'Healing',
      titleContent: 'This room heals you to full',
      buttonid: 'healRoom'
    }
  ];

  const roomsContainer = document.getElementById('roomSelection');

/*  deck.forEach((item, i) => {
  item.id = i + 1;
}); */
  rooms.forEach(buttonData => {
    const button = document.createElement('button');
    //$( "p" ).last().addClass( "selected" );
    button.textContent = buttonData.text;
    button.title = buttonData.titleContent;
    button.id = buttonData.buttonid;
    button.classList.add("roomButton");
    roomsContainer.appendChild(button);
  });
  //disabler();
  document.getElementById("statRoom").addEventListener("click", () => {
     statRewards();
     populateEnemies();
     roomSelected();
  });
  document.getElementById("buttonRoom").addEventListener("click", () => {
     buttonRewards();
     populateEnemies();
     roomSelected();
  });
  document.getElementById("healRoom").addEventListener("click", () => {
     healRewards();
     populateEnemies();
     roomSelected();
  });
}

function statRewards(){

  function increaseStrengthChosen(){
    player.maxStrength += 2;
    updateScreen("playerStr", player.maxStrength);
  }

  const statRewardsOptions = [{
      text: 'Max Strength',
      titleContent: 'This room lets you increase your strength',
      buttonid: 'maxStrengthIncrease'
    },
    {
      text: 'Max Agility',
      titleContent: 'This room lets you increase your agility',
      buttonid: 'maxAgilityIncrease'
    },
    {
      text: 'Max Intelligence',
      titleContent: 'This room lets you increase your intelligence',
      buttonid: 'maxIntelligenceIncrease'
    }
  ];

  const statRewardsContainer = document.getElementById('rewardsSelection');

/*  deck.forEach((item, i) => {
  item.id = i + 1;
}); */
  statRewardsOptions.forEach(buttonData => {
    const button = document.createElement('button');
    //$( "p" ).last().addClass( "selected" );
    button.textContent = buttonData.text;
    button.title = buttonData.titleContent;
    button.id = buttonData.buttonid;
    button.classList.add("rewardButton");
    statRewardsContainer.appendChild(button);
  });
  console.log(statRewardsOptions);
  //disabler();
  document.getElementById("maxStrengthIncrease").addEventListener("click", () => {
     increaseStrengthChosen();
     showRooms();
     arrayRemoval(statRewardsOptions, ".rewardButton");
  });
}

function buttonRewards(){

  function bigThunder(){
    const button = document.createElement('button');
    //$( "p" ).last().addClass( "selected" );
    button.textContent = "Big Thunder";
    button.title = "Big Thunder";
    button.id = "bigThunderButton";
    button.classList.add("deckButton");
    deckButtons.appendChild(button);
    disabler();
    document.getElementById("bigThunderButton").addEventListener("click", bigThunderAction);

  }

  function bigThunderAction(){
    currentEnemy.health -= 1;
    updateScreen("enemyHealth", currentEnemy.health);
    endCombatCheck();
  }

  const buttonRewardsOptions = [{
      text: 'Big Thunder',
      titleContent: 'Big Thunder does damage equal to ten times your strength',
      buttonid: 'bigThunder'
    },
    {
      text: 'Max Agility',
      titleContent: 'This room lets you increase your agility',
      buttonid: 'maxAgilityIncrease'
    },
    {
      text: 'Max Intelligence',
      titleContent: 'This room lets you increase your intelligence',
      buttonid: 'maxIntelligenceIncrease'
    },
    {
      text: 'Ghost Rider Ooh Ooh',
      titleContent: 'YO yo whats up homie',
      buttonid: 'bingbongbingbong'
    }
  ];

  const buttonRewardsContainer = document.getElementById('rewardsSelection');

/*  deck.forEach((item, i) => {
  item.id = i + 1;
}); */
  if (buttonRewardsOptions.length > 3)
  {
    buttonRewardsOptions.splice(Math.floor(Math.random() * buttonRewardsOptions.length),1);
  }
  buttonRewardsOptions.forEach(buttonData => {
    const button = document.createElement('button');
    //$( "p" ).last().addClass( "selected" );
    button.textContent = buttonData.text;
    button.title = buttonData.titleContent;
    button.id = buttonData.buttonid;
    button.classList.add("rewardButton");
    buttonRewardsContainer.appendChild(button);
  });
  console.log(buttonRewardsOptions);
  //disabler();

  document.getElementById("bigThunder").addEventListener("click", () => {
     bigThunder();
     showRooms();
     arrayRemoval(buttonRewardsOptions, ".rewardButton");
  });
}

function arrayRemoval(arrayRemoved, classRemoved){
  //var remover = document.getElementsByClassName(classRemoved);
  //for (let i = 0; i < classRemoved; i++) {
  //console.log(remover[i]);
  $(classRemoved).remove();
  //remover[i].remove();
  //alert("Hello!");
  //}
  for (let i = 0; i < arrayRemoved.length; i++) {
  arrayRemoved.pop();
  }

}


function createDeck(){
  const deck = [{
      text: 'Big Hit',
      titleContent: 'Deal 999 damage',
      buttonid: 'bigHit'
    },
    {
      text: 'Big Kick',
      titleContent: 'Deal 999 damage',
      buttonid: 'bigKick'
    },
    {
      text: 'Big Bite',
      titleContent: 'Deal 999 damage',
      buttonid: 'bigBite'
    }
  ];

  const buttonsContainer = document.getElementById('deckButtons');

/*  deck.forEach((item, i) => {
  item.id = i + 1;
}); */
  deck.forEach(buttonData => {
    const button = document.createElement('button');
    //$( "p" ).last().addClass( "selected" );
    button.textContent = buttonData.text;
    button.title = buttonData.titleContent;
    button.id = buttonData.buttonid;
    button.classList.add("deckButton");
    buttonsContainer.appendChild(button);
  });
  disabler();
  document.getElementById("bigHit").addEventListener("click", hitEnemy);
  document.getElementById("bigBite").addEventListener("click", hitEnemy);
  document.getElementById("bigKick").addEventListener("click", hitEnemy);
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
    updateScreen('combatlog', "The Knight intends to hit you");
  }
}

class Mage extends Enemy {
  attackPlayer() {
    if (this.health >= 0)
    {
    player.health -= this.enemyAttack;
    player.maxIntelligence -= this.enemyAttack;
    updateScreen('playerHealth', player.health);
    updateScreen('playerInt', player.maxIntelligence);
    }
  }
  displayIntent() {
    updateScreen('combatlog', "The Knight intends to hit you");
  }
}

class Rogue extends Enemy {
  attackPlayer() {
    if (this.health >= 0)
    {
    player.health -= this.enemyAttack;
    player.maxStrength -= 1;
    updateScreen('playerHealth', player.health);
    updateScreen('playerInt', player.maxStrength);
  }
}
  displayIntent() {
    updateScreen('combatlog', "The Knight intends to hit you");

  }
}

function updateScreen(id, target){
  document.getElementById(id).innerHTML = target;
}

function howToPlay(){
  alert("Welcome! Click a class, click a room, and start clicking!\r\nEvery time you end your turn the foe will go if you haven't defeated it.\r\nStats matter! And so do the buttons you can collect.");
}

function classCrusher() {
  player = new Hero("D", "Crusher", 30, 3, 3, 3, 3, 3, 3);
   updateScreen('playerName',player.name);
   updateScreen('playerClass',player.className);
   updateScreen('playerHealth',player.health);
   updateScreen('playerAgi',player.maxAgility);
   updateScreen('playerInt',player.maxIntelligence);
   updateScreen('playerStr',player.maxStrength);
   createDeck();
   createRooms();
   showRooms();
}

function classCatalyst() {
  player = new Hero("D", "Crusher", 30, 3, 3, 3, 3, 3, 3);
   updateScreen('playerName',player.name);
   updateScreen('playerClass',player.className);
   updateScreen('playerHealth',player.health);
   updateScreen('playerAgi',player.maxAgility);
   updateScreen('playerInt',player.maxIntelligence);
   updateScreen('playerStr',player.maxStrength);
}

function classCretin() {
  player = new Hero("D", "Crusher", 30, 3, 3, 3, 3, 3, 3);
   updateScreen('playerName',player.name);
   updateScreen('playerClass',player.className);
   updateScreen('playerHealth',player.health);
   updateScreen('playerAgi',player.maxAgility);
   updateScreen('playerInt',player.maxIntelligence);
   updateScreen('playerStr',player.maxStrength);
}

/*function checkBoss() {
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
  }*/



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
  if (completedRooms >= 5)
  {
    let enemies = [
      new Knight("Mega Knight", 10, 5),
      new Mage("Mega Mage", 5, 50),
      new Rogue("Mega Big Boy", 15, 25)
    ];
    fightingBoss = true;
    currentEnemy = enemies[Math.floor(Math.random() * enemies.length)];
  }
  else {
  let enemies = [
    new Knight("Knight", 10, 5),
    new Mage("Mage", 5, 10),
    new Rogue("Rogue", 15, 10)
  ];
  currentEnemy = enemies[Math.floor(Math.random() * enemies.length)];
  }

updateScreen('enemyName',currentEnemy.name);
updateScreen('enemyHealth',currentEnemy.health);
updateScreen('enemyAttack',currentEnemy.enemyAttack);
currentEnemy.displayIntent();
}




function deckCheck(){
  if (Deck.length <= 4)
  {

  }
}

function enabler(){
  var enabler = document.getElementsByClassName("deckButton");
  for (var i = 0; i < enabler.length; i++) {
    enabler[i].disabled = false;
  }
}

function disabler(){
  var disabler = document.getElementsByClassName("deckButton");
  for (var i = 0; i < disabler.length; i++) {
    disabler[i].disabled = true;
  }
}

function turnTimerStart(){
document.getElementById("startTurnButton").disabled = true;
var turnLeft = player.maxIntelligence;
enabler();
var turnTimer = setInterval(function(){
  if(turnLeft <= 0){
    clearInterval(turnTimer);
    document.getElementById("turnClock").innerHTML = "Over";
    currentEnemy.attackPlayer();
    loseCondition();
    currentEnemy.displayIntent();
    disabler();
    document.getElementById("startTurnButton").disabled = false;
  } else {
    document.getElementById("turnClock").innerHTML = turnLeft + " seconds";
  }
  turnLeft -= 1;
  if(currentEnemy.health <= 0){
    turnLeft -= 100;;
  }
}, 1000);


}


function hitEnemy(){
  currentEnemy.health -= player.maxStrength * 100;
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
    disabler();
    completedRooms++;
    updateScreen('enemyName', " None");
    updateScreen('enemyHealth', " None");
    updateScreen('enemyAttack', " None");
    //$( ".enemyStatsDisplay" ).hide();
    showRewards();
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

function roomSelected(){
  $("#roomSelection").hide();
  $("#startTurnButtonDisplay").show();
  $("#enemyStatsDisplay").show();
}

function showRooms(){
    $("#log").hide();
    $("#roomSelection").show();
    $("#rewardsSection").hide();
    $("#startTurnButtonDisplay").hide();
    $("#log").hide();
}

function showRewards(){
  $("#log").hide();
  $("#rewardsSection").show();
  $("#startTurnButtonDisplay").hide();
}

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
