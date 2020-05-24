// DOM Selectors DOCUMENT OBJECT METHODS FOR SELECTING ELEMENTS
// EARLIER JQUERY WAS USED NOW JS HAS it all.
// DO not use JQ for dom manipulation


// DOM SELECTORS ARE OF TWO TYPES:-
  // SINGLE ELEMENT SELECTORS.
      // Grabs the first/single element 
        // 1) getElementById()
        // 2) querySelector()
  // MULTIPLE ELEMENT SELECTOS.
      // Grabs all the elements 
          // Returns HTML collection.  OR
          // Nodelist. depending on selector.
let val;

// Here we'll take a look at two Single element selectors.
  // 1) document.getElementById()
  // Selects HTML element by ID
  val = document.getElementById('task-title');
// Get things from the element

val = document.getElementById('task-title').id; // Returns ID of the selected element 

val = document.getElementById('task-title').className; // Returns className of the sleected element.

// Change Styling
// Usually we don't use this for styling but just for some functional style changes.
document.getElementById('task-title').style.background = 'green'; // Returns className of the sleected element.

document.getElementById('task-title').style.color = 'red'; 

document.getElementById('task-title').style.padding = '10px'; 

// document.getElementById('task-title').style.display = 'none'; 

// Change Content
document.getElementById('task-title').textContent = 'Changed'; 

// Inner Text
document.getElementById('task-title').innerText = 'My Tasks'; 

// Inner HTML 
//document.getElementById('task-title').innerHTML = '<span style="color:yellow"> TASK LIST </span>'; 


// The above methods should be used in conjuction to setting a variable.
  // USE VARIABLES as follows.
const task_title = document.getElementById('task-title');
task_title.style.color = 'black'

  
//console.log(task_title);

  // 2) document.querySelector() 
    // Newer and more powerful works like jquery

  console.log(document.querySelector('#task-title'));

  console.log(document.querySelector('.card-title'));
  
  console.log(document.querySelector('h5'));
  // for more than 1 h5 in the page the first one is returned.

document.querySelector('li').style.color = 'red' // Only the first element gets changed. as it is single element selector
document.querySelector('ul li').style.color = 'green' // Only the first element gets changed. as it is single element selector

// Selecting the last Item using pseduo classes.
  // last-child
document.querySelector('ul li:last-child').style.color = 'blue' 

// For selecting specific item using nthchild()
document.querySelector('ul li:nth-child(2)').style.color = 'pink' 


// Changing text content using nthchild()
document.querySelector('ul li:nth-child(2)').textContent = 'pink' 

// Odd and Even .. twist here. in queryselector.
document.querySelector('ul li:nth-child(odd)').textContent = 'Odder' 
  // As you can see only the first odd element is changed.
  // Same thing applies to Even.




