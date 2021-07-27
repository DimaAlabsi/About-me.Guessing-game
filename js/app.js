'use strict';

let username = prompt('what is your name, dear?');

alert(' Welcome to my website ..' + username);



let myAge = prompt('Do you think my age less than 25 yaers ? yes/y or no/n ').toLowerCase();
let counter = 0;

while (myAge !== 'yes' && myAge !== 'y' && myAge !== 'no' && myAge !== 'n') {
  myAge = prompt('Please enter yes or no');
}




switch (myAge) {
case 'yes', 'y':
  //   console.log('yes,the user gussed');
  alert('Bravo, you guess it ..' + username + ' . I am 24 years old.');
  counter++;
  break;
case 'no', 'n':
  //    console.log('no,the user don't guess');
  alert('oh, I am 24 years old');


  break;


}


let lifePlace = prompt('Do you think I live in Jordan ? yes or no ').toLowerCase();
while (lifePlace !== 'yes' && lifePlace !== 'y' && lifePlace !== 'no' && lifePlace !== 'n') {
  lifePlace = prompt('Please enter yes or no');

}
switch (lifePlace) {
case 'yes', 'y':
  //   console.log('yes,the user gussed');

  alert('Bravo, you guess it.. ' + username + ' . I live in Amman.');
  counter++;
  break;
case 'no', 'n':
  //    console.log('no,the user don't guess');
  alert('oh, I live in Amman_Jordan');



  break;


}




let myInterest = prompt('Do you think I am intrested in Programming and software development ').toLowerCase();
while (myInterest !== 'yes' && myInterest !== 'y' && myInterest !== 'no' && myInterest !== 'n') {
  myInterest = prompt('Please enter yes or no');

}
switch (myInterest) {
case 'yes', 'y':
  //   console.log('yes,the user gussed');

  alert('Bravo, you guess it..' + username + ' . I am so intersted in this field.');

  counter++;
  break;
case 'no', 'n':
  //    console.log('no,the user don't guess');
  alert('oh, why not it is a very interesting field');



  break;



}

let aboutMovies = prompt('Do you think I like watching movies ').toLowerCase();
while (aboutMovies !== 'yes' && aboutMovies !== 'y' && aboutMovies !== 'no' && aboutMovies !== 'n') {
  aboutMovies = prompt('Please enter yes or no');

}
switch (aboutMovies) {
case 'yes', 'y':
  //   console.log('yes,the user gussed');

  alert('Bravo, you guess it ..' + username + ' . I like watching movies very much');

  counter++;
  break;
case 'no', 'n':
  //    console.log('no,the user don't guess');
  alert('oh, it is the most thing I love to do after listening to others experiences');
  break;



}


let favMovie = prompt('Do you think I love watching horror movies? ').toLowerCase();
while (favMovie !== 'yes' && favMovie !== 'y' && favMovie !== 'no' && favMovie !== 'n') {
  favMovie = prompt('Please enter yes or no');
}
switch (favMovie) {
case 'yes', 'y':
  //   console.log('no.the user donot guess');

  alert('Oh, no it is impossible to watch this kind of movies');

  break;
case 'no', 'n':
  //    console.log('user guessed');
  alert('yes dear, I do not never prefer this kind of movies .');
  counter++;

  break;



}






// console.log (guessBirthady)
for (let i = 0; i < 4; i++) {
  let guessBirthady = Number(prompt(username + ' Can you guess my birthday month?'));
  if (guessBirthady === 8) { alert('oh you guess my birthday month'); counter++;
    break; }
  guessBirthady = Number(prompt(username + ' Can you guess my birthday month?'));

  //console.log(guessBirthady)
  if ( guessBirthady < 8) { alert('try again ,it is too low'); }
  guessBirthady = Number(prompt(username + ' Can you guess my birthday month?'));

  // console.log(guessBirthady)
  if ( guessBirthady > 8) { alert('try again ,it is too high'); }

}

//  while( guessBirthady !== 8 && aboutMovies > 8) {
//     guessBirthady = prompt('try again ,it is too high');
//     while( guessBirthady !== 8 && aboutMovies < 8) {
//       guessBirthady = prompt('try again ,it is too low');
//     while( guessBirthady ===) {
//       guessBirthady = prompt( `oh ${username}, you guess my birthday month  `);
//        counter++;}





alert ('my birthady month is 8');



let favColor = ['pink', 'purple','white','blue','black'];
let guessColor = prompt(username + ' Can you guess my favourite color?');
// console.log (guessColor)
for (let x = 0; x < 6; x++) {
  if (guessColor=== favColor[2]) { alert('oh you guess my favourite color');
    counter++;
    break; }


  guessColor = prompt(username + ' Can you guess my favourite color?');
  while (guessColor !== favColor[2]) {alert('try again , it is not my favourite one');}
}
// console.log (guessColor)

//   if ( guessColor === favColor [3] ) { alert('try again ,it is not my favourite one'); }


// console.log (guessColor)
alert ('My favourite color is white color');
alert('your score is ' + counter);

alert(' Hope you have a great time at my website ^_^ ' + username);

