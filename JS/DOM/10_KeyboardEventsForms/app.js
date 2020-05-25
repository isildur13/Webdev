// Keyboard and Input events

const form = document.querySelector('form')
const taskInput = document.getElementById('task')
// form.addEventListener('submit',runEvent);
const heading = document.querySelector('h5')
const select  = document.querySelector('select')


taskInput.addEventListener('keydown',runEvent)// When holding any key

taskInput.addEventListener('blur',runEvent)// Blur 
taskInput.addEventListener('focus',runEvent)// Focus 
taskInput.addEventListener('cut',runEvent)// Cut
taskInput.addEventListener('copy',runEvent)// Copy 
taskInput.addEventListener('paste',runEvent)// Paste 

taskInput.addEventListener('input',runEvent)// Fires for any input 

//Change uncomment the materialize css

select.addEventListener('change',runEvent) 

// For materialize we need to add jquery for adding options select list
    // disable the materialize


function runEvent(e){

     console.log(`EVENT TYPE: ${e.type}`);
 
    // Get input Value
    // console.log(taskInput.value);
    console.log(e.target.value);

    heading.innerText = e.target.value
    
    // taskInput.value = ''
    // e.preventDefault()    


}