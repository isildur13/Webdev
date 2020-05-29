document.getElementById('button').addEventListener('click',loadData);

function loadData(){

// Creating an XHR OBJECT
const xhr = new XMLHttpRequest();// Instantiating like anyother object
console.log("READYSTATE after Obj creation",xhr.readyState) // Check Ready state


// Use OPen property // specify the req type and path 
xhr.open('GET','data.txt',true);
console.log("READYSTATE After txt open",xhr.readyState)




// Optional for spinners
xhr.onprogress = function(){
    console.log('READYSTATE On Progress',xhr.readyState)
}



xhr.onload = function(){
    console.log("READYSTATE",xhr.readyState) // Check Ready state
    // 1) Check the status of the request
    if(this.status === 200 && this.readyState === 4){
        console.log(this.responseText);
        document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`        
    }else{

    }
}



// Check for errors when something goes wrong..
xhr.onerror = function(){
    console.log('Request Error...')
}



xhr.send() // This is requred for sending the request.

// Ready state values: 
// 0 not initialized.
// 1 conn established.
// 2 req received.
// 3 Processing request.
// 4 Request finished and response is ready.


}