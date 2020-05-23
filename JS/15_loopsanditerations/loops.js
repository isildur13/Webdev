// For loop

// var,condition,action

// For loop with continue..
for(let i=0;i<4;i++){

    if(i === 3){
     console.log(`${i} Here`) 
    continue; // Go to the next iteraion directly, Skip all the later stuff. escapes skips following unless the value is given
    }
    console.log(`${i}`)
}

// For loop with Break..
for(let i=0;i<10;i++){

    if(i === 1){
     console.log(`${i} Here`) 
    break; // Go to the next iteraion directly, Skip all the later stuff. escapes skips following unless the value is given
    }
    console.log(`${i}`)
}



// While loop


// Starts from the outside
let i = 0;

// Only condition goes in

while(i < 10){
    console.log(`Number is ${i}`);
    i++
}



// DO while loop runs atleast once.
    // Doesnot work with const works with let 
        //Reason as const cannot change while let can change within its scope.
let x  = 0;
do {
    console.log(`Number is ${x}`);
    x++;
}
while(x<10);



// Looping over arrays

const cars = ['f13','123','5teska']

for(let i = 0; i<cars.length;i++){
    console.log(cars[i])
}


// Best method for looping through an array
// forEach array loop
cars.forEach(function(current){
    console.log(current);
});


// MAP 
const users  = [
    {id:1,name:'yash'},
    {id:2,name:'yashp'},
    {id:3,name:'Terminator'},
    {id:4,name:'yaashp'},
]

// Creating array from users array of objects
const ids = users.map(function(user){
    return user.id;
});
console.log(ids)


// Getting names and setting index
users.forEach(function(car,index){
    console.log(`${index}:${car.name}`);
})

//Getting entire array
users.forEach(function(car,index,array){
    console.log(array);
})


// For in Loop

const userx = {
    firstName: 'Yash',
    lastName: 'Panch',
    age: 23

}

for(let x in userx){
    // results in keys 'console.log(x)'
    //getting object 
    console.log(`${x}: ${userx[x]}`)
}