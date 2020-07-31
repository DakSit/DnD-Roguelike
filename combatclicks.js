class Hero {
    constructor(name, className, health, level, clicksperturn, turnlimit) {
        this.name = name;
        this.className = className;
        this.health = health;
        this.level = level;
        this.clicksperturn = clicksperturn;
        this.turnlimit = turnlimit;
    }
}

function howToPlay(){
  alert("Welcome! Click a class, click a room, and start clicking!");
}

function classCrusher() {
  player = new Hero("D", "Crusher", 30, 1, 5, 5);
   document.getElementById('playerName').innerHTML = player.name;
   document.getElementById('playerClass').innerHTML = player.className;
   document.getElementById('playerHealth').innerHTML = player.health;
   document.getElementById('playerLevel').innerHTML = player.level;
   document.getElementById('playercpt').innerHTML = player.clicksperturn;
   document.getElementById('playertl').innerHTML = player.turnlimit;
}

function classCatalyst() {
  player = new Hero("D", "Catalyst", 30, 1, 5, 5);
  document.getElementById('playerName').innerHTML = player.name;
  document.getElementById('playerClass').innerHTML = player.className;
  document.getElementById('playerHealth').innerHTML = player.health;
  document.getElementById('playerLevel').innerHTML = player.level;
  document.getElementById('playercpt').innerHTML = player.clicksperturn;
  document.getElementById('playertl').innerHTML = player.turnlimit;
}

function classCretin() {
  player = new Hero("D", "Cretin", 30, 1, 5, 5);
  document.getElementById('playerName').innerHTML = player.name;
  document.getElementById('playerClass').innerHTML = player.className;
  document.getElementById('playerHealth').innerHTML = player.health;
  document.getElementById('playerLevel').innerHTML = player.level;
  document.getElementById('playercpt').innerHTML = player.clicksperturn;
  document.getElementById('playertl').innerHTML = player.turnlimit;
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


$(document).ready(function(){
$(".optionButton").click(function(){
  $("#characterStats").show();

});})

$(document).ready(function(){
$(".optionButton").click(function(){
  $("#options").hide();

});})

//document.getElementById("playerHealth").innerHTML =  player.health;
