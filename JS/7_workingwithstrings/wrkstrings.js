const firstName = 'william';
const lastName = 'panchal';
const age = 23;

let val;

val = firstName + ' ' + lastName;
console.log(val);

//Appending
val = 'Yash ';
val += 'Panchal';
console.log(val);

val = "Hi I am " + val + " and I am " + age ;
console.log(val);


//Escaping

// val = 'That's awesome, I can't wait.'
val = "That's awesome, I can't wait." // Use double quotes
console.log(val);

val = 'That\'s awesome, I can\'t wait.' // Use backslash
console.log(val);


// Length
val = firstName.length; // () are for methods
console.log(val);

// concat(args) method 
val = firstName.concat(' ',lastName); // () are for methods
console.log(val);

// Change Case
val = firstName.toUpperCase(); // () are for methods
console.log(val);
val = firstName.toLowerCase(); // () are for methods
console.log(val);

//Index and arrays
val = firstName[0].toUpperCase(); 
console.log(val);



firstNaame = 'William';
//Index of the character

val = firstNaame.indexOf('l'); 
console.log(val);

//Index of the character

value = firstNaame.lastIndexOf('l');
console.log(value);


// Weird issue for letter a
//-----------------------------------------------------------
firstNaame = 'William';
//Index of the character

val = firstNaame.indexOf('a'); 
console.log(val);

//Index of the character

value = firstNaame.lastIndexOf('a');
console.log(value);
//-----------------------------------------------------------

//character at charAt()
value = firstNaame.charAt('0');
console.log(value);

// Using charAt() for getting last character
value = firstNaame.charAt(firstName.length-1);
console.log(value);

// Getting Substrings. substring()
value = firstNaame.substring(0,4);
console.log(value);

// Slice() similar to substring()
value = firstNaame.slice(0,4);
console.log(value);

// Slice() offers one adv to substring() where we can start from the end of the string.
value = firstNaame.slice(-2);
console.log(value);

// Split() Spits a string to array based on a separator.
const stri = "Hello My name is yash";
const x = stri.split(' ');
console.log(stri);
console.log(x);

// Split() Spits a string to array based on a % separator.
const strin = "Hello My% name is %yash";
const xx = strin.split('%');
console.log(strin);
console.log(xx);

// Replace
const replaced = firstName.replace('w','W');
console.log(firstName + ' is now ' + replaced);



// Includes for checking if something is inside of the string.
console.log(firstName.includes('iam'));


