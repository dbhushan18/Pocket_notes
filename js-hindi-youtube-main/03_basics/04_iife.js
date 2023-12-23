// Immediately Invoked Function Expressions (IIFE)

// variables and functions, preventing them from polluting the global scope.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')


//******IIFE in javascript is one of the good ways to hide data from the global scope as it creates its own scope. 
//IIFE in javascript is used often while creating your own javascript library to avoid unnecessary conflicts like duplicate 
//variables and functions in the global scope.
