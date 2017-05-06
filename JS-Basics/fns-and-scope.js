//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here

function isTyler (name){
  if (name === 'Tyler'){
    return true
  } else {
    return false
  }
}


//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here

function getName(){
  var gotName = prompt("Enter your Name");
  return gotName;
}


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here

function welcome(){
  var userName = getName();
  alert("Welcome, " + userName);

}


 //end welcome


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here

//The parameters of a function call are the function's arguments. Arguments are passed to functions by value. 

//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here

//if (false)
//if (null)
//if (undefined)
//if (0)
//if (NaN)
//if ('')
//if ("")
//if (document.all) [1]

//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
  
function myName(){
  return "Rich Bliss";
}

//Now save the function definition of myName into a new variable called newMyName

  //Code Here
function newMyName(){
  var newMyName = myName();
}

//Now alert the result of invoking newMyName

alert(newMyName());


//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here

function outerFn(){
  return function(){
    return "Rich Bliss";
  }

}

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here

    var innerFn = outerFn();

    
//Now invoke innerFn.

  innerFn();

