// Event Bubbling
    // All events are fired because of the first event.

let vara;
let varacont;

// varacont = document.querySelector('.card-content').textContent
// vara = document.querySelector('.card').textContent
// varacard = document.querySelector('.card').textContent
// document.querySelector('.card-title').addEventListener('click',
// //console.log(vara)
// function(){

//     console.log('card title');

// });

// document.querySelector('.card-content').addEventListener('click',
// //console.log(vara)
// function(){

//     console.log('card content');

// });

// document.querySelector('.card').addEventListener('click',
// //console.log(vara)
// function(){

//     console.log('Card');

// });

// document.querySelector('.col').addEventListener('click',
// //console.log(vara)
// function(){

//     console.log('col');

// });


// Event Delegation (Opposite of the Bubbling)

// const delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click',delitem);

// Choosing parent

document.body.addEventListener('click',delitem);

function delitem(e){

    // // console.log('Delete Item');
    // console.log(e.target);
    // if(e.target.parentElement.className === 'delete-item secondary-content'){
    //     console.log('delete Item');
    // }else{

    // }

    // The best way to remove the element.
    if(e.target.parentElement.classList.contains('delete-item')){
        console.log('delete Item');
        e.target.parentElement.parentElement.remove()
    }else{
    
    }
    

}



