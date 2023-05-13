// var randomNumber1 = Math.floor(Math.random()*6)+1;
// var randomNumber2 = Math.floor(Math.random()*6)+1;

// var randomdicenumber = "dice" + randomNumber1 + ".png";
// var randomdicenumber2 = "dice" + randomNumber2 + ".png";

// var randomimage = "images/" + randomdicenumber ;
// var randomimage2 = "images/" + randomdicenumber2 ;

// var image1 = document.querySelectorAll("img")[0];
// var image2 = document.querySelectorAll("img")[1];

// image1.setAttribute("src",randomimage);
// image2.setAttribute("src",randomimage2);



var randomNumber1 = diceNumber();
var randomNumber2 = diceNumber();
 
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
 
winner();
 
function diceNumber() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}
 
function winner() {
    if (randomNumber1 > randomNumber2) {
        document.getElementsByTagName("h1")[0].textContent = "🚩 Player 1 wins!";
    } else if (randomNumber1 < randomNumber2) {
        document.getElementsByTagName("h1")[0].textContent = "Player 2 wins! 🚩";
    } else {
        document.getElementsByTagName("h1")[0].textContent = "Draw!";
    }
}