const theadid = document.getElementById('theadid')
const theadidata = document.getElementById('theadbody')

console.log(theadidata)

const hrx = new XMLHttpRequest();

hrx.open('GET','https://api.census.gov/data/2015/ase/cscbo?get=NAME,NAICS2012_LABEL,ASECBO,ASECBO_LABEL,ACQBUS,ACQBUS_LABEL,YEAR,OWNPDEMP,OWNPDEMP_PCT,OWNPDEMP_S,OWNPDEMP_PCT_S&for=us:*',true)

// const elem1 = document.createElement('th')
// const elem1text = document.createTextNode("Adas")
// elem1.appendChild(elem1text)
// theadid.firstElementChild.appendChild(elem1)

// console.log(theadid.firstElementChild)

hrx.onload = function(){

    const data = JSON.parse(this.responseText)

    data[0].forEach(function(heading){
        // console.log(heading)

        const elem1 = document.createElement('th')
        const elem1text = document.createTextNode(`${heading}`)
        elem1.appendChild(elem1text)
        theadid.firstElementChild.appendChild(elem1)

        // console.log("EnD of Heading")
    })    

    data.forEach(function(da){
        
        console.log("Component")
       
        da.forEach(function(text){
            // console.log(text)
            
            const tablerowdata = document.createElement('td')
            const tablerowdatatext = document.createTextNode(`${text}`)
            tablerowdata.appendChild(tablerowdatatext)
            console.log(tablerowdata)

            data.appendChild(da)
            // const elem1 = document.createElement('td')
            // const elem1text = document.createTextNode(`${text}`)
            // elem1.appendChild(elem1text)
            // theadidata.firstElementChild.appendChild(elem1)
            
        })
        tablerow.appendChild(tablerowdata) 

        console.log("//Component")

    })


}

hrx.send()