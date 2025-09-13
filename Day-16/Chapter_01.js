/**
 * 
    User hitting same endpoint of our API continuously
    But, we want to take only last request. 
    eg: Input box
 */

function debouunce(fn, delay) {
    let myId;
    return function (...args) {
        clearTimeout(myId)
        myId = setTimeout(() => {
            fn.apply(this, args)
        }, delay * 1000)
    }
}

function greet(name) {
    console.log(`Hello, ${name}`)
}

const callDebouncedFunction = debouunce(() => greet(`Piyush`), 3)
callDebouncedFunction()
callDebouncedFunction()
callDebouncedFunction()
callDebouncedFunction()
