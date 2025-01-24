function randomNumber(n){
    return Math.floor((Math.random()*n) + 1);
}
var randomNumber1 = randomNumber(6);
var randomNumber2 = randomNumber(6);

var dicee1 = document.querySelector('.img1');
var dicee2 = document.querySelector('.img2');

var header = document.querySelector('.container h1');

// set images paths for dice1 and dice 2 
var dicee1ImgPath = './images/dice' + randomNumber1 + '.png';
var dicee2ImgPath = './images/dice' + randomNumber2 + '.png';

// set img to dice1
dicee1.setAttribute('src', dicee1ImgPath);
// set img to dice2
dicee2.setAttribute('src', dicee2ImgPath);

// change text 
if(randomNumber1 > randomNumber2){
    header.textContent = '🚩 Player 1 Wins!';
}else if(randomNumber2 > randomNumber1){
    header.textContent = 'Player 2 Wins! 🚩';
}else{
    header.textContent = 'Draw!';
}