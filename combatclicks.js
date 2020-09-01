//var currentEnemy;
var clicks = 0;
var baseShield = 0;
var completedRooms = 0;
var fightingBoss = false;
const deck = [];
var entireCardList = [];

class Hero {
    constructor(name, className, maxHealth, currentHealth, playerShield, maxAgility, maxIntelligence, maxStrength, currentAgility, currentIntelligence, currentStrength) {
        this.name = name;
        this.className = className;
        this.maxHealth = maxHealth;
        this.currentHealth = currentHealth;
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
     titleContent: 'Deal ' + (player.currentStrength + 1) + ' damage' + '\r\nClick Cost: 2',
     buttonid: 'clickCudgel',
     numberid: 0
   },
   {
     text: 'Click CrossGuard',
     titleContent: 'Gain 1 shield' + '\r\nClick Cost: 2',
     buttonid: 'clickCrossGuard',
     numberid: 1
   },
   {
     text: 'Heavy Wallop',
     titleContent: 'Deal ' + ((player.currentStrength * 2) + 2) + ' damage' + '\r\nClick Cost: 2' + '\r\nOnce Per Turn',
     buttonid: 'heavyWallop',
     numberid: 2
   },
   {
     text: 'Auto Turret',
     titleContent: 'Deal 1 damage every second for a turn\'s worth of time' + '\r\nClick Cost: 3',
     buttonid: 'autoTurret',
     numberid: 3
   },
   {
     text: 'Pocket Sand',
     titleContent: 'Deal 1 damage'+ '\r\nClick Cost: 1',
     buttonid: 'pocketSand',
     numberid: 4
   },
   {
     text: 'Gift Package',
     titleContent: 'Gain clicks equal to your intelligence'+ '\r\nOnce Per Turn',
     buttonid: 'giftPackage',
     numberid: 5
   },
   {
     text: 'Flex Muscles',
     titleContent: 'Gain 1 strength for this fight'+ '\r\nClick Cost: 3',
     buttonid: 'flexMuscles',
     numberid: 6
   },
   {
     text: 'Flex Mind',
     titleContent: 'Gain 1 intelligence for this fight'+ '\r\nClick Cost: 3',
     buttonid: 'flexMind',
     numberid: 7
   },
   {
   text: 'Flex Momentum',
     titleContent: 'Gain 1 agility for this fight'+ '\r\nClick Cost: 3',
     buttonid: 'flexMomentum',
     numberid: 8
   },
   {
     text: 'Adrenaline Rush',
     titleContent: 'Double your strength for a turn\'s worth' + '\r\nClick Cost: 3' + '\r\nOnce Per Turn',
     buttonid: 'adrenalineRush',
     numberid: 9
   },
   {
     text: 'Massive Mallet',
     titleContent: 'Deal ' + ((player.currentStrength * 3) + 3) + ' damage' + '\r\nClick Cost: 10' + '\r\nOnce Per Turn',
     buttonid: 'massiveMallet',
     numberid: 10
   },
   {
     text: 'Good Boy Shield',
     titleContent: 'Gain 3 shield' + '\r\nClick Cost: 1' + '\r\nOnce Per Turn',
     buttonid: 'goodBoyShield',
     numberid: 11
   },
   {
     text: 'Good Boy Sword',
     titleContent: 'Deal ' + ((player.currentStrength * 2) + 2) + '\r\nClick Cost: 1' + '\r\nOnce Per Turn',
     buttonid: 'goodBoyShield',
     numberid: 11
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
  updatePlayer();
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
    text: 'Strength Increase',
    titleContent: 'Increase strength by 2',
    buttonid: 'strengthIncrease'
  },
  {
    text: 'Intelligence Increase',
    titleContent: 'Increase intelligence by 2',
    buttonid: 'intelligenceIncrease'
  },
  {
    text: 'Agility Increase',
    titleContent: 'Increase Agility by 2',
    buttonid: 'agilityIncrease'
  },
  {
    text: 'Strength Intelligence Increase',
    titleContent: 'Increase intelligence and strength by 1',
    buttonid: 'strengthIntelligenceIncrease'
  },
  {
    text: 'Strength Agility Increase',
    titleContent: 'Increase agility and strength by 1',
    buttonid: 'strengthAgilityIncrease'
  },
  {
    text: 'Agility Intelligence Increase',
    titleContent: 'Increase agility and intelligence by 1',
    buttonid: 'agilityIntelligenceIncrease'
  },
  {
    text: 'Max HP Increase',
    titleContent: 'Increase max and current HP by 10',
    buttonid: 'maxHPIncrease'
  },
  {
    text: 'Max HP and Strength Increase',
    titleContent: 'Increase max and current HP by 5, and strength by 1',
    buttonid: 'strengthHPIncrease'
  },
  {
    text: 'Max HP and Agility Increase',
    titleContent: 'Increase max and current HP by 5, and agility by 1',
    buttonid: 'agilityHPIncrease'
  },
  {
    text: 'Max HP and Intelligence Increase',
    titleContent: 'Increase max and current HP by 5, and intelligence by 1',
    buttonid: 'intelligenceHPIncrease'
  },
  ]

  const buttonRewards = [
    {
      text: 'Gift Package Button',
      titleContent: 'Gain a button that gives you free clicks every turn',
      buttonid: 'giftPackage'
    },
    {
        text: 'Flex Muscle Button',
        titleContent: 'Gain a button that makes you stronger for the combat every time you click it',
        buttonid: 'flexMuscles'
      },
    {
          text: 'Flex Mind Button',
          titleContent: 'Gain a button that makes you smarter for the combat every time you click it',
          buttonid: 'flexMind'
      },
    {
          text: 'Flex Momentum Button',
          titleContent: 'Gain a button that makes you faster for the combat every time you click it',
          buttonid: 'flexMomentum'
      },
    {
          text: 'Adrenaline Rush Button',
          titleContent: 'Gain a button that doubles your strength for a turn time',
          buttonid: 'adrenalineRush'
    },
    {
            text: 'Good Boy Shield Button',
            titleContent: 'Gain a button that gives you a shield for very little cost',
            buttonid: 'goodBoyShield'
    },
    {
      text: 'Good Boy Sword Button',
      titleContent: 'Gain a button that does damage for very little cost',
      buttonid: 'goodBoySword'
    },
      {
        text: 'Massive Mallet Button',
        titleContent: 'Gain a button that does very high damage with strength at a massive cost of clicks',
        buttonid: 'massiveMallet'
      }
]

