'use strict';

alert('Hello and Welcome! Let\'s play a game! My name is Stephen and I have a few yes or no questions for you... about me! Take you\'re best guess!');

var lovesCoffee = prompt('Do I like coffee?');
lovesCoffee = lovesCoffee.toLowerCase();

if(lovesCoffee.includes('yes')) {
  console.log(lovesCoffee);
  console.log('I love coffee! CoffeeCoffeeCoffee!');
  alert('Correct! I love coffee! CoffeeCoffeeCoffee!');
} else if(lovesCoffee.includes('no')){
  console.log(lovesCoffee);
  console.log('I could not survive without it!');
  alert('I don\'t like coffee... I LOVE it! I don\'t think I could survive without it!');
} else {
  console.log(lovesCoffee);
  console.log('Huh?');
  alert('Huh?');
}

var newZealand = prompt('Was I born in New Zealand?');
