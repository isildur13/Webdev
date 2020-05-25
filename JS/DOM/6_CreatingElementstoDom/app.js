// Creating and Appending Elements to DOM

const li = document.createElement('li');


// Add CLass
li.className = 'collection-item';

// add ID 
li.id = 'new-item';

// add attribute
li.setAttribute('title','New Item');

// Create text node and append.
li.appendChild(document.createTextNode('Hello World'));

// Creating a new link element.
const link = document.createElement('a');

// Adding Classes
link.className = 'delete-item secondary-content';

//Adding Icon
link.innerHTML = '<i class="fa fa-remove"></i>'

li.appendChild(link)


// Put the li element to the DOM
    // Appending li as child to ul

document.querySelector('ul.collection').appendChild(li);




console.log(li)