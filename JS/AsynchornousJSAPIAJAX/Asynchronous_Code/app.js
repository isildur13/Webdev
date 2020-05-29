//Synchronous Code
posts = loadPostSync(); // Blocking code
// Wait till posts are fetched
// Do something with posts
doNEXTTHING();


// Asynchronous Code

loadPostAsync(function(){ // Passing callback function
    // Wait till posts are fetched
    // Do something with the posts
});
doNEXTTHING(); // Doesn't have to wait till posts are loaded

