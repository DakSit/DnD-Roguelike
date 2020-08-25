//var currentEnemy;

var completedRooms = 0;
var fightingBoss = false;
const deck = [];
const entireCardList = [{
    text: 'Big Hit',
    titleContent: 'Deal 999 damage',
    buttonid: 'bigHit',
    numberid: 0
  },
  {
    text: 'Big Kick',
    titleContent: 'Deal 999 damage',
    buttonid: 'bigKick',
    numberid: 1
  },
  {
    text: 'Big Bite',
    titleContent: 'Deal 999 damage',
    buttonid: 'bigBite',
    numberid: 2
  },
  {
    text: 'Big Thunder',
    titleContent: 'Deal 1 damage',
    buttonid: 'bigThunder',
    numberid: 3
  },
  {
    text: 'BEEP BEEP IM A BUS',
    titleContent: 'Deal 99999999 damage',
    buttonid: 'bigTruck',
    numberid: 4
  }
];

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
    case "bigHit":
    currentEnemy.health -= player.maxStrength * 10;
    hitEnemy();
    break;
    case "bigThunder":
    currentEnemy.health -= 1;
    hitEnemy();
    break;
    case "bigBite":
    currentEnemy.enemyAttack -= 10;
    break;
    case "bigTruck":
    currentEnemy.health -= 999;
    hitEnemy();
        break;

  }

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
}

function classCrusher() {
  player = new Hero("D", "Crusher", 40000, 10, 10, 10, 10, 10, 10);
   updatePlayer();
   addButton(0);
   displayDeck();
   showRooms();
   $("#roomSection").show();
}

function classCatalyst() {
  player = new Hero("D", "Crusher", 30, 3, 10, 3, 3, 3, 3);
   updatePlayer();
   addButton(2);
   displayDeck();
   showRooms();
   $("#roomSection").show();
}

function classCretin() {
  player = new Hero("D", "Crusher", 30, 3, 15, 3, 3, 3, 3);
   updatePlayer();
   addButton(1);
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

updateEnemy();
currentEnemy.displayIntent();
$("#startCombatButtonDisplay").show();
$("#roomSection").hide();
document.getElementById("startCombatButton").disabled = false;
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
}

function disabler(){
  var disabler = document.getElementsByClassName("deckButton");
  for (var i = 0; i < disabler.length; i++) {
    disabler[i].disabled = true;
  }
}

function combatTimerStart(){
document.getElementById("startCombatButton").disabled = true;
enabler();
var turnLeft = player.maxIntelligence;
var turnTimer = setInterval(function(){
  if (turnLeft <= 0){
    clearInterval(turnTimer);
    currentEnemy.attackPlayer();
    currentEnemy.displayIntent();
    loseCondition();
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
    if (player.maxIntelligence >= 6)
    {
    player.health -= this.enemyAttack;
    player.maxIntelligence -= 4;
    updatePlayer();
    }
    else
    {
    player.health -= this.enemyAttack * 2;
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
    if (this.health >= 0)
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
