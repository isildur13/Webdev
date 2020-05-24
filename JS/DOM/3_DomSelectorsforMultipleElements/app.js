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
      

          // Returns HTML collection.  OR
          // Nodelist. depending on selector.


// Multiple Element Selectors.

const items = document.getElementsByClassName('collection-item')

console.log(items[0]);

items[0].style.color = 'blue';

// We can select from local scope too rather than global scope.

// Use Query Selector to shortent the search scope and then use getElementByClassName
// E.G

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
listItems[2].style.color = 'yellow'
console.log(listItems)



// get elements by tag names
const listtagItems = document.getElementsByTagName('li')
console.log(listtagItems)






