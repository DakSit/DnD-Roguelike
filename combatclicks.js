//var currentEnemy;
var clicks = 0;
var completedRooms = 0;
var fightingBoss = false;
const deck = [];
var entireCardList = [];

class Hero {
    constructor(name, className, health, playerShield, maxAgility, maxIntelligence, maxStrength, currentAgility, currentIntelligence, currentStrength) {
        this.name = name;
        this.className = className;
        this.health = health;
        this.playerShield = playerShield;
        this.maxAgility = maxAgility;
        this.maxIntelligence = maxIntelligence;
        this.maxStrength = maxStrength;
        this.currentAgility = currentAgility;
        this.currentStrength = currentStrength;
        this.currentIntelligence = currentIntelligence;
    }

}

function createEntireCardList(){
   entireCardList = [{
      text: 'Click Cudgel',
      titleContent: 'Deal 1 damage + ' + getStrength()/3,
      buttonid: 'clickCudgel',
      numberid: 0
    },
    {
      text: 'Click CrossGuard',
      titleContent: 'Gain 1 shield',
      buttonid: 'clickCrossGuard',
      numberid: 1
    },
    {
      text: 'Heavy Wallop',
      titleContent: 'Deal 2 damage + ' + getStrength()/2,
      buttonid: 'heavyWallop',
      numberid: 2
    },
    {
      text: 'Auto-Turret',
      titleContent: 'Deal 1 damage every second for the rest of the turn',
      buttonid: 'autoTurret',
      numberid: 3
    },
    {
      text: 'Pocket Sand',
      titleContent: 'Deal 1 damage',
      buttonid: 'pocketSand',
      numberid: 4
    }
  ];
}

function getStrength(){
  let  playerMax = player.currentStrength;
  return playerMax;
}

function resetStats(){
  player.currentStrength = player.maxStrength;
  player.currentAgility = player.maxAgility;
  player.currentIntelligence = player.maxIntelligence;
}

function clickClickButton(){
  clicks++;
  updateScreen("clickCounter", clicks);
}

function showRooms(){
  $("#rewardsSection").hide();
  $("#roomSection").show();
  const statRewards = [
  {
    text: 'Strength/Intelligence Increase',
    titleContent: 'Increase strength by 2, intelligence by 1',
    buttonid: 'strengthincrease'
},
  {
    text: 'Strength/Intelligence Increase',
    titleContent: 'Increase strength by 2, intelligence by 1',
    buttonid: 'agilityincrease'
  },
  {
    text: 'Strength/Intelligence Increase',
    titleContent: 'Increase strength by 2, intelligence by 1',
    buttonid: 'intelligenceincrease'
  }]

  const buttonRewards = [
  {
      text: 'Toughtrucksdontfuck',
      titleContent: 'Increase strength by 2, intelligence by 1',
      buttonid: 'bigbus'
    },
  {
  text: 'Hey kid, Im a computer',
  titleContent: 'Increase strength by 2, intelligence by 1',
  buttonid: 'bigcar'
},
  {
  text: 'Imabigbutton',
  titleContent: 'Increase strength by 2, intelligence by 1',
  buttonid: 'bigtruck'
}]

  const optionRewards = [
  {
    text: 'Big SPooky Curse',
    titleContent: 'Increase strength by 2, intelligence by 1',
    buttonid: 'bigbuttons'
  },
  {
    text: 'Pantspajamasandmen',
    titleContent: 'Increase strength by 2, intelligence by 1',
    buttonid: 'smallbuttons'
  },
  {
  text: 'Lookoutworld',
  titleContent: 'Increase strength by 2, intelligence by 1',
  buttonid: 'mediumbuttons'
  }]

  populateRooms(statRewards);
  populateRooms(buttonRewards);
  populateRooms(optionRewards);

function populateRooms(roomOptions){
  const roomsContainer = document.getElementById('roomSelection');
  let arrayLength = roomOptions.length;
  /*for (let i = 0; i<arrayLength; i++){
    if (roomOptions.length > 1)
    {
      roomOptions.splice(Math.floor(Math.random() * roomOptions.length),1);
    }
  }*/
  const buttonData = roomOptions[Math.floor(Math.random() * roomOptions.length)];
  const button = document.createElement('button');
        //$( "p" ).last().addClass( "selected" );
      button.textContent = buttonData.text;
      button.title = buttonData.titleContent;
      button.id = buttonData.buttonid;
      button.classList.add("roomButton");
      roomsContainer.appendChild(button);
      //document.getElementById(button.id).addEventListener("click", ($("#rewardButton").on( "click", function(){roomButtonActions("bigbuttons")})));
      document.getElementById(button.id).addEventListener("click", workOncePlease);
      document.getElementById("rewardButton").addEventListener("click", showRooms);
      document.getElementById("rewardButton").addEventListener("click", resetRewards);
      document.getElementById(button.id).addEventListener("click", beginCombat);
      document.getElementById(button.id).addEventListener("click", clearRooms);

      function workOncePlease(){
        console.log(button.id);
        //$('#rewardButton').on( "click", roomButtonActions(button.id));
        $('#rewardButton').on("click", sayAlert);
      }
      function sayAlert(){
        roomButtonActions(button.id);
        $('#rewardButton').off();
      }
  }




  function clearRooms(){
    classRemoval("roomButton", ".roomButton");
  }

}


