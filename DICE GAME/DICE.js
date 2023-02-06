//alert("working!!");
var randomNumber1=Math.floor(Math.random()*(6))+1;  // max=6  min=1
//console.log(randomNumber1);

var randomDiceImage = "dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImage);


var randomNumber2=Math.floor(Math.random()*6)+1;

var randomDiceImage2="dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

// var image2=document.querySelectorAll("img")[0];
// image2.setAttribute("src",randomDiceImage2);

if(randomDiceImage2>randomDiceImage){
    document.querySelector("h1").innerHTML="player 2 wins";
}
else if(randomDiceImage2<randomDiceImage){
    document.querySelector("h1").innerHTML="plater 1 wins!!";
}
else{
    document.querySelector("h1").innerHTML="draw!!";
}
