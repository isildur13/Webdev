// Mouse Events

const clearbtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card')
const defheading = document.querySelector('h5')
const dfvalue = defheading.textContent.slice()
const heading = document.querySelector('h5')
// clearbtn.addEventListener('click', runEvent);
// clearbtn.addEventListener('dblclick', runEvent); // ISSUES
//clearbtn.addEventListener('mousedown', runEvent);
// clearbtn.addEventListener('mouseup', runEvent);
//clearbtn.addEventListener('mouseenter', runEvent);
// clearbtn.addEventListener('mouseleave', runEvent);

// clearbtn.addEventListener('mouseout', runEvent); // Only fire when we get in inital parent main element
// clearbtn.addEventListener('mouseover', runEvent); // Only fire when we get out inital parent main element

//clearbtn.addEventListener('mousemove',runEvent); // Any Event inside the element will be detected. for games and interactions.

// EX Displaying coordinates of the mouse instead of title
console.log(heading.textContent)



// Simple Exercise to show the XY when inside button and normal heading when outside the button.
clearbtn.addEventListener('mousemove',showcoordinates)
// Event Handler
clearbtn.addEventListener('mouseout',showdefault)




function showcoordinates(e){

    console.log(`EVENT TYPE: ${e.type}`); // Returns evenet type
    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
    // e.preventDefault()
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`
}

function showdefault(e){

    console.log(`EVENT TYPE: ${e.type}`); // Returns evenet type
    heading.textContent = dfvalue;

    // e.preventDefault() 
}

