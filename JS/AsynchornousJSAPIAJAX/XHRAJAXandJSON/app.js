document.getElementById('stock').addEventListener('click',loadstock)
document.getElementById('stocks').addEventListener('click',loadstocks)

// Wrap the Keys and values in double quotes "" in .json file
function loadstock(){

    const xhr = new XMLHttpRequest();
    xhr.open('GET','stocks.json',true)

    xhr.onload = function(){
        if(xhr.status === 200){
            
            const stock = JSON.parse(this.responseText)//COnverting the JSON string data to JSON object

            const output = `
            <ul>
            <li>id: ${stock.id}</li>
            <li>ticker: ${stock.ticker}</li>            
            <li>lastprice: ${stock.lastprice}</li>      
            <li>company: ${stock.company}</li>              
            </ul>`

            document.getElementById('output').innerHTML = output
        }else{

        }


    }
    xhr.send()
}


function loadstocks(){

    const xhr = new XMLHttpRequest();
    xhr.open('GET','stocks.json',true)

    xhr.onload = function(){
        if(xhr.status === 200){
            
            const stocks = JSON.parse(this.responseText)//COnverting the JSON string data to JSON object


            let output; // Defined the empty var for storing the looped data
            stocks.forEach(function(stock){
            
                // Appending the looped data to output var defined earlier
            output += ` 
            <ul>
            <li>id: ${stock.id}</li>
            <li>ticker: ${stock.ticker}</li>            
            <li>lastprice: ${stock.lastprice}</li>      
            <li>company: ${stock.company}</li>              
            </ul>`

            })

            document.getElementById('output').innerHTML = output // Storing the Output in the DOM



        }else{

        }


    }
    xhr.send()
}