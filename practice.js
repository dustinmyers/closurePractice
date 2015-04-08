//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

var inner = outer();  

//Once you do that, invoke inner.

inner();


//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

var str = callFriend();
str('435-215-9248')


//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

var makeCounter = function() {
  var myCount = 1;
  return function() {
    return myCount++;
  }
}


  var count = makeCounter();
  count() // 1
  count() // 2
  count() // 3
  count() // 4



//Next Problem



/*
  Write a function(ONE) that accepts another function(TWO) as it's first argument and returns a new function(returned in ONE)
  (which invokes the original function(two) that was passed in) that can only ever be executed once.

  Once completed, add a second argument that allows the function(one) to be invoked N number of times.
  After the function has been called N number of times, console.log('STAHHP');
*/

var one = function(two, n) {
  var counter = 0;
  return function() {
    if (counter < n) {
        counter++;
        return two();
      }
    else {
      console.log('STAHHP')
    }    
  }
}

var two = function() {
  console.log("Its working")
}

var test = one(two, 4);









/*var something = (function() {
    var executed = false;
    return function () {
        if (!executed) {
            executed = true; 
            return "STAHHP"; 
        }
    };
})();*/


var something = function(){
  var counter = 0;
  if(counter < 5) {
    console.log('STAHHP');
    counter++;
  }
}

var test = function(something) {
  return function(){
    something();
    test = function(){
    };
  }
};


var run = test()