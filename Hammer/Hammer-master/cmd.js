
//the purpose of this function is to receive the user entered commands
function executecmd() {
    "use strict";
    //variables
    var input;
    var textWindow;
    //get value from form
    input = document.getElementById("maininput").value;
    //replace any html elements with blank, doesn't work entirely yet
    input = input.replace(/<(.|\n)*?>/g, '');
    //get textwindow div element
    textWindow = document.getElementById("history");
    //add user typed value into the text window and output a line break
    textWindow.innerHTML += input + "<br />";
    //clear the form value
    document.getElementById("maininput").value="";
    //scroll to the most recently typed command
    textWindow.scrollTop = textWindow.scrollHeight;
    //don't reload the page
    return false;
}
function startGame() {
    "use strict";

    var newgame;
    var enterName;
    //get newgame button
    newgame = document.getElementById("startmenu");
    //hide newgame button
    newgame.hidden = true;
    //get form for entering character name
    enterName = document.getElementById("entername");
    //reveal form for character name
    enterName.hidden = false;

}
function createPlayer() {
    "use strict";
    //create array and variables
    const BASESTAT = 12;

    var playerStats;
    var playerName;
    var hp;
    var strength;
    var dexterity;
    var intelligence
    var agility;
    var modifier;
    var index;

    //get player name
    playerName = "Matt";
    //set hp stat
    modifier = Math.floor((Math.random() * 4) + 1);
    hp = BASESTAT + modifier;
    //set strength stat
    modifier = Math.floor((Math.random() * 4) + 1);
    strength = BASESTAT + modifier;
    //set dexterity stat
    modifier = Math.floor((Math.random() * 4) + 1);
    dexterity = BASESTAT + modifier;
    //set intelligence stat
    modifier = Math.floor((Math.random() * 4) + 1);
    intelligence = BASESTAT + modifier;
    //set agility stat
    modifier = Math.floor((Math.random() * 4) + 1);
    agility = BASESTAT + modifier;

    playerStats = new Player(playerName, hp, hp, strength, dexterity, intelligence, agility);

    return playerStats;
    window.document.location = '?newGame=' + name;
}
function displayPlayerStats() {
    "use strict";
    var playerStats = createPlayer();
    var textWindow;

    playerStats.playerName = document.location.search.replace(/^.*?\=/,'');
    textWindow = document.getElementById("history");
    textWindow.innerHTML += playerStats.playerName + playerStats.playerMaxHealth;

}
// Store
//localStorage.setItem("lastname", "Smith");
// Retrieve
//document.getElementById("result").innerHTML = localStorage.getItem("lastname");
