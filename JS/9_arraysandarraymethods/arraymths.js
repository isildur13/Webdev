//Ways to create arrays
// First method
const Numbers = [12,324,53,532,231,123];

// Second method
const Numbers1 = new Array(12,324,53,532,231,123);

// String Array
const arr1 = ['asdasd','asdasdw','asdasdasdcxc','ascxxx'];

// Mixed Array
const arr2 = ['asdasd',123,'asdasdasdcxc',123123];

console.log(Numbers,Numbers1,arr1,arr2);
document.body.innerHTML = `<h1>${Numbers1}</h1>`


//Getting array length
console.log(arr2.length);

//Check if it is an array
console.log(Array.isArray(arr2));
x  = 'x'
//Check if it is an array
console.log(Array.isArray(x));

//Getting single value
    //Arrays are zero based 0,1,2,3,4,5,6,7....
console.log(arr2[3]);

//Insert into arrays
arr2[3]='123aasds'
console.log(arr2);

//Mutating Arrays

arr2.push(12312)
console.log(arr2);

//Adding to front unshift()
arr2.unshift('123aaa12','asd1a');
console.log(arr2);

//taking off from the end use pop()
console.log(Numbers);

//use .slice() to copy array values to another array and not reference them like
    // arr2 = arr1 this results in reference.
    // arr2 = arr1.slice() will copy array values .

Numbers_poped = Numbers.slice()
console.log(Numbers_poped);
Numbers_poped.pop();
console.log(Numbers);
console.log(Numbers_poped);



// Taking off values from the front use shift()

Numbers_shift = Numbers.slice()
console.log(Numbers_shift);
Numbers_shift.shift();
console.log(Numbers);
console.log(Numbers_shift);


// Removing certain values using their position

Numbers_splice = Numbers.slice()
console.log(Numbers_splice);
Numbers_splice.splice(1,3);
console.log(Numbers);
console.log(Numbers_splice);



// Reverse the array
Numbers_splice = Numbers.slice()
console.log(Numbers_splice);
Numbers_splice.reverse();
console.log(Numbers_splice);


// Concatenate array
val = Numbers_splice.concat(Numbers_splice);
console.log(val);

// Ascending Sort array using the compare function
Numbers_splice = Numbers.slice()
console.log(Numbers_splice);
Numbers_splice.sort(function(x,y){
    return x-y;
});
console.log(Numbers_splice);

// Reverse desc Sort array using the compare function
Numbers_splice = Numbers.slice()
console.log(Numbers_splice);
Numbers_splice.sort(function(x,y){
    return y-x;
});
console.log(Numbers_splice);

// Find numbers using conditions gives the first number 
function under20(num){
    return num < 60;
}
Numbers_splice = Numbers.slice()
console.log(Numbers_splice);

undercaa20 = Numbers_splice.find(under20)
console.log(undercaa20);







