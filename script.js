var input = document.getElementById("input");
var output = document.getElementById("output");


function fireButton(arr) {
  arr = [];
  //get input value
  userInput = input.value;

  //console.log("hello") prints string - hello
  console.log(userInput);

  //get the length of the array
  var length = userInput.length;
  console.log(length);

  //add to the array
  arr = userInput.split(' ');
  // arr.push - to add popcorn to array
  arr.push('popcorn');
  console.log(arr);

  //output to HTML
  output.innerHTML = arr;
}
