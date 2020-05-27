// Sub Classes and Inheritance


class Person{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting(){
        return `Hey there ${this.firstName} ${this.lastName}`
    }

}


class Customer extends Person{
    constructor(firstName,lastName,phone,addr){
        super(firstName,lastName)
        this.phone = phone;
        this.addr = addr;
    }
    static getMembershipCost(){
        return 500;
    }
}


const john = new Customer('John','Wick','123123','Home')
console.log(john)
console.log(john.greeting()) // Using super class greeting() method.

console.log(Customer.getMembershipCost()) // Using classname for using static method
