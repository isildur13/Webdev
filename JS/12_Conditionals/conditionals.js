const id = '100';

if(id == 100){
    console.log("ID IS 100");
} else if(id == 102) {
    console.log("ID IS 102");
}else {
    console.log("asda")
}

// Most times we need to test value and the type.
// Equal to Value and Type.

if(id === 100){
    console.log("ID IS 100");
} else if(id === 102) {
    console.log("ID IS 102");
}else {
    console.log("asda") // Because the type is not digit.
}

if(id !== '100'){
    console.log("ID IS 100");
} else if(id === 102) {
    console.log("ID IS 102");
}else {
    console.log("asda") // Because the type is not digit.
}


const yello = 'Caren'
// Using if else for type
if(yello){
    console.log("Caren is rhere")
}else{
    console.log("Nothin")
}

// Checking the typeof for a variable.
if(typeof yello !== undefined){
    console.log("Caren is Present")
}else{
    console.log("Caren is not defined yet..")
}

const yellon = 123;
// Greater than or less than
if(yellon >= 1000){ 
    console.log("Correct")
}else{
    console.log("INcorrect")
}

// Logical Operators 

    // && AND
const name = 'steve'
const age = 10

if(age > 0 && age < 12){
    console.log(`${name} is a child.`)
}else if(age >=12 && age <=19){
    console.log(`${name} is a teenager.`)
}else{
    console.log(`${name} is an Adult.`)
}

    // || OR

if(age >= 16 ||  age < 65){
    console.log(`${name} is a Adult.`)
}else{
    console.log(`${name} is an Kid or an Oldman.`)
}
    

// Ternary Operator
    // Shorthand way of doing conditionals.
    // CONDITION ? EXECUTES IF TRUE  : EXECUTES IF FALSE
ieed = 100;
console.log(ieed === 100 ? 'Correct' : 'Incorrect');


// In Javascript {} are optional and things can work but it is better to use {}









