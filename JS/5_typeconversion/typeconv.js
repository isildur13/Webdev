// Converting Number to String


val = 10;
console.log(val);
console.log(typeof val);
console.log(val.length); // Only works on sting

val = String(val);
console.log(val + " has a type of " + typeof val);

console.log(val.length); // Only works on string

time = new Date();
console.log(time + " has a type of " + typeof time);
time = String(time);
console.log(time + " has a type of " + typeof time);
console.log(time + " has length of " + time.length);

array1 = [1,2,3,4,5]
console.log(array1)
console.log(array1 + " has a type of " + typeof array1);
array1 = String(array1);
console.log(array1 + " has a type of " + typeof array1);
console.log(array1 + " has length of " + array1.length);
//Commas are included in arrays as part of length if array obj is converted to string

console.log(array1[0], array1[1], array1[2],array1[3], array1[4], array1[5],array1[6], array1[7], array1[8],array1[9], array1[10]);




//Converting Strings to Numbers.
string1 = '12';
console.log(string1 + " has type of " + typeof string1 + ' with length of ' + string1.length);

string1 = Number(string1)
console.log(string1 + " has type of " + typeof string1 + ' with length of ' + string1.length);

string1 = string1.toFixed()
console.log(string1 + " has type of " + typeof string1 + ' with length of ' + string1.length);

//Specifying decimals. .toFixed()
number1 = '123'

number1 = Number(number1)
console.log(number1 + " has type of " + typeof number1 + ' with length of ' + number1.length);

number1 = number1.toFixed();
console.log(number1 + " has type of " + typeof number1 + ' with length of ' + number1.length);

//Passing booleans to numbers
number2 = true
console.log(number2 + " has type of " + typeof number2 + ' with length of ' + number2.length);

number2 = Number(true)
console.log(number2 + " has type of " + typeof number2 + ' with length of ' + number2.length);


//Passing null to number

number3 = null
//console.log(number3 + " has type of " + typeof number3 + ' with length of ' + number3.length);

console.log(number3 + " has type of " + typeof number3 + ' with length results to error');

number3 = Number(number3)
console.log(number3 + " has type of " + typeof number3 + ' with length of ' + number3.length);
// Null shows 0 when passed with number

//Passing a String to number
number4 = 'hello'
console.log(number4 + " has type of " + typeof number4 + ' with length of ' + number4.length);

number4 = Number(number4)
console.log(number4 + " has type of " + typeof number4 + ' with length of ' + number4.length);


//Passing a array to number
number5 = ([1,2,3,4]);
console.log(number5 + " has type of " + typeof number5 + ' with length of ' + number5.length);

number5 = Number(number5)
console.log(number5 + " has type of " + typeof number5 + ' with length of ' + number5.length);


// Parse int function.

value  = parseInt('100');
console.log(value + " has type of " + typeof value + ' with length of ' + value.length);

value  = parseInt('100.020');//parse float for decimals
console.log(value + " has type of " + typeof value + ' with length of ' + value.length);

value  = parseFloat('100.020');//parse float for decimals
console.log(value + " has type of " + typeof value + ' with length of ' + value.length + ' Modifying decimals ' + value.toFixed(4));


//Adding two numbers

const value1 = 2;
const value2 = 3;

const sum = value1 + value2;
console.log("Adding " + value1 + " + " + value2 + " equals " + sum);

//Adding two numbers with different types
    //Changes the num 2 to string and concatenates it with other one.
const value3 = String(2);
sum21 = value1 + value3;
console.log("Adding " + value1 + " + " + value3 + " equals " + sum21);

// Converting the numbers.
sum21 = Number(value1) + Number(value3);
console.log("Adding " + value1 + " + " + value3 + " equals " + sum21);
