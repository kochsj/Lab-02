'use strict';

alert('Hello and Welcome! Let\'s play a game! My name is Stephen and I have a few yes or no questions for you... about me! Take you\'re best guess!');

var lovesCoffee = prompt('Do I like coffee?');
lovesCoffee = lovesCoffee.toLowerCase();

if(lovesCoffee.includes('yes')) {
  console.log(lovesCoffee);
  //console.log('I love coffee! CoffeeCoffeeCoffee!');
  alert('Correct! I love coffee! CoffeeCoffeeCoffee!');
} else if(lovesCoffee.includes('no')){
  console.log(lovesCoffee);
  //console.log('I could not survive without it!');
  alert('I don\'t like coffee... I LOVE it! I don\'t think I could survive without it!');
} else {
  console.log(lovesCoffee);
  console.log('Invalid Answer');
  alert('Huh? That\'s not a yes or no answer...');
}

var newZealand = prompt('Was I born in New Zealand?');
newZealand = newZealand.toLowerCase();

if(newZealand.includes('yes')) {
  console.log(newZealand);
  //console.log('Incorrect. I would love to visit but I was actually born in Montana.');
  alert('Incorrect. I would love to visit but I was actually born in Montana.');
} else if(newZealand.includes('no') && lovesCoffee.includes('yes')) {
  console.log(newZealand);
  //console.log('Correct again! It is a dream of mine to visit New Zealand someday. I was actually born in Montana.');
  alert('Correct again!!! It is a dream of mine to visit New Zealand someday. I was actually born in Montana.');
} else if(newZealand.includes('no')) {
  console.log(newZealand);
  //console.log('Correct! It is a dream of mine to visit New Zealand someday. I was actually born in Montana.');
  alert('Correct! It is a dream of mine to visit New Zealand someday. I was actually born in Montana.');
} else {
  console.log(newZealand);
  console.log('Invalid Answer');
  alert('Huh? That\'s not a yes or no answer...');
}

var kayaking = prompt('Have I kayaked across the Puget Sound?');
kayaking = kayaking.toLowerCase();

if(kayaking.includes('yes') && lovesCoffee.includes('yes') && newZealand.includes('no')) {
  console.log(kayaking);
  alert('Wow! Correct!! Again!!! It\'s like you know me already... I once crossed the Puget Sound from Marysville to Beverly Beach on Whidby Island. It took over 8 hours round trip!');
} else if(kayaking.includes('yes')) {
  console.log(kayaking);
  alert('Correct! I once crossed the Puget Sound from Marysville to Beverly Beach on Whidby Island. It took over 8 hours round trip!');
} else if(kayaking.includes('no')) {
  console.log(kayaking);
  alert('Incorrect. I have kayaked mostly on lakes but I once crossed the Puget Sound from Marysville to Beverly Beach on Whidby Island. It took over 8 hours round trip!');
} else {
  console.log(kayaking);
  console.log('Invalid Answer');
  alert('Huh? That\'s not a yes or no answer...');
}
