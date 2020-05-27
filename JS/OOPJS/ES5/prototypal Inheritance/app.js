// Person constructor

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    
}



// Greeting 

Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('Yash','Panchal')

console.log(person1.greeting())


// Customer Constructor

function Customer(firstName, lastName, phone,mem){
    // Inheriting properites from a Constructor.
    Person.call(this,firstName,lastName)// Calling the Person constructor and get the firstName, lastName from it.
    this.phone = phone;
    this.mem = mem;
}

// Inherit the Person Prototype methods.
    // Will inherit all the prototype methods to Customer prototype from Person prototype.
Customer.prototype = Object.create(Person.prototype);

// Make Customer.prototype return Customer
Customer.prototype.constructor = Customer;


// Customer Greeting
// Modifying the inherited protoype based on requirement.
Customer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
}


// Create a customer

const cusst1 = new Customer('yp','nigga','69696','12312312312','std')

console.log(cusst1.greeting())
console.log(person1.greeting())
console.log(cusst1)