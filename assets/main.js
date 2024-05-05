// getElementsById('id')
// querySelector(#id)
// var can be named with anything

function changeText() {
  var answer = document.getElementById("joke");
  answer.textContent = "Answer: Because they spend years at sea! hahaha";
}



document.getElementById("click-me").addEventListener("click", changeText);

function replaceWithText() {
  var button = document.getElementById("newjoke");

  var newjoke = document.createTextNode(
    "There are 30 cows in a field 28 chickens. How many didnt?"
  );
  // creates a new text node with the text content 'There are...'.

  button.parentNode.replaceChild(newjoke, button);
  // replaces the button with the new text node using the replaceChild method on the button's parent node
}



function addToList() {
  var input = document.querySelector("#input");
  var myValue = input.value; // now if you put something in the <input>, that value is the value here

  var item = document.createElement("li"); //now create a list item
  item.textContent = myValue;
  // inside that list item you can insert something (ex: = "hello word"), here is Myvalue - what you type in the input

  document.querySelector("#itemList").appendChild(item); // look for the ul and add Item in
}

