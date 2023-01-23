var player1 =window.prompt("enter player 1 name");
var player2 =window.prompt("enter player 2 name");
document.getElementById("prom1").innerHTML= player1;
document.getElementById("prom2").innerHTML= player2;
document.getElementById("btn2").addEventListener("click",function roll() {
  
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images" + randomDiceImage; //images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images" + randomNumber2 + ".png";
document.querySelectorAll("img")[1]
.setAttribute("src", randomImageSource2);
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩" + player1 +"Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = player2 +" Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "roll again";
}
});
document.getElementById("btn1").addEventListener("click",function roll() {
  
  var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6
  
  var randomDiceImage = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png
  
  var randomImageSource = "images" + randomDiceImage; //images/dice1.png - images/dice6.png
  
  var image2 = document.querySelectorAll("img")[0];
  
  image2.setAttribute("src", randomImageSource);
  
  
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  
  var randomImageSource2 = "images" + randomNumber2 + ".png";
  
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
  
  
  //If player 1 wins
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 "+ player1 + " Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🚩"+player2 +"Wins! ";
  }
  else {
    document.querySelector("h1").innerHTML = "roll again!";
  }
  });
