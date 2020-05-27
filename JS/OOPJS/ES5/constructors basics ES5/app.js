// Constructors ES5

// Object and Object Literal
// const brad = {
//     name: 'brad',
//     age: '21'
// }
// console.log(brad.age)


// Creating a constructor
// Starts with Capital
    // Person


// function Person(Name,Age){
//     this.name = Name, // this keyword refers to the current instance of the object
//                         // Here it pertains to the Person. 
//     this.age = Age
//     // console.log(this) // Retuns the Obj
// }


// console.log(this.alert) // Scope is the Window.
// Instatiate the Object from the constructor

// const brad = new Person('Yash',21);
// const braad = new Person('Ga',23);


// console.log(brad,braad)

// Finding the age using OOP
function Person(name, dob){
    this.name = name;
    this.birthday = new Date(dob);
    // Creating method
    this.computeAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}
const yash = new Person('Yash','August 14 1997')
console.log(yash.computeAge())


