var playerName = window.prompt("What is your robot's name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Ultron", "Arnim Zola", "MODOK"];
var enemyHealth = 100;
var enemyAttack = 12;

window.alert("Hello " + playerName + "!");

var fight = function(enemyName){
    window.alert("Welcome to Robot Gladiators, Fight!")
}

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose")

if (promptFight === "fight" || promptFight === "FIGHT") {
    enemyHealth = enemyHealth - playerAttack;
    window.alert(playerName + " attacked " + enemyName + " . ")
    console.log(
        playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining"
    );

    if (enemyHealth <= 0) {
        window.alert(enemyName + " Has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.")
    }

    window.alert(enemyName + " attacked " + playerName + " . ")
    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining "
    )

    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left ");
    }
    //if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit");
    
    //if yes (true) leave fight
    if (confirmSkip) {
        window.alert(playerName + "has decided to skip this fight, Goodbye!");
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
    }
    //if no (false), ask question again by running fight() again
    else {
        fight()
    }
}
