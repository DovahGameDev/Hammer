function executecmd() {
    "use strict"

    var input;
    var textWindow;

    input = document.getElementById("maininput").value;
    textWindow = document.getElementById("history").value+=input + "\n";

    return false;
}