//Put third rewards option with a mixture of both that's evenly balanced

  populateRooms(buttonRewards);
  populateRooms(statRewards);
  //populateRooms(optionRewards);

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
      document.getElementById("rewardButton").addEventListener("click", resetStats);
      document.getElementById("rewardButton").addEventListener("click", updatePlayer);
      document.getElementById("rewardButton").addEventListener("click", resetRewards);
      document.getElementById(button.id).addEventListener("click", beginCombat);
      document.getElementById(button.id).addEventListener("click", clearRooms);

      function workOncePlease(){
        console.log(button.id);
        //$('#rewardButton').on( "click", roomButtonActions(button.id));
        $('#rewardButton').on("click", activateRoom);
      }
      function activateRoom(){
        roomButtonActions(button.id);
        $('#rewardButton').off();
      }
  }




  function clearRooms(){
    classRemoval("roomButton", ".roomButton");
  }

}


function resetRewards(){
  updatePlayer();
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
    case "strengthIncrease":
    player.maxStrength += 2;
    resetStats();
    break;
    case "agilityIncrease":
    player.maxAgility += 2;
    resetStats();
    break;
    case "intelligenceIncrease":
    player.maxIntelligence += 2;
    resetStats();
    break;
    case "strengthIntelligenceIncrease":
    player.maxIntelligence += 1;
    player.maxStrength += 1;
    resetStats();
    break;
    case "agilityIntelligenceIncrease":
    player.maxAgility++;
    player.maxIntelligence++;
    resetStats();
    break;
    case "strengthAgilityIncrease":
    player.maxStrength++;
    player.maxAgility++;
    resetStats();
    break;
    case "maxHPIncrease":
    player.maxHealth += 10;
    player.currentHealth += 10;
    resetStats();
    break;
    case "strengthHPIncrease":
    player.maxStrength++;
    player.maxHealth += 5;
    player.currentHealth += 5;
    resetStats();
    break;
    case "agilityHPIncrease":
    player.maxAgility += 1;
    player.maxHealth += 5;
    player.currentHealth += 5;
    resetStats();
    break;
    case "intelligenceHPIncrease":
    player.maxIntelligence++;
    player.maxHealth += 5;
    player.currentHealth += 5;
    resetStats();
    break;
    case "giftPackage":
    addButton(5)
    classRemoval("deckButton", ".deckButton");
    displayDeck();
    break;
    case "flexMuscles":
    addButton(6)
    classRemoval("deckButton", ".deckButton");
    displayDeck();
    break;
    case "flexMind":
    addButton(7)
    classRemoval("deckButton", ".deckButton");
    displayDeck();
    break;
    case "flexMomentum":
    addButton(8)
    classRemoval("deckButton", ".deckButton");
    displayDeck();
    break;
    case "adrenalineRush":
    addButton(9)
    classRemoval("deckButton", ".deckButton");
    displayDeck();
    break;
    case "massiveMallet":
    addButton(10)
    classRemoval("deckButton", ".deckButton");
    displayDeck();
    break;
    case "goodBoyShield":
    addButton(11)
    classRemoval("deckButton", ".deckButton");
    displayDeck();
    break;
    case "goodBoySword":
    addButton(12)
    classRemoval("deckButton", ".deckButton");
    displayDeck();
    break;
  }

}

