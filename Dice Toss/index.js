function image(){
  var a = [
           "images/dice1.png",
           "images/dice2.png",
           "images/dice3.png",
           "images/dice4.png",
           "images/dice5.png",
           "images/dice6.png"
         ];
  var p1 = Math.random();
  var p2 = Math.random();
  p1 = Math.floor(p1*6);
  p2 = Math.floor(p2*6);

  var winner = document.getElementsByTagName("h1")[0];
  if (p1 === p2) {
    image();
  }else if (p1>p2) {
    winner.textContent = "Player 1 won";
  }else{
    winner.textContent = "Player 2 won";
  }
  document.getElementById("i1").src = a[p1];
  document.getElementById("i2").src = a[p2];
}

image();
