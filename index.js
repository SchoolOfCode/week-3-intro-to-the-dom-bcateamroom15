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

const lastAndFirstChildren = document.getElementById("itemList").firstChild.lastChild;
console.log(lastAndFirstChildren);