function deckButtonActions(buttonid){
  switch (buttonid) {
    case "clickCudgel":
    if(clicks >= 2)
    {
    currentEnemy.health -= (999 + (player.currentStrength));
    hitEnemy();
    updateClicks(2);
    }
    break;
case "clickCrossGuard":
    if(clicks > 2)
    {
      player.playerShield += 1;
      updatePlayer();
      updateClicks(2);
    }
    break;
case "heavyWallop":
    if(clicks >= 2)
    {
    currentEnemy.health -= (2 + (player.currentStrength * 2));
    hitEnemy();
    updateClicks(2);
    document.getElementById("heavyWallop").disabled = true;
    }
    break;
case "autoTurret":
    if (clicks >= 5)
    {
      updateClicks(5);
      var turnLeft = player.currentIntelligence + 5;
      var turnTimer = setInterval(function(){
      if (turnLeft <= 0){
        clearInterval(turnTimer);
      }
      else {
        currentEnemy.health -= (1 + (player.currentStrength/4));

        hitEnemy();
        }
      turnLeft -= 1;
    }, 1000);
    }
    break;
case "pocketSand":
    if(clicks >= 1)
    {
    currentEnemy.health -= (1);
    hitEnemy();
    updateClicks(1);
    }
    break;
case "giftPackage":
    clicks += (2 + player.currentIntelligence);
    updateClicks(0);
    document.getElementById("giftPackage").disabled = true;
    break;
case "flexMuscles":
    if(clicks >= 3)
    {
    player.currentStrength += 1;
    updatePlayer();
    updateClicks(3);
    }
    break;
case "flexMind":
    if(clicks >= 3)
    {
    player.currentIntelligence += 1;
    updatePlayer();
    updateClicks(3);
    }
    break;
case "flexMomentum":
    if(clicks >= 3)
    {
    player.currentAgility += 1;
    updatePlayer();
    updateClicks(3);
    }
    break;
case "adrenalineRush":
    if(clicks >= 3)
    {
    var turnLeft = player.currentIntelligence + 5;
    player.currentStrength = (player.currentStrength * 2);
    document.getElementById("adrenalineRush").disabled = true;
    updatePlayer();
    var turnTimer = setInterval(function(){
    if (turnLeft <= 0){
        clearInterval(turnTimer);
        player.currentStrength = (player.currentStrength / 2);
        updatePlayer();
    }
    else {

    }
    turnLeft -= 1;
    }, 1000);
    }
    break;
case "goodBoySword":
    if (clicks >= 1)
    {
    currentEnemy.health -= (2 + (player.currentStrength * 2));
    hitEnemy();
    updateClicks(1);
    document.getElementById("goodBoySword").disabled = true;
    }
    break;
case "goodBoyShield":
    if(clicks >= 1)
    {
    player.playerShield += 3;
    updateClicks(1);
    updatePlayer();
    document.getElementById("goodBoyShield").disabled = true;
    }
    break;
case "massiveMallet":
  if(clicks >= 10)
  {
    currentEnemy.health -= (3 + (player.currentStrength * 3));
    hitEnemy();
    updateClicks(10);
  }
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
  alert("Welcome! Firstly, every button is hoverable for more info! Everything from your abilities to the classes themselves!\r\nThere are three stats:\r\nStrength - Dictates how hard you hit.\r\nAgility - Dictates how many clicks you get per turn.\r\nIntelligence - Dictates how long your turn is.\r\nFoes will keep hitting you until you defeat them! Good luck!");
}

function updatePlayer() {
  updateScreen('playerName',player.name);
  updateScreen('playerClass',player.className);
  updateScreen('playerHealth',player.currentHealth);
  updateScreen('playerAgi',player.currentAgility);
  updateScreen('playerInt',player.currentIntelligence);
  updateScreen('playerStr',player.currentStrength);
  updateScreen('playerShield', player.playerShield);
}

function classCrusher() {
  var heroName = prompt("Enter your name!");
  player = new Hero(heroName, "Crusher", 10,10, 0, 0, 0, 0, 0, 0, 0);
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
  player = new Hero(heroName, "Catalyst", 10, 10, 0, 0, 0, 0, 0, 0, 0);
   updatePlayer();
   createEntireCardList();
   addButton(0);
   addButton(1);
   addButton(3);
   displayDeck();
   showRooms();
   $("#roomSection").show();
}

function classCretin() {
  var heroName = prompt("Enter your name!");
  player = new Hero(heroName, "Cretin", 10, 10, 0, 0, 0, 0, 0, 0, 0);
   updatePlayer();
   createEntireCardList();
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
  if (completedRooms < 5)
  {
    let enemies = [
      new Knight("Knight", 8, 2),
      new Mage("Mage", 6, 2),
      new Rogue("Rogue", 6, 2)
    ];
    currentEnemy = enemies[Math.floor(Math.random() * enemies.length)];
  }
  else if (completedRooms > 5 && completedRooms < 10)
  {
    let enemies = [
      new Knight("Mega Knight", 16, 4),
      new Mage("Mega Mage", 12, 4),
      new Rogue("Mega Rogue", 12, 4)
    ];
    currentEnemy = enemies[Math.floor(Math.random() * enemies.length)];
  }
  else {
    let enemies = [
      new Knight("Super Knight", 32, 8),
      new Mage("Super Mage", 24, 6),
      new Rogue("Super Rogue", 24, 6)
    ];
    currentEnemy = enemies[Math.floor(Math.random() * enemies.length)];
    fightingBoss = true;
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
updatePlayer();
clicks += (5 + (player.currentAgility));
updateClicks(0);
document.getElementById("startCombatButton").disabled = true;
enabler();
var turnLeft = player.currentIntelligence + 5;
var turnTimer = setInterval(function(){
  if (turnLeft <= 0){
    clearInterval(turnTimer);
    currentEnemy.attackPlayer();
    currentEnemy.displayIntent();
    loseCondition();
    updateClicks(0);
    //removeAllValues();
    if (currentEnemy.health > 0)
    {
      combatTimerStart();
    }

    //document.getElementById("startCombatButton").disabled = false;
  } else {
    document.getElementById("turnClock").innerHTML = Math.ceil(turnLeft) + " seconds";
    updateScreen("clickCounter", Math.ceil(clicks));
  }
  if (currentEnemy.health <= 0)
  {
    turnLeft -= 100;
    document.getElementById("turnClock").innerHTML = "Not Started";
    clicks = 0;
  }
  turnLeft -= 1;
}, 1000);
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
    player.playerShield = baseShield;
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
  if (player.currentHealth <= 0)
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
        player.currentHealth -= damage;//damage;
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
    player.currentHealth -= this.enemyAttack;
    this.enemyAttack += this.enemyAttack;
    updateScreen('playerHealth', player.currentHealth);
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
    updateScreen('combatlog', "The Mage intends to hit you");
  }
}

class Rogue extends Enemy {
  attackPlayer() {
    if (this.health > 0)
    {
      if(player.maxStrength > 9)
      {
    player.currentHealth -= this.enemyAttack;
    player.maxStrength -= 4;
    updatePlayer();
      }
      else {
        player.currentHealth -= this.enemyAttack * 2;
        updatePlayer();
      }
  }
}
  displayIntent() {
    updateScreen('combatlog', "The Rogue intends to hit you");

  }
}
