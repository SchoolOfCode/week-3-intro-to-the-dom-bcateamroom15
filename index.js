console.log("Linked!");

//Ticket 1
const id = document.getElementById('title');
console.log(id);

//Ticket 1b
const className = document.getElementsByClassName('content');
console.log(className)

//Ticket 1c
const tagName = document.getElementsByTagName('li');
console.log(tagName);

//Ticket 1d
const querySelector = document.querySelector('.highlight');
console.log(querySelector);

//Ticket 1e

const querySelectorAll = document.querySelectorAll('.highlight');
console.log(querySelectorAll);

//TICKET 2a

const itemList = document.getElementById('itemList').parentNode.nodeName;

console.log(itemList);

//Ticket 2b

const childList = document.getElementById('itemList').childNodes;
console.log(childList);

//Ticket 2c
const elementChildren = document.getElementById('itemList').children;
console.log(elementChildren);

//Ticket 2d

const firstChildren = document.getElementById("itemList").firstElementChild;
const lastChildren = document.getElementById('itemList').lastElementChild;
// // console.log(firstChildren);
console.log(firstChildren);
console.log(lastChildren);

// Ticket 3a

const h1 = document.getElementById('title');
h1.setAttribute("style", "color:red; font-size: 30px");

console.log(h1);

//Ticket 3b

const body  = document.querySelector('body');

const paragraph = document.createElement("p");
paragraph.textContent = "This is a dynamically added paragraph."

body.appendChild(paragraph);

console.log(paragraph);

//Ticket 3c

const content = document.querySelector('.content');
content.textContent = "This paragraph has been updated.";

console.log(content);

//Ticket 3d

//const secondPelement = document.querySelectorAll('.content' [1]);
//secondPelement.setAttribute("title", "Hover over me!"); 
