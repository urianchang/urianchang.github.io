//: Add/Remove "responsive" class to navbar
function showMenu() {
    var x = document.getElementById("nav");
    // console.log(x.className);
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}
