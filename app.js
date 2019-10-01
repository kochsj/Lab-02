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
newZealand = newZealand.toLowerCase();

if(newZealand.includes('yes')) {
  console.log(newZealand);
  console.log('Incorrect. I would love to visit but I was actually born in Montana.');
  alert('Incorrect. I would love to visit but I was actually born in Montana.');
} else if(newZealand.includes('no') && lovesCoffee.includes('yes')) {
  console.log(newZealand);
  console.log('Correct Again!!! It is a dream of mine to visit New Zealand someday. I was actually born in Montana.');
  alert('Correct Again!!! It is a dream of mine to visit New Zealand someday. I was actually born in Montana.');
} else if(newZealand.includes('no')) {
  console.log(newZealand);
  console.log('Correct! It is a dream of mine to visit New Zealand someday. I was actually born in Montana.');
  alert('Correct! It is a dream of mine to visit New Zealand someday. I was actually born in Montana.');
} else {
  console.log(newZealand);
  console.log('Huh?');
  alert('Huh?');
}

