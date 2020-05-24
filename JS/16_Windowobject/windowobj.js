// Node js runs as JS runtime standalone on the system.

// Client Side (Window) is a global object.
    // Check it out by typing window in browser console.

// Window Methods / Objects / Properties

// Following is also part of the window
// window.console.log(123);


// Alert
// window.alert('Hello World')
    // Try using bootstrap styled alerts instead of these old vars.

// Prompt
// const input = prompt()
// alert(input)

// Confirm
// if(confirm('Are You sure')){
//     console.log('Yes')
// } else {
//     console.log('No')
// }


// Outer height and width Currennt window height and width.

// cal = window.outerHeight;
// fal = window.outerWidth;
// console.log(cal,fal)

// cali = window.innerHeight;
// fali = window.innerWidth;
// console.log(cali,fali)

// Scroll Points

// val = window.scrollY;
// val2 = window.scrollX;
// console.log(val,val2)



// Location and History Object
val = window.location;
console.log(val.hostname)

// href window.location.href is a property from (window.location), it returns current url location in browser
// window.location.href;

// window.location.port;

// window.location.search;

// window.history.go(-1); Goes back 1 page of user history


// val = window.history.length; Returns no of sites behind as per browsing history


// Navigator Object

val = window.navigator; // Browser Details
val = window.navigator.platform; // USER OS
val = window.navigator.appName; // appName
val = window.navigator.appVersion; // appVersion
val = window.navigator.userAgent; // useragent
val = window.navigator.vendor; // vendor
val = window.navigator.language; // language

console.log(val)









