'use strict';

var lovesCoffee = prompt('Do I like coffee?');
lovesCoffee = lovesCoffee.toLowerCase();

if(lovesCoffee.includes('yes')) {
  console.log(lovesCoffee);
  console.log('I love coffee! CoffeeCoffeeCoffee!');
  alert('I love coffee! CoffeeCoffeeCoffee!');
} else if(lovesCoffee.includes('no')){
  console.log(lovesCoffee);
  console.log('I could not survive without it!');
  alert('I could not survive without it!');
} else {
  console.log(lovesCoffee);
  console.log('Huh?');
  alert('Huh?');
}
