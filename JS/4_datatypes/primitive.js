// Primitive Data Types
    //Strings
const name = "Yash";
console.log(name + " is a " + typeof name);

    //Numbers
const number = 123;
console.log(number + " is a " + typeof number);

    //Boolean
const boolean = false
console.log(boolean + " is a " + typeof boolean);


    //Null
const nullptr = null;
console.log(nullptr + " is a " + typeof nullptr);
        //Return type will be bogus object NUll pointer has 0 as typetag hence return type is object for just sake of it.

    //Undefined

let test;
console.log(test + " is a " + typeof test);


    //Symbol

const symbol = Symbol();
// console.log(symbol + " is a " + typeof symbol); Issues relating to symbols cannot being able to concatenate with strings.
console.log(typeof symbol);
    