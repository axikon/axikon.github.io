document.onkeydown = keydown;
function keydown() {
    var target = document.getElementById("cell");
    var num = event.keyCode - 48
    if (0<= num && num <= 9) {
      target.innerHTML = num;
    }
}
