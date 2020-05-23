const personobj = {
    firstName: 'Yash',
    lastName: 'Panchal',
    age: 30,
    email: 'pasda@qsdasdm',
    hobbies: ['sports','eating'],
    address:{
        city: 'miami',
        state: 'florida'
    },
    getbirthday: function(){
        return 1928 - this.age; //USe this keyword for accessign values from obj
    }
}

let personvalue;
console.log(personvalue)

// Gettting value from object  Method 1
personvalue = personobj.firstName;
console.log(personvalue)

// Gettting value from object Method 2
personvalue = personobj['lastName'];
console.log(personobj)
console.log(personvalue)

// Objects within Object method 1
console.log(personobj.address.city)

// Objects within Object method 2
console.log(personobj.address['city'])

// Functions
console.log(personobj.getbirthday())

// Arrays
console.log(personobj.hobbies[1])

// We can access other properties within objects
    // using this keyword.

// Objects within an Array.
const people = [
    {name: 'yash', age: 30},
    {name: 'yashp', age: 10},
];

for(let i=0;i<people.length;i++){

    console.log(`Name is ${people[i].name} age is ${people[i].age}`)

}
