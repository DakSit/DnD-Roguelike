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

function classHide() {
  var x = document.getElementById("options");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function classSelection(classSelection){
  switch(classSelection) {
  case "crusher":
    classCrusher();
    break;
  case "catalyst":
    classCatalyst();
    break;
  default:
  classCretin();
    // code block
}
  showClass();
  classHide();
  displayStats();
}

function classCrusher() {
  player = new Hero("D", "crusher", 30, 1, 5, 5);
}

function classCatalyst() {
  player = new Hero("D", "crusher", 30, 1, 5, 5);
}

function classCretin() {
  player = new Hero("D", "crusher", 30, 1, 5, 5);
}

$(document).ready(function(){
$("#optionButton").click(function(){
  $("#characterStats").show();

});})

$(document).ready(function(){
$("#optionButton").click(function(){
  $("#options").hide();

});})
