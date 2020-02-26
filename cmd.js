function executecmd() {
    "use strict"

    var textarea;
    var input;

    textarea = document.getElementById("history");
    input = document.getElementById("maininput");

    textarea.setAttribute("value", input);

    return false;
}
