// EventListeners : Interaction with UI
    // Events


// Select the element
let val;

val = document.querySelector('.clear-tasks')

// Due to default behaviour of some elements the output quickly flashes.
        // We'll need to disable the default response.  
            // add '#' to href in case of button/links
            // stop the default behaviour using e parameter(event object) e.preventDefault();

// Functions can be implemeneted as default function as follows:- 
    // Or via built in functions.

        // Example of Defaukt function Approach.

// val.addEventListener('click',function(e){

//     console.log('Clear Button Clicked')
    
//     e.preventDefault();
    
// })

val.addEventListener('click',onclick)

function onclick(e){
    console.log('Clicked')
    let val = e;
    e.preventDefault();
    // Closer look at event object
        // Gives us information as to when where and how the event got executed
        // targets are also included.
    
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;
   
   
    val = e.target.innerText = 'ElSo'; // Changes button text
    
    // Event Type

    val = e.type;
    
    // Timestamp
    val = e.timeStamp;

    // Getting Coordinates relative to window
    val = e.clientY; // From Top
    val = e.clientX; // From Left
    
    
    // Getting Coordintes relative to element
    val = e.offsetY;
    val = e.offsetX;
    

    console.log(val);
    
}
// val.addEventListener('mouseover',onclick)

// function onclick(e){
//     console.log('Mouseover')
//     let val = e;
//     e.preventDefault();
//     // Closer look at event object
//         // Gives us information as to when where and how the event got executed
//         // targets are also included.
    
//     val = e.target;
//     val = e.target.id;
//     val = e.target.className;
//     val = e.target.classList;
   
   
//     val = e.target.innerText = 'Mouseover'; // Changes button text
    
//     // Event Type

//     val = e.type;
    
//     console.log(val);
    
// }





console.log(val)

