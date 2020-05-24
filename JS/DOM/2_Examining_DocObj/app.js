let val;

// Getting document from 
val = document; // Returns entire html document.
// Html collection is similar to array but it is not.
  // Nodes are also used further.

// Getting array of the entire html collection;
val = document.all;

// Getting specific element from the array using index value of the entire html collection;
val = document.all[1];

// Getting length of all the document objs
val = document.all.length;

// Getting objects on the basis of their tags of the document objs
val = document.body;

// Getting doc type on the basis of their tags of the document objs
val = document.doctype;

// Getting Domain type on the basis of their tags of the document objs
val = document.domain;

// Getting URL on the basis of their tags of the document objs
val = document.URL;

// Getting Character set on the basis of their tags of the document objs
val = document.contentType;



val = document.forms[0];
// We can actually select stuffs without using selectors.

// Getting stuffs from the form
val = document.forms[0].id;

// geting method types
val = document.forms[0].method;

// geting action types of the form
val = document.forms[0].action;

// For Links
val = document.links;

// For specific links
val = document.links[0];

// For specific links using id
val = document.links[0].id;

// For specific links classname
val = document.links[0].className;

// For specific links classList
val = document.links[0].classList;

// Also for images
val = document.images;

// Lists all the scripts
val = document.scripts;

// Lists Script attribute for the 3rd script 
val = document.scripts[2].getAttribute('src');

// Lists Script attribute for the 2nd script 
val = document.scripts[1].getAttribute('src');

// Converting html collections to array
  // For doing for each which is not possible in html collections.
  // EG BELLOW
let scripts = document.scripts;

// scripts.forEach(function(script){
//   console.log(script);
// });
// For each is for arrays only.
// One alternative is to convert the html collection to array

let scriptsarray = Array.from(scripts); // Converting the document collection to array type.
scriptsarray.forEach(function(script){
  console.log(script);
});

console.log(val);

// Normally one would use selectors for selecting elements rather than the above approach
// But it is better to be familiar with this approach.