function resetRewards(){
//  $("#rewardButton").off();
}

function displayDeck(){
const buttonsContainer = document.getElementById('deckButtons');

deck.forEach(buttonData => {
  const button = document.createElement('button');
  //$( "p" ).last().addClass( "selected" );
  button.textContent = buttonData.text;
  button.title = buttonData.titleContent;
  button.id = buttonData.buttonid;
  button.classList.add("deckButton");
  buttonsContainer.appendChild(button);
    //buttonAction(button.id);
  var buttonfunction = button.id;
    document.getElementById(button.id).addEventListener("click", function(){deckButtonActions(button.id)});
});
disabler();
}

function classRemoval(classRemoved, classRemovedjQuery){
  var remover = document.getElementsByClassName(classRemoved);
    $(classRemovedjQuery).remove();
  var remover = document.getElementsByClassName(classRemoved);
  }

function arrayRemoval(arrayRemoved, classRemoved){
  var remover = document.getElementsByClassName(classRemoved);
    for (let i = 0; i < classRemoved; i++) {
  //$(classRemoved).remove();
  //i.parentNode.removeChild(i);
  //remover[i].remove();
  }

  let removedArray = arrayRemoved.length;
    for (let i = 0; i < removedArray; i++) {
  arrayRemoved.pop();
    }

}

function roomButtonActions(buttonid){
  switch (buttonid) {
    case "strengthincrease":
    player.maxStrength += 5;
    updatePlayer();
    break;
    case "agilityincrease":
    addButton(4);
    classRemoval("deckButton", ".deckButton");
    displayDeck();
    break;
    case "intelligenceinrease":
    player.maxIntelligence += 5;
    break;
    case "bigtruck":
    addButton(2)
    classRemoval("deckButton", ".deckButton");
    displayDeck();
    break;
    case "bigcar":
    addButton(3)
    classRemoval("deckButton", ".deckButton");
    displayDeck();
    break;
    case "bigbus":
    addButton(1)
    classRemoval("deckButton", ".deckButton");
    displayDeck();
    break;
    case "bigbuttons":
    alert("Fuck you");
    break;
    case "mediumbuttons":
    alert("Fuck me");
    break;
    case "smallbuttons":
    alert("smol");
    break;
  }

}

function deckButtonActions(buttonid){
  switch (buttonid) {
    case "clickCudgel":
    //bigHitValue = typeof(bigHitValue) == 'undefined' ? 0 : bigHitValue;
    if(clicks >= 5)
    {
    currentEnemy.health -= (1 + (player.currentStrength/3));
    hitEnemy();
    updateClicks(5);
    }
    break;
    case "clickCrossGuard":
    if(clicks > 3)
    {
      player.playerShield += 1;
    }
    break;
    case "heavyWallop":
    if(clicks >= 5)
    {
    currentEnemy.health -= (2 + (player.currentStrength/2));
    hitEnemy();
    updateClicks(5);
    document.getElementById("heavyWallop").disabled = true;
    }
    break;
    case "bigTruck":
    currentEnemy.health -= 999;
    hitEnemy();
        break;

  }


}

function updateClicks(numberReduced){
  clicks -= numberReduced;
  updateScreen("clickCounter", clicks);
}

function buttonAction(buttonid){
  //var button =  document.getElementById(buttonid);
  document.getElementById(buttonid).addEventListener("click", buttonid);
}

function addButton(buttonAdded){
    deck.push(entireCardList[buttonAdded]);
  //entireCardList.splice(buttonAdded, 1);
  }



function updateScreen(id, target){
  document.getElementById(id).innerHTML = target;
}

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
  updateScreen('playerShield', player.playerShield);
}

function classCrusher() {
  var heroName = prompt("Enter your name!");
  player = new Hero(heroName, "Crusher", 10, 0, 0, 0, 0, 0, 0, 0);
   updatePlayer();
   createEntireCardList();
   addButton(0);
   addButton(1);
   addButton(2);
   displayDeck();
   showRooms();
   $("#roomSection").show();
}

function classCatalyst() {
  var heroName = prompt("Enter your name!");
  player = new Hero(heroName, "Catalyst", 10, 0, 0, 0, 0, 0, 0, 0);
   updatePlayer();
   addButton(0);
   addButton(1);
   addButton(3);
   displayDeck();
   showRooms();
   $("#roomSection").show();
}

function classCretin() {
  var heroName = prompt("Enter your name!");
  player = new Hero(heroName, "Cretin", 10, 0, 0, 0, 0, 0, 0, 0);
   updatePlayer();
   addButton(1);
   addButton(2);
   addButton(4);
   displayDeck();
   showRooms();
   $("#roomSection").show();
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
}

function beginCombat(){
  if (completedRooms >= 5)
  {
    let enemies = [
      //new Knight("Mega Knight", 10, 5),
      new Mage("Mega Mage", 5, 50),
      //new Rogue("Mega Big Boy", 15, 25)
    ];
    fightingBoss = true;
    currentEnemy = enemies[Math.floor(Math.random() * enemies.length)];
  }
  else {
  let enemies = [
    //new Knight("Knight", 10, 5),
    new Mage("Mage", 5, 1),
    //new Rogue("Rogue", 15, 10)
  ];
  currentEnemy = enemies[Math.floor(Math.random() * enemies.length)];
  }
$("#log").show();
updateEnemy();
enemyEntry(currentEnemy.name);
currentEnemy.displayIntent();
$("#startCombatButtonDisplay").show();
$("#roomSection").hide();
document.getElementById("startCombatButton").disabled = false;
}

function enemyEntry(enemyName){
  switch (enemyName) {
    case "Mage":
    break;
}
}

function enemyExit(enemyName){
  switch (enemyName) {
    case "Mage":
    break;
}
}

function updateEnemy(){
  if (currentEnemy.health < 0)
  {
    updateScreen('enemyName'," none");
    updateScreen('enemyHealth'," none");
    updateScreen('enemyAttack'," none");
  }
  else
  {
  updateScreen('enemyName',currentEnemy.name);
  updateScreen('enemyHealth',currentEnemy.health);
  updateScreen('enemyAttack',currentEnemy.enemyAttack);
  }
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
  document.getElementById("clickButton").disabled = false;
}

function disabler(){
  var disabler = document.getElementsByClassName("deckButton");
  for (var i = 0; i < disabler.length; i++) {
    disabler[i].disabled = true;
  }
  document.getElementById("clickButton").disabled = true;
}

function combatTimerStart(){
document.getElementById("startCombatButton").disabled = true;
enabler();
var turnLeft = player.maxIntelligence + 5;
var turnTimer = setInterval(function(){
  if (turnLeft <= 0){
    clearInterval(turnTimer);
    currentEnemy.attackPlayer();
    currentEnemy.displayIntent();
    loseCondition();
    clicks = 0;
    updateClicks(0);
    //removeAllValues();
    if (currentEnemy.health >= 0)
    {
      combatTimerStart();
    }

    //document.getElementById("startCombatButton").disabled = false;
  } else {
    document.getElementById("turnClock").innerHTML = Math.ceil(turnLeft) + " seconds";
  }
  if (currentEnemy.health <= 0)
  {
    turnLeft -= 100;
    document.getElementById("turnClock").innerHTML = "Not Started";
  }
  turnLeft -= 0.10;
}, 100);
}

function hitEnemy(){
  updateEnemy();
  endCombatCheck();
}

function endCombatCheck(){
  if (currentEnemy.health <= 0)
  {
    disabler();
    completedRooms++;
    updateEnemy();
    //$( ".enemyStatsDisplay" ).hide();
    showRewards();
    enemyExit(currentEnemy.name);
    classRemoval("deckButton", ".deckButton");
    displayDeck();
    player.playerShield = 0;
    clickCounter = 0;
    resetStats();
    updatePlayer();
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
    var disabler = document.getElementsByClassName("startCombatButton");
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
  $("#startCombatButtonDisplay").show();
  $("#enemyStatsDisplay").show();
}

function showRewards(){
  $("#log").hide();
  $("#rewardsSection").show();
  $("#startCombatButtonDisplay").hide();
}

class Enemy {
  constructor(name, health, enemyAttack){
    this.name = name;
    this.health = health;
    this.enemyAttack = enemyAttack;
    }

    damagePlayer() {
      let damage = this.enemyAttack;
      let currentShield = player.playerShield;
      if (player.playerShield > 0)
      {
      player.playerShield -= this.enemyAttack;//damage;
      damage -= currentShield;
      }
      if (damage >= 0){
        player.health -= damage;//damage;
      }
      else
      {

      }
      updatePlayer();
    }

    attackPlayer() {
      //damagePlayer();
      //updatePlayer();
    }

    displayIntent() {
      updateScreen('combatlog', "The Knight intends to hit you");
    }
}

class Knight extends Enemy {
  attackPlayer() {
    if (this.health > 0)
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
    if (this.health > 0)
    {
    if (player.maxIntelligence >= 6)
    {
    super.damagePlayer();
    }
    else
    {
    super.damagePlayer();
    super.damagePlayer();
    updatePlayer();
    }
    }
  }
  displayIntent() {
    updateScreen('combatlog', "The Knight intends to hit you");
  }
}

class Rogue extends Enemy {
  attackPlayer() {
    if (this.health > 0)
    {
      if(player.maxStrength > 9)
      {
    player.health -= this.enemyAttack;
    player.maxStrength -= 4;
    updatePlayer();
      }
      else {
        player.health -= this.enemyAttack * 2;
        updatePlayer();
      }
  }
}
  displayIntent() {
    updateScreen('combatlog', "The Knight intends to hit you");

  }
}
