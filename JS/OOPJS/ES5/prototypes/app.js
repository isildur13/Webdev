// Porototypes..
    // Each object has a prototype
    // Prototype is an object in itself.
    // All objects inherit properties fromt their prototypes.


// For Object literals inherit is done from Object.prototype



// For Constructor it comes from the constructor holder parent.prototype

function Person(firstName,lastName,dob){
    this.firstName = firstName; // Should be actual property
    this.lastName = lastName; // Should be actual property
    this.birthday = new Date(dob); // Should be actual property
   


// Should be inside prototype and not a property as it is same for all objs.  
// This will ensure that we do not flood the functions.
    // this.calculateAge = function(){
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970)
    // }
}

// Setting prototype.
Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970)
}

Person.prototype.getFullName = function(){

    return `${this.firstName} ${this.lastName}`
}


// Setting data using protoypes.
// Get Married

Person.prototype.getsMarried = function(newLastName){
    this.lastName = newLastName;
}

const yash = new Person('Yash','Panchal','Aug 14 1997')
const mary = new Person('Mary','Slovakiya','Aug 14 1997')

mary.getsMarried('Panchal') // Execute the prototype functions.

console.log(yash.getFullName(),mary.getFullName())



// hasOwnProperty() Checks for the properties in an obj
console.log(mary.hasOwnProperty('firstName'))// Part of mary
console.log(mary.hasOwnProperty('firtName'))// Not part of mary