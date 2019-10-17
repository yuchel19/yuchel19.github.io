/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var sublist_showing = false;

function showSublist() {
    if (sublist_showing) {
        document.getElementById("sublist").style.display = "none";
        document.getElementById("upCarrot").style.display = "inline";
        document.getElementById("downCarrot").style.display = "none";
    }
    else {
        document.getElementById("sublist").style.display = "block";
        document.getElementById("upCarrot").style.display = "none";
        document.getElementById("downCarrot").style.display = "inline";
    }
    sublist_showing = !sublist_showing;
}

