function move(item, length) {
  var elem = document.getElementById(item);   
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= length) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
move('myBar', 90);
move('myBar2', 90);
move('myBar3', 50);
move('myBar4', 60);
move('myBar5', 50);
move('myBar6', 50);
move('myBar7', 40);