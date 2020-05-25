// Removing and Replacing the Elements.

// Replacing the Elements.
    // 1 Create a new element make sure the id and class name are same as old one to be replaced for consistancy.
    // 2 Get the old element
    // 3 Go to the parent element of the old/existing element
    // 4 use PARENTELEMENT.replaceChild(new,old) method to replace the child element 

// Creating an element to replace the old element.
newTitle = document.createElement('h2');
newTitle.id = 'task-title';
newTitle.className = 'taskTitle';
newTitle.appendChild(document.createTextNode('Task List'))

// Getting parent element of the title
const oldheading = document.getElementById('task-title')
const parent = document.getElementById('task-title').parentElement;
parent.replaceChild(newTitle,oldheading)

console.log(parent)





// Remove Elements.
// getting all list childs
const lis = document.querySelectorAll('li')
// Getting parent
const list = document.querySelector('ul')


// remove list item

// Simple command to remove elements 
// .remove();
// lis[0].remove();


// Removing using removeChild(childelement)

list.removeChild(lis[2])





// Classes and Attributes

const firstLi = document.querySelector('li:first-child')
const link = firstLi.children[0]
console.log(link)

let val;

val = link.className
val = link.classList
val = link.classList[0]

// adding class
link.classList.add('newclass')
val = link

// remove class
val.classList.remove('newclass')


// Attributes
val = link.getAttribute('href')


// Attributes
val = link.setAttribute('href','http://google.com')
val = link.setAttribute('title','google.com')

// Check for existence of stuff
    // false if doesnot exist
    // true if exists
val = link.hasAttribute('title')


// Remove attribute

link.removeAttribute('title')

console.log(val)