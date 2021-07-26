'use strict';

let username = prompt('what is your name, dear?');

alert(' Welcome to my website ..'+ username );



let myage = prompt('Do you think my age less than 25 yaers ? yes or no ').toLowerCase();
switch(myage) {
case 'yes':
//   console.log('yes,the user gussed');

  alert('Bravo, you guess it ..'+ username + ' . I am 24 years old.');
  break;
case 'no':
  //    console.log('no,the user don't guess');
  alert('oh, I am 24 years old');


  break;



}

let lifeplace = prompt('Do you think I live in Jordan ? yes or no ').toLowerCase();
switch(lifeplace) {
case 'yes':
//   console.log('yes,the user gussed');

  alert('Bravo, you guess it.. '+ username + ' . I live in Amman.');
  break;
case 'no':
  //    console.log('no,the user don't guess');
  alert ( 'oh, I live in Amman_Jordan');



  break;



}



let myinterest = prompt('Do you think I am intrested in Programming and software development ').toLowerCase();
switch(myinterest) {
case 'yes':
//   console.log('yes,the user gussed');

  alert('Bravo, you guess it..'+ username + ' . I am so intersted in this field.');
  break;
case 'no':
  //    console.log('no,the user don't guess');
 alert('oh, whu not it is a very interesting field');



  break;



}

let aboutmovies = prompt('Do you think I like watching movies ').toLowerCase();
switch(aboutmovies) {
case 'yes':
//   console.log('yes,the user gussed');

  alert('Bravo, you guess it ..'+ username + ' . I like watching movies very much');
  break;
case 'no':
  //    console.log('no,the user don't guess');
  alert('oh, it is the most thing I love to do after listening to others experiences');


  break;



}


let favmovie = prompt('Do you think I love watching horror movies? ').toLowerCase();
switch(favmovie) {
case 'yes':
//   console.log('no.the user donot guess');

  alert('Oh, no it is impossible to watch this kind of movies');
  break;
case 'no':
  //    console.log('user guessed');
  alert('yes dear, I do not never prefer this kind of movies .');


  break;



}

alert('Hope you have a great time at my website ^_^ '+ username );

