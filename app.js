'use strict';

alert('Hello and Welcome! Let\'s play a game! My name is Stephen and I have a few yes or no questions for you... about me!');
alert('Actually, one question about you...');

var userFirstName = prompt('What is your first name?');

alert('Hi ' + userFirstName + '! Hope you enjoy the game I made for you! 5 simple yes or no questions - Take you\'re best guess!');

var lovesCoffee = prompt('Do I like coffee?');
lovesCoffee = lovesCoffee.toLowerCase();

if(lovesCoffee.includes('yes')) {
  console.log(lovesCoffee);
  console.log('Correct');
  alert('Correct! Nice work ' + userFirstName + '!');
  alert('I love coffee! CoffeeCoffeeCoffee!');
} else if(lovesCoffee.includes('no')){
  console.log(lovesCoffee);
  console.log('Incorrect.');
  alert('Sorry. That is not correct ' + userFirstName + '.');
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
  console.log('Incorrect.');
  //console.log('Incorrect. I would love to visit but I was actually born in Montana.');
  alert('Sorry. That is not correct ' + userFirstName + '.');
  alert('I would love to visit but I was actually born in Montana.');
} else if(newZealand.includes('no') && lovesCoffee.includes('yes')) {
  console.log(newZealand);
  console.log('Correct');
  alert('Correct again ' + userFirstName + '!!!');
  alert('It is a dream of mine to visit New Zealand someday. I was actually born in Montana.');
} else if(newZealand.includes('no')) {
  console.log(newZealand);
  console.log('Correct');
  alert('Correct! Nice work ' + userFirstName + '!');
  alert('It is a dream of mine to visit New Zealand someday. I was actually born in Montana.');
} else {
  console.log(newZealand);
  console.log('Invalid Answer');
  alert('Huh? That\'s not a yes or no answer...');
}

var kayaking = prompt('Have I kayaked across the Puget Sound?');
kayaking = kayaking.toLowerCase();

if(kayaking.includes('yes') && lovesCoffee.includes('yes') && newZealand.includes('no')) {
  console.log(kayaking);
  console.log('Correct');
  alert('Wow! Correct!! Again!!! It\'s like you know me already ' + userFirstName + '....');
  alert('I once crossed the Puget Sound from Marysville to Beverly Beach on Whidby Island. It took over 8 hours round trip!');
} else if(kayaking.includes('yes')) {
  console.log(kayaking);
  console.log('Correct');
  alert('Correct! Nice work ' + userFirstName + '!');
  alert('I once crossed the Puget Sound from Marysville to Beverly Beach on Whidby Island. It took over 8 hours round trip!');
} else if(kayaking.includes('no')) {
  console.log(kayaking);
  console.log('Incorrect.');
  alert('Sorry. That is not correct ' + userFirstName + '.');
  alert('I once crossed the Puget Sound from Marysville to Beverly Beach on Whidby Island. It took over 8 hours round trip!');
} else {
  console.log(kayaking);
  console.log('Invalid Answer');
  alert('Huh? That\'s not a yes or no answer...');
}

var attendedCollegeInArizona = prompt('Did I study at University in California?');
attendedCollegeInArizona = attendedCollegeInArizona.toLowerCase();

if(attendedCollegeInArizona.includes('no') && kayaking.includes('yes') && lovesCoffee.includes('yes') && newZealand.includes('no')) {
  console.log(attendedCollegeInArizona);
  console.log('Correct');
  alert('Killin it ' + userFirstName + '!! Correct again!!');
  alert('Four times in a row!');
  alert('I have not yet done any studying in California. I attended the University of Arizona in Tucson, AZ. Go Wildcats!');
  alert('Ok ' + userFirstName + '! A perfect 4 for 4 so far!');
} else if(attendedCollegeInArizona.includes('no')) {
  console.log(attendedCollegeInArizona);
  console.log('Correct');
  alert('Correct! Nice work ' + userFirstName + '!');
  alert('I have not yet done any studying in California. I attended the University of Arizona in Tucson, AZ. Go Wildcats!');
} else if(attendedCollegeInArizona.includes('yes')) {
  console.log(attendedCollegeInArizona);
  console.log('Incorrect.');
  alert('Sorry. That is not correct ' + userFirstName + '.');
  alert('I have not yet done any studying in California. I attended the University of Arizona in Tucson, AZ. Go Wildcats!');
} else {
  console.log(attendedCollegeInArizona);
  console.log('Invalid Answer');
  alert('Huh? That\'s not a yes or no answer...');
}

alert('Last question..... You can do it!');

var lengthOfEmployment = prompt('Have I been employed with any company for over 10 years?');
lengthOfEmployment = lengthOfEmployment.toLowerCase();

if(lengthOfEmployment.includes('yes') && attendedCollegeInArizona.includes('no') && kayaking.includes('yes') && lovesCoffee.includes('yes') && newZealand.includes('no')) {
  console.log(lengthOfEmployment);
  console.log('Correct');
  alert('Correct!!! Are we related??');
  alert('I have been employed with TJMaxx for 11 years. Full time for 7 years and in management for 5 years.');
  alert('PERFECT SCORE! CONGRATULATIONS!');
  alert('Hope you enjoyed the game ' + userFirstName + ' and welcome again to my webpage!');
} else if(lengthOfEmployment.includes('yes')) {
  console.log(lengthOfEmployment);
  console.log('Correct');
  alert('Correct! Nice work ' + userFirstName + '!');
  alert('I have been employed with TJMaxx for 11 years. Full time for 7 years and in management for 5 years.');
  alert('Hope you enjoyed the game ' + userFirstName + ' and welcome again to my webpage!');
} else if(lengthOfEmployment.includes('no')) {
  console.log(lengthOfEmployment);
  console.log('Incorrect.');
  alert('Sorry. That is not correct ' + userFirstName + '.');
  alert('I have been employed with TJMaxx for 11 years. Full time for 7 years and in management for 5 years.');
  alert('Hope you enjoyed the game ' + userFirstName + ' and welcome again to my webpage!');
} else {
  console.log(lengthOfEmployment);
  console.log('Invalid Answer');
  alert('Huh? That\'s not a yes or no answer...');
  alert('Hope you enjoyed the game ' + userFirstName + ' and welcome again to my webpage!');
}
