'use strict';

let username = prompt('what is your name, dear?');

alert(' Welcome to my website ..' + username);

let counter = 0;

function myAge() {
  let myAge = prompt('Do you think my age less than 25 yaers ? yes/y or no/n ').toLowerCase();


  while (myAge !== 'yes' && myAge !== 'y' && myAge !== 'no' && myAge !== 'n') {
    myAge = prompt('Please enter yes or no');
  }




  switch (myAge) {
    case 'yes':
    case 'y':
      //   console.log('yes,the user gussed');
      alert('Bravo, you guess it ..' + username + ' . I am 24 years old.');
      counter++;
      break;
    case 'no':
    case 'n':
      //    console.log('no,the user don't guess');
      alert('oh, I am 24 years old');


      break;


  }
}
myAge();

function lifePlace() {
  let lifePlace = prompt('Do you think I live in Jordan ? yes or no ').toLowerCase();
  while (lifePlace !== 'yes' && lifePlace !== 'y' && lifePlace !== 'no' && lifePlace !== 'n') {
    lifePlace = prompt('Please enter yes or no');

  }
  switch (lifePlace) {
    case 'yes':
    case 'y':
      //   console.log('yes,the user gussed');

      alert('Bravo, you guess it.. ' + username + ' . I live in Amman.');
      counter++;
      break;
    case 'no':
    case 'n':
      //    console.log('no,the user don't guess');
      alert('oh, I live in Amman_Jordan');



      break;


  }
}
lifePlace();


function myInterest() {
  let myInterest = prompt('Do you think I am intrested in Programming and software development ').toLowerCase();
  while (myInterest !== 'yes' && myInterest !== 'y' && myInterest !== 'no' && myInterest !== 'n') {
    myInterest = prompt('Please enter yes or no');

  }
  switch (myInterest) {
    case 'yes':
    case 'y':
      //   console.log('yes,the user gussed');

      alert('Bravo, you guess it..' + username + ' . I am so intersted in this field.');

      counter++;
      break;
    case 'no':
    case 'n':
      //    console.log('no,the user don't guess');
      alert('oh, why not it is a very interesting field');



      break;



  }
}
myInterest();

function aboutMovies() {
  let aboutMovies = prompt('Do you think I like watching movies ').toLowerCase();
  while (aboutMovies !== 'yes' && aboutMovies !== 'y' && aboutMovies !== 'no' && aboutMovies !== 'n') {
    aboutMovies = prompt('Please enter yes or no');

  }
  switch (aboutMovies) {
    case 'yes':
    case 'y':
      //   console.log('yes,the user gussed');

      alert('Bravo, you guess it ..' + username + ' . I like watching movies very much');

      counter++;
      break;
    case 'no':
    case 'n':
      //    console.log('no,the user don't guess');
      alert('oh, it is the most thing I love to do after listening to others experiences');
      break;



  }
}
aboutMovies();

function favMovie() {
  let favMovie = prompt('Do you think I love watching horror movies? ').toLowerCase();
  while (favMovie !== 'yes' && favMovie !== 'y' && favMovie !== 'no' && favMovie !== 'n') {
    favMovie = prompt('Please enter yes or no');
  }
  switch (favMovie) {
    case 'yes':
    case 'y':
      //   console.log('no.the user donot guess');

      alert('Oh, no it is impossible to watch this kind of movies');

      break;
    case 'no':
    case 'n':
      //    console.log('user guessed');
      alert('yes dear, I do not never prefer this kind of movies .');
      counter++;

      break;



  }
}
favMovie();

function guessBirthady() {
  let attempts = 4;
  let answer = 8;



  // console.log (guessBirthady)
  for (let i = 0; i < attempts; i++) {
    let guessBirthady = Number(prompt(username + ' Can you guess my birthday month?'));
    // console.log (guessBirthady
    if (guessBirthady === answer) {
      alert('oh you guess my birthday month');
      counter++;
      break;
    }
    // guessBirthady = Number(prompt(username + ' Can you guess my birthday month?'));

    //console.log(guessBirthady)
    else if (guessBirthady < answer) {
      alert('try again ,it is too low');
    }
    // guessBirthady = Number(prompt(username + ' Can you guess my birthday month?'));}

    // console.log(guessBirthady)
    // if ( guessBirthady > 8)
    else {
      alert('try again ,it is too high');
      // guessBirthady = Number(prompt(username + ' Can you guess my birthday month?')); }

    }

  }
  alert('my birthady month is 8');
  //  while( guessBirthady !== 8 && aboutMovies > 8) {
  //     guessBirthady = prompt('try again ,it is too high');
  //     while( guessBirthady !== 8 && aboutMovies < 8) {
  //       guessBirthady = prompt('try again ,it is too low');
  //     while( guessBirthady ===) {
  //       guessBirthady = prompt( `oh ${username}, you guess my birthday month  `);
  //        counter++;}


}
guessBirthady();



function guessColor() {
  let favColor = ['pink', 'purple', 'white', 'green'];
  let guessColor = prompt(username + ' Can you guess my favourite color?').toLowerCase;
  // console.log (guessColor)
  outerloop: for (let x = 0; x < 6; x++) {
    for (let i = 0; i < favColor.length; i++) {

      if (guessColor === favColor[i].toLowerCase) {
        alert('oh you guess my favourite color');
        counter++;

        break outerloop;
      } else {
        alert('try again ,it is not my favourite one');
        guessColor = prompt(username + 'can you guess favourite color? ');
      }
      if (x === 5) {
        alert('sorry. y0u do not guess it');
      }
    }
  }
}
guessColor();

// guessColor = prompt(username + ' Can you guess my favourite color?');
//   while (guessColor !== favColor[2]) {alert('try again , it is not my favourite one');}
// }
// console.log (guessColor)

//   if ( guessColor === favColor [3] ) { alert('try again ,it is not my favourite one'); }


// console.log (guessColor)
alert('My favourite colors are: white, green, pink, purple colors');
alert('your score is ' + counter);
alert(' Hope you have a great time at my website ^_^ ');

function alertingUser() {
  alert('test');
}