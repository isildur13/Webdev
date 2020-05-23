const Fname = 'Yash';
const Lname = 'Panchal';
const Job = 'Developer';
const City = 'Mumbai';
const age = 32;
let html;

//without using templates. ES6 method.
html = '<ul><li>First Name: ' + Fname + '</li><li>Last Name: ' + Lname + '</li><li>City: ' + City + '</li><li>Job: ' + Job + '</li></ul>'
document.body.innerHTML = html;
// TEDIOUS AND ANNOYING APPROACH ^^^^^


function hello(){
    return 'hello';
}

//With template strings (es6)
html1 =  `
        <ul><li>First Name: ${Fname} 
        </li><li>Last Name: ${Lname}  
        </li><li>City: ${City} 
        </li><li>Jobs: ${Job} 
        </li><li> ${2+2}
        </li><li> ${hello()}
        </li><li> ${age > 30 ? 'Over 30' : 'Under 30 '}
        </li></ul> `;

document.body.innerHTML = html + html1 ;


