//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

 function isTyler(name){
   if(name === 'Tyler'){
     return true;
   } else {
     return false;
   }
 }

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


function getName(){
var userAnswer = prompt('What is your name?', 'ex. David')
return userAnswer;
}

//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome(){
  var myFunc = getName();
  alert(`Welcome, ${myFunc}`);
}


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

function answer1(){
  var myAnswer = "An argument goes in the () when you invoke the function, while parameters go in the () when creating the function."
return myAnswer;  
}


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


function answer2(){
  var myAnswer = "Falsy values include: false, null, undefined, 0, and NaN. It also includes empty quotes, single or double.  You check to see if something is falsy by using comparison symbols, like >, <, <=, >=, ==, or !=."
  return myAnswer;
}



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

function myName(myName){
  return 'kevin';
}


//Now save the function definition of myName into a new variable called newMyName

var newMyName = function(){
  return "Charlie";
}

//Now alert the result of invoking newMyName
alert(newMyName);


//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

 function outerFn(){
   return function(){
     return 'Kevin';
   }
 }

//Now save the result of invoking outerFn into a variable called innerFn.

 var innerFn = outerFn();

//Now invoke innerFn.
innerFn;