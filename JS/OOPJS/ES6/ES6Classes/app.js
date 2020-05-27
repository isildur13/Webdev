class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }
    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`
    }
    calculateAge(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear()-1970);
    }
    getsMarried(newLastname){
        this.lastName = newLastname;
    }

    // Static Methods: (Methods without instatiating objects are known as static methods)
    static addNumbers(x,y){
        return x+1;
    }

}

const mary = new Person('Mary','Williams','11-11-2011');
console.log(mary.greeting());
console.log(mary.calculateAge());
mary.getsMarried('Jackie')
console.log(mary.greeting());
// mary.addNumbers(1,2) // Error
// Use Classname.STATICMETHOD for using the STATIC METHOD.
console.log(Person.addNumbers(1,2));





