// Traversing the DOM
    // Move up and down : Parents and Children of specific selections.

let val;

const list  =document.querySelector('ul.collection');

// Select first one 
const listitem  = document.querySelector('li.collection-item:first-child');

val = listitem;
val = list;

// Give List of all the child nodes.
val = list.childNodes;
    // The text nodes are nothing but the line breaks
// For ignoring the text we can use .children;

val = list.children; // This an html collection of all child elements.


val = list.childNodes[0]; // Returns the first node
val = list.childNodes[0].nodeName; // Returns the first node name
val = list.childNodes[0].nodeType; // Returns the first node Type


// Node types

// 1  Element
// 2  Attribute(depricated)
// 3  Text Node
// 8  Comment
// 9  Document Itself
// 10 Doctype



val = list.children[0];
val = list.children[0].textContent = 'Hello';
val = list.children[2].children; // Return the child element of the 3rd child element of the list
val = list.children[2].children[0]; // Returns the link element.

val = list.firstChild; // Similar to the list.children
val = list.firstElementChild; // Similar to the list.

val = list.lastChild; // Similar to the list.children
val = list.lastElementChild; // Similar to the list.

val = list.childElementCount; // Lists no of child element;

val = list.parentNode; // Parent Node
val = list.parentElement; // Parent Elements

val = list.parentElement.parentElement; // Parent element of the parent Element


val = list.children[0].nextElementSibling; // Getting next element sibling
val = list.children[0].nextSibling; // Getting next sibling

val = list.children[1].previousElementSibling; // Getting next element sibling
val = list.children[0].previousSibling; // Getting next sibling

// val = list;

console.log(val);
