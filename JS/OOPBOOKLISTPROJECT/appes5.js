// Book Constructor
    // Creating book obj

function Book(title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
    // Prototype methods for showing removeing and deleting books from ui

function UI(){}
    // Prototyping 
    UI.prototype.addBookToList = function(book){

        const list = document.getElementById('book-list');

        // Create tr Element
        const row = document.createElement('tr');

        // Insert Cols
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
        `
        list.appendChild(row);
        console.log(row);
    }

    // Show Alerts

    UI.prototype.showAlert = function(message, className){

        // Create the alert element.
        const div = document.createElement('div');

        div.className = `alert ${className}`;

        // Add text
        div.appendChild(document.createTextNode(message));

        // Insert div to the DOM
            // Get parent

            const container = document.querySelector('.container');
            const form = document.querySelector('#book-form');
            container.insertBefore(div,form); // Insert div before form inside container

            // Disaapear after 3s
            setTimeout(function(){
                document.querySelector('.alert').remove()
            },3000)
    }


    // Clear Fields
    UI.prototype.clearFields  = function(){
        document.getElementById('title').value = ''
        document.getElementById('author').value = ''
        document.getElementById('isbn').value = ''
    }

    // Delete Book
    UI.prototype.deleteBook = function(target){

        if(target.className === 'delete'){ // We are using the class of the created element from addBookList prototype.
            target.parentElement.parentElement.remove();
        }
    }




// Event Listener for add Book

document.getElementById('book-form').addEventListener('submit',function(e){


    // Getting Form Values
    const title = document.getElementById('title').value,
     author = document.getElementById('author').value,
     isbn = document.getElementById('isbn').value

     const book = new Book(title,author,isbn); // Instantiating a book Object
     //console.log(book)

     // Instantiate UI object

     const ui = new UI();

    // Validate the input

    if(title === '' || author === ''|| isbn === ''){

        // Error alert
        ui.showAlert('Please fill all Fields','error');
        
    }else {

     // Add book to list
     ui.addBookToList(book);

     ui.showAlert('Book Added!','success')
     // Clear fields
     ui.clearFields();


    }




    // console.log(title,author,isbn)
    e.preventDefault();

})



// Event Listener for delete


document.getElementById('book-list').addEventListener('click',function(e){

    // Instantiate UI
    const ui = new UI();
    
    // Delete Book using prototype
    ui.deleteBook(e.target);
 
    // Show Alert
    ui.showAlert('Book Removed','success')
 
    e.preventDefault();

});


