// String 

const name1 = 'Jeff' // Setting primitive value.
const name2 = new String('Jeff') // Using an object// Generally stay away from these as they'll slow down lil bit

//name2.foo = 'bar' // appending to the string object
console.log(name1,name2)


//  === will check type while == checks value alone.
// if(name2 === 'Jeff'){
//     console.log('YES')
// }else{
//     console.log('NO')
// }


// Numbers

const num1 = 5;
const num2 = new Number(5);
console.log(num1,num2)

// Boolean

const bool1 = true;
const bool2 = new Boolean(true);
console.log(bool1,bool2)

// Function
// Approach 1
const getSum1 = function(x,y){
    return x + y;
}
console.log(getSum1(1,3))

// Approach 2
const getSum2 = new Function('x','y','return x+y') // Function(args,Body)
console.log(getSum2(1,3))


// Objects
// Approach 1
const john = {name:'john'}
console.log(john)

// Approach 2
const john1 = new Object({name:'john'})
console.log(john1)


// Arrays
const arr1 = [1,2,3,4,5];
const arr2 = new Array(1,2,3,4,5);
console.log(arr1,arr2)


// RegEXP constructors

const re1 = /\w+/; //Wrap it in // 
const re2 = new RegExp('\\w+') // Escape the characters like \ with \
console.log(re1,re2)



