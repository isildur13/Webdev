// DOM Selectors DOCUMENT OBJECT METHODS FOR SELECTING ELEMENTS
// EARLIER JQUERY WAS USED NOW JS HAS it all.
// DO not use JQ for dom manipulation


// DOM SELECTORS ARE OF TWO TYPES:-
  // SINGLE ELEMENT SELECTORS.
      // Grabs the first/single element 
      // 1) getElementById()
      // 2) querySelector()
  // MULTIPLE ELEMENT SELECTORS.
      // Grabs all the elements
      // 1) getElementsByClassName()
      // 2) querySelectorAll()

          // Returns HTML collection.  OR
          // Nodelist. depending on selector.


// Multiple Element Selectors.

const items = document.getElementsByClassName('collection-item')

// console.log(items[0]);

items[0].style.color = 'blue';

// We can select from local scope too rather than global scope.

// Use Query Selector to shortent the search scope and then use getElementByClassName
// E.G

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
listItems[2].style.color = 'pink'
// console.log(listItems)



// get elements by tag names
const listtagItems = document.getElementsByTagName('li')
listtagItems[4].style.color = 'red' 
listtagItems[4].textContent = 'red' 
// console.log(listtagItems)

// Convert HTML 
listtagItemsa = Array.from(listtagItems);
listtagItemsa.reverse(); // Error incase HTML collection and not an array

listtagItemsa.forEach(function(li){

    // console.log(li.className)

});

// console.log(listtagItemsa);


const iteams = document.querySelectorAll('ul.collection li.collection-item');

iteams.forEach(function(item,index){
    item.textContent = `${index}: Hello`;
})

const liodd = document.querySelectorAll('li:nth-child(odd)')
const lieven = document.querySelectorAll('li:nth-child(even)')

// Using simple for each function
liodd.forEach(function(li,item){
    li.style.background = 'red'
})

// Using simple for loop
for(let i = 0; i<lieven.length ; i++){
    lieven[i].style.background = 'green'
}

console.log(iteams)














