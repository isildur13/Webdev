// Chuck Norris Jokes
// Every API is different and they all have their own documentation.
// http://api.icndb.com/jokes/random/3

document.querySelector('.get-jokes').addEventListener('click',getJokes);


function getJokes(e){
    const number = document.querySelector('input[type="number"]').value;

    const xhr = new XMLHttpRequest();
    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true)
    
    
    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.responseText); // Json String to be converted to JSON object
            console.log(response.value)

            let output = ``
            console.log(response.type)
            if(response.type === 'success'){
                response.value.forEach(function(joke){
                    output += `<li>${joke.joke}</li>`
                })
            }else{
                output += `<li>Something Went Wrong Error</li>`
            }

            document.querySelector('.jokes').innerHTML = output;

        }
    }
    
    xhr.send();
    // console.log('Getting Jokes');

    e.preventDefault();
}