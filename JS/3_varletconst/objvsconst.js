const person = {

    name: 'Yash',
    age: '23'

}

console.log(person);
person.name = 'hello';
console.log(person);
console.log(person.name);

// We can change the values assigned to the const objects but we cannot simply reassing the const object

numberlist = [1,2,3,4,5];
console.log(numberlist);
numberlist.push(12);
console.log(numberlist);
numberlist = [123,4,213]
console.log(numberlist);
// Here we can because the type is not const.

const numberlistconst = [1,2,3,4,5];
console.log(numberlistconst);
numberlistconst.push(12);
console.log(numberlistconst);
numberlistconst = [123,4,213]
console.log(numberlistconst);


// Use const in most cases for security and robustness unless needed to be modified.

