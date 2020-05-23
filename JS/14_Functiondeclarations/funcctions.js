function greeat(){

    // console.log('Hello')
    return 'Hello';
}
console.log(greeat());



// Parameters and Args
function greet(firstName){

    // console.log('Hello')
    return `${firstName}`
}
console.log(greet('asd'))


// Concatenating Return
function greeti(firstName){

    // console.log('Hello')
    return 'Hello ' + `${firstName}`
}
console.log(greeti('asd'))

// Concatenating Return
function greetia(firstName,lastName){

    // console.log('Hello')
    return lastName  + ` ${firstName}`
}
console.log(greetia('asd','asdas'))

// Setting Default

function greetiaa(firstName = 'Yash',lastName = 'Panchal'){

    // console.log('Hello')
    return lastName  + ` ${firstName}`
}
console.log(greetiaa('asdas'))


// Function Expressions
function squar(x=0){

    // console.log('Hello')
    return x*x
}
console.log(squar(2))




// Immediately invokeable function expressions
    // IIFEs (Declared and Run at the same time.)
// ISSUES WITH IFFIEs
// (function(){
//     console.log('IFFE RAN...');
// })();


// Property Methods

const todo = {
    // Declaring functions inside
    add: function(){
        console.log('ADD TODO');
    },
    edit: function(id){
        console.log(`EDITING>> TODO ${id}`);
    }
}
todo.add();
todo.edit(12);


// Defining functions outside
todo.delete = function(){
    console.log('DELETING<>>>>>>');
}

todo.delete();