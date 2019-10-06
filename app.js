'use strict';


var userScore = [];
alert('Hello and Welcome! Let\'s play a guessing game! My name is Stephen and I have a few yes or no questions for you... about me!');
alert('Actually, one question about you first...');



var userFirstName = prompt('What is your first name?');


alert('Hi ' + userFirstName + '! Hope you enjoy the game I made for you! 7 questions - Take you\'re best guesses!');


var lovesCoffee = prompt('Do I like coffee?');
lovesCoffee = lovesCoffee.toLowerCase();


function doILikeCoffee() {

  if (lovesCoffee.includes('yes')) {
    //   console.log(lovesCoffee);
    //   console.log('Correct');
    alert('Correct! Nice work ' + userFirstName + '!');
    alert('I love coffee! CoffeeCoffeeCoffee!');
    userScore.push(1);
  } else if (lovesCoffee.includes('no')) {
    //   console.log(lovesCoffee);
    //   console.log('Incorrect.');
    alert('Sorry. That is not correct ' + userFirstName + '.');
    alert('I don\'t like coffee... I LOVE it! I don\'t think I could survive without it!');
    // userScore.push(0);
  } else {
    //   console.log(lovesCoffee);
    //   console.log('Invalid Answer');
    alert('Huh? That\'s not a yes or no answer... Please try again.');
    lovesCoffee = prompt('Do I like coffee?');
    lovesCoffee = lovesCoffee.toLowerCase();
    doILikeCoffee();
    // userScore.push(0);
  }
}

doILikeCoffee();

var newZealand = prompt('Was I born in New Zealand?');
newZealand = newZealand.toLowerCase();

function iWasBorn() {



  if (newZealand.includes('yes')) {
    //   console.log(newZealand);
    //   console.log('Incorrect.');
    alert('Sorry. That is not correct ' + userFirstName + '.');
    alert('I would love to visit but I was actually born in Montana.');
    userScore.push(0);
  } else if (newZealand.includes('no') && lovesCoffee.includes('yes')) {
    //   console.log(newZealand);
    //   console.log('Correct');
    alert('Correct again ' + userFirstName + '!!!');
    alert('It is a dream of mine to visit New Zealand someday. I was actually born in Montana.');
    userScore.push(1);
  } else if (newZealand.includes('no')) {
    //   console.log(newZealand);
    //   console.log('Correct');
    alert('Correct! Nice work ' + userFirstName + '!');
    alert('It is a dream of mine to visit New Zealand someday. I was actually born in Montana.');
    userScore.push(1);
  } else {
    //   console.log(newZealand);
    //   console.log('Invalid Answer');
    alert('Huh? That\'s not a yes or no answer... Please try again.');
    newZealand = prompt('Was I born in New Zealand?');
    newZealand = newZealand.toLowerCase();
    iWasBorn();
    // userScore.push(0);
  }
}

iWasBorn();

var kayaking = prompt('Have I kayaked across the Puget Sound?');
kayaking = kayaking.toLowerCase();

function haveIKayaked() {



  if (kayaking.includes('yes') && lovesCoffee.includes('yes') && newZealand.includes('no')) {
    //   console.log(kayaking);
    //   console.log('Correct');
    alert('Wow! Correct!! Again!!! It\'s like you know me already ' + userFirstName + '....');
    alert('I once crossed the Puget Sound from Marysville to Beverly Beach on Whidby Island. It took over 8 hours round trip!');
    userScore.push(1);
  } else if (kayaking.includes('yes')) {
    //   console.log(kayaking);
    //   console.log('Correct');
    alert('Correct! Nice work ' + userFirstName + '!');
    alert('I once crossed the Puget Sound from Marysville to Beverly Beach on Whidby Island. It took over 8 hours round trip!');
    userScore.push(1);
  } else if (kayaking.includes('no')) {
    //   console.log(kayaking);
    //   console.log('Incorrect.');
    alert('Sorry. That is not correct ' + userFirstName + '.');
    alert('I once crossed the Puget Sound from Marysville to Beverly Beach on Whidby Island. It took over 8 hours round trip!');
    userScore.push(0);
  } else {
    //   console.log(kayaking);
    //   console.log('Invalid Answer');
    alert('Huh? That\'s not a yes or no answer... Please try again.');
    kayaking = prompt('Have I kayaked across the Puget Sound?');
    kayaking = kayaking.toLowerCase();
    haveIKayaked();
    // userScore.push(0);
  }
}

haveIKayaked();

var attendedCollegeInArizona = prompt('Did I study at University in California?');
attendedCollegeInArizona = attendedCollegeInArizona.toLowerCase();

function studyAtUniversity() {

  if (attendedCollegeInArizona.includes('no') && kayaking.includes('yes') && lovesCoffee.includes('yes') && newZealand.includes('no')) {
    //   console.log(attendedCollegeInArizona);
    //   console.log('Correct');
    alert('Killin it ' + userFirstName + '!! Correct again!!');
    alert('Four times in a row!');
    alert('I have not yet done any studying in California. I attended the University of Arizona in Tucson, AZ. Go Wildcats!');
    alert('Ok ' + userFirstName + '! A perfect 4 for 4 so far!');
    userScore.push(1);
  } else if (attendedCollegeInArizona.includes('no')) {
    //   console.log(attendedCollegeInArizona);
    //   console.log('Correct');
    alert('Correct! Nice work ' + userFirstName + '!');
    alert('I have not yet done any studying in California. I attended the University of Arizona in Tucson, AZ. Go Wildcats!');
    userScore.push(1);
  } else if (attendedCollegeInArizona.includes('yes')) {
    //   console.log(attendedCollegeInArizona);
    //   console.log('Incorrect.');
    alert('Sorry. That is not correct ' + userFirstName + '.');
    alert('I have not yet done any studying in California. I attended the University of Arizona in Tucson, AZ. Go Wildcats!');
    // userScore.push(0);
  } else {
    //console.log(attendedCollegeInArizona);
    //console.log('Invalid Answer');
    alert('Huh? That\'s not a yes or no answer... Please try again.');
    attendedCollegeInArizona = prompt('Did I study at University in California?');
    attendedCollegeInArizona = attendedCollegeInArizona.toLowerCase();
    studyAtUniversity();
    // userScore.push(0);
  }
}

studyAtUniversity();

var lengthOfEmployment = prompt('Have I been employed with any company for over 10 years?');
lengthOfEmployment = lengthOfEmployment.toLowerCase();

function employmentLength() {

  if (lengthOfEmployment.includes('yes') && attendedCollegeInArizona.includes('no') && kayaking.includes('yes') && lovesCoffee.includes('yes') && newZealand.includes('no')) {
    //   console.log(lengthOfEmployment);
    //   console.log('Correct');
    alert('Correct!!! Are we related??');
    alert('I have been employed with TJMaxx for 11 years. Full time for 7 years and in management for 5 years.');
    userScore.push(1);
  } else if (lengthOfEmployment.includes('yes')) {
    //   console.log(lengthOfEmployment);
    //   console.log('Correct');
    alert('Correct! Nice work ' + userFirstName + '!');
    alert('I have been employed with TJMaxx for 11 years. Full time for 7 years and in management for 5 years.');
    userScore.push(1);
  } else if (lengthOfEmployment.includes('no')) {
    //   console.log(lengthOfEmployment);
    //   console.log('Incorrect.');
    alert('Sorry. That is not correct ' + userFirstName + '.');
    alert('I have been employed with TJMaxx for 11 years. Full time for 7 years and in management for 5 years.');
    // userScore.push(0);
  } else {
    //   console.log(lengthOfEmployment);
    //   console.log('Invalid Answer');
    alert('Huh? That\'s not a yes or no answer... Please try again.');
    lengthOfEmployment = prompt('Have I been employed with any company for over 10 years?');
    lengthOfEmployment = lengthOfEmployment.toLowerCase();
    employmentLength();
    // userScore.push(0);
    //counter++; you could make a var counter that adds one to the score when answered correctly.
  }
}

employmentLength();



function guessingNumber() {

  for (var i = 0; i < 4; i++) {
    var guessNumber = prompt('Good work so far. Now I am thinking of a number between 1 and 10... You will have 4 chances to guess correctly!');
    guessNumber = Number(guessNumber);
    console.log('prompt the user');

    if (guessNumber === 3) {
      console.log('correct');
      alert('Correct! Nice work ' + userFirstName + '!');
      console.log('one score');
      userScore.push(1);
      i = 5;
    } else if (guessNumber > 3 && guessNumber < 5) {
      alert('Very close! A little too high.');
      console.log('too high');
    } else if (guessNumber >= 5) {
      alert('Too high. Guess lower.');
      console.log('too high');
    } else {
      alert('Very close! A little too low.');
      console.log('too low');
      // userScore.push(0);
    }
    // if(i === 4) {
    //   console.log('zero score');
    //   userScore.push(0);
    // }
  }
}

guessingNumber();

alert('Last question..... You can do it!');

function countriesVisited() {

  var countriesIVisitied = ['korea', 'china', 'mexico', 'canada', 'croatia', 'germany'];

  //var numberOfGuesses = 6;
  for (var y = 0; y < 6; y++) {
    var nameACountry = prompt('Name a Country that I have been to outside of The United States. You have 6 tries to get it right!');
    nameACountry = nameACountry.toLowerCase();
    console.log(nameACountry);

    if (nameACountry === countriesIVisitied[0]) {
      console.log('korea!! correct');
      alert('Correct! Nice work ' + userFirstName + '! I spent a day in Seoul during the longest layover of my life. We took the train into the city so I count having visited it.');
      userScore.push(1);
      y = 7;
    } else if (nameACountry === countriesIVisitied[1]) {
      console.log('china!! correct');
      alert('Correct! Nice work ' + userFirstName + '! I spent a month in China during High School. It was so awesome!');
      userScore.push(1);
      y = 7;
    } else if (nameACountry === countriesIVisitied[2]) {
      console.log('mexico!! correct');
      alert('Correct! Nice work ' + userFirstName + '! I used to live on the Arizona/Mexico border. There were quite a few times I crossed into Senora, Mexico.');
      userScore.push(1);
      y = 7;
    } else if (nameACountry === countriesIVisitied[3]) {
      console.log('canada!! correct');
      alert('Correct! Nice work ' + userFirstName + '! I guess Canada is technically a different country than the United States.');
      userScore.push(1);
      y = 7;
    } else if (nameACountry === countriesIVisitied[4]) {
      console.log('croatia!! correct');
      alert('Correct! Nice work ' + userFirstName + '! I visited Croatia last summer. The Dalmatian Islands were awesome!');
      userScore.push(1);
      y = 7;
    } else if (nameACountry === countriesIVisitied[5]) {
      console.log('germany!! correct');
      alert('Correct! Nice work ' + userFirstName + '! Spent some time in Frankfurt. Drank beer and ate sausage. Best vacation ever!');
      userScore.push(1);
      y = 7;
    } else {
      console.log('sorry incorrect');
      alert('Sorry. That is not correct ' + userFirstName + '. ' + (5 - y) + ' chances remaining.');
      // userScore.push(0);
    }
    //   // if(i === 4) {
    //   //   console.log('zero score');
    //   //   userScore.push(0);
    //   // }
  }
}

countriesVisited();

alert('I have been to six countries other than The United States. I have been to Korea, China, Germany, Croatia, Canada and Mexico. China was my favorite!');



var totalScore = 0;

for (var z = 0; z < userScore.length; z++) {
  totalScore = totalScore + userScore[z];
  console.log('Total Score: ' + totalScore);
}
alert('You scored ' + totalScore + ' points out of 7.');

if (totalScore === 7) {
  alert('PERFECT SCORE! CONGRATULATIONS!');
}



alert('Hope you enjoyed the game ' + userFirstName + ' and welcome again to my webpage!');


