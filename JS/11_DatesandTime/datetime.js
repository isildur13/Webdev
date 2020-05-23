// Creating a Date object
let date = new Date();
console.log(date);  

// html = `${date}`;
// document.body.innerHTML = html

// Setting date values and time values
let birthday = new Date('08-14-1997 05:48');
console.log(birthday);  

// Setting date values and time values Method 2
birthday = new Date('September 10 1812');
console.log(birthday);  

// Go to MDN for Depth of functions

// Starts from 0
value = date.getMonth();
console.log(value);

//Getting Date
value = date.getDate();
console.log(value);

//Getting Day 
value = date.getDay();
console.log(value);

// Year
value = date.getFullYear();
console.log(value);

// Hours
value = date.getHours();
console.log(value);

// Hours
value = date.getMinutes();
console.log(value);

//Seconds
value = date.getSeconds();
console.log(value);

//MilliSeconds
value = date.getMilliseconds();
console.log(value);

//Time pass till
value = date.getTime();
console.log(value);



let bday;
bday = new Date('January 1 1990')

console.log(bday);
// Setting Month using function 0 to 11
bday.setMonth(11);
console.log(bday);

// Set Date
bday.setDate(11);
console.log(`Setting Date to 11 ${bday}`);

// Set FullYear
bday.setFullYear(11);
console.log(`Setting Full Year to 11 ${bday}`);

// Set Hours
bday.setHours(11);
console.log(`Setting Hours to 11 ${bday}`);

// Set MInutes
bday.setMinutes(11);
console.log(`Setting Minutes to 11 ${bday}`);

// Set Seconds
bday.setSeconds(11);
console.log(`Setting Seconds to 11 ${bday}`);


// Set Milliseconds
    // Can only be set if Seconds are set..
bday.setMilliseconds(11);
console.log(`Setting Milliseconds to 11 ${bday}`);


