// Global Scope

var a = 1
let b = 2
const c = 3

function test(){

    var a = 4
    let b = 5
    const c = 6

    console.log("Function scope: ",a,b,c)    
}
console.log("global scope: ",a,b,c)



test()


// Block Level Scope
    // If statement anything wrapped in {}
    console.log("global scope: ",a,b,c)



// if(true){
//     var a = 4
//     let b = 5
//     const c = 6

//     console.log("IF SCiope Function scope: ",a,b,c)    
    
// }
// a variable was changed to the assigned value inside if block scope.



for(let a=0;a<10;a++){ // using let does not change global a
    console.log(a);
}
console.log("global scope: ",a,b,c)

for(var a=0;a<10;a++){ // using var changes global a
    console.log(a);
}
console.log("global scope: ",a,b,c)








// let and const similar to the other languages
// var 

