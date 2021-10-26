var id = null;
var id2 = null;
function myMove2() {
    var elem2 = document.getElementById("main");   
    var pos2 = 0;
    clearInterval(id2);
    id2 = setInterval(frame2, 10);
    function frame2() {
      if (pos2 == 600) {
        clearInterval(id2);
      } else {
        pos2++; 
        elem2.style.bottom = pos2 + 'px'; 
        elem2.style.right = pos2 + 'px'; 
      }
    }
  }
function myMove() {
  var elem = document.getElementById("main");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 300) {
        myMove2();
        //clearInterval(id);
        //myMove2();
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}
