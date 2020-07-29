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
