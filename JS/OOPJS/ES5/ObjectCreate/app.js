const personPrototypes = {
    greeting: function(){
        return `Hello There ${this.firstName} ${this.lastName}`
    },
    getsMarried: function(newLastName){

        this.lastName = newLastName;
    
    }
}
// Creating Object from the Prototype.
const mary = Object.create(personPrototypes);

// Adding props to mary obj
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 20;

mary.getsMarried('Panchal')


console.log(mary.greeting()) 

const yash = Object.create(personPrototypes, {
    firstName: {value: 'Yash'},
    lastName: {value: 'Panchal'},
    age: {value:22}
});

console.log(yash)

console.log(yash.greeting())