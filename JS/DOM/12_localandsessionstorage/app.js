// Persisting the data.

// Local Storage <Stays till removed>
    // Set local storage item
    // localStorage.setItem('name','John'); // Stores KV inside localstorage under application tab.
    // localStorage.setItem('age','21'); // Stores KV inside localstorage under application tab.



// Session Storage <stays till browser is closed>
    // Set Session storage item
    // sessionStorage.setItem('name','EBST')




// Removing the item from Storage
// localStorage.removeItem('name');

// get the item from Storage
// const name  = localStorage.getItem('name');
// const age  = localStorage.getItem('age');
//console.log(name,age)


// removing all clear
//localStorage.clear();


document.querySelector('form').addEventListener('submit',function(e){

    const task = document.getElementById('task').value
    console.log(task);

    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = []
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks')); // String
       
    }
    // Pusht the task from form here
    tasks.push(task);

    localStorage.setItem('tasks',JSON.stringify(tasks)) // Problems when new task is to be added it replaces and we can store only 1 task.
        // Create array of tasks and store them.


    // alert('Task Saved')
    e.preventDefault();

})



// Getting the data from the local storage
const tasks = JSON.parse(localStorage.getItem('tasks')) // Converted to the array
console.log(tasks)

tasks.forEach(function(task){
    console.log(task)
})