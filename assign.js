//%%javascript

/*
    The function "getRoot" calculates square-root of a given value via an API call.
    Complete the function "getRootList", that extends this ability to a list of values.
    All square-root calculations must be done using pre-defined "getRoot" function.
*/

// #@title Define getRoot (intentionally hidden)
// %%javascript
// This hides the getRoot function code from the user to prevent mis-understandings
// You are requested to not read, copy or modify these lines.
(localStorage.setItem('hidden', `
    // Do not edit this function. Treat this as a "black-box".
    let responseTime = 100 * Math.random(); // This can take an arbitrarily large amount of time.
    // response time of server is random in real life.
    let response = Math.sqrt(value); // assume this is evaluated in the server
    setTimeout(() => {
        callbackfn(response);
    }, responseTime);
`));
 //eval(localStorage.getItem('hidden'));
 //getRoot(25, (x) => (console.log(x==5 ? "Successfully defined getRoot" : "Some Error.")) );

function getRoot(value, callbackfn){
    // DO NOT MODIFY/COPY THIS FUNCTION
    // This simulates an API call where the browser fetches the square root of a number from the server.
    // After the server returns the answer, callbackfn is called with the answer as the argument.
    executable = localStorage.getItem('hidden');
    if (executable == null){
        console.log("Do Menu -> Runtime -> Run all");
    }
    else{
        eval(executable); // intentionally hidden logic.
    }
}


// demonstration of pre-defined "getRoot"
getRoot(9, console.log) // this prints "3" in the console.


function getRootListInvalid(valueList, callbackfn){
    // DO NOT MODIFY/COPY THIS FUNCTION
    // Following is invalid because it did not use "getRoot" to calculate roots.
    callbackfn(valueList.map(Math.sqrt))
}

// demonstrates the correct behaviour
getRootListInvalid([1, 4, 9], console.log)


function getRootList(valueList, callbackfn){
    // takes a list of numbers, calculates root using predefined "getRoot", calls the callbackfn with the result list.
    console.log('this is my code')
    getRootListInvalid(valueList, callbackfn)
}


getRootList([9, 1, 16, 1, 25, 81], console.log) // Should print [3, 1, 4, 1, 5, 9] in the console of this browser.

/*
All code must be written inside this cell, results will appear in your browser's developer console.
In case of any issues, go menu -> Runtime -> Restart and run all
*/