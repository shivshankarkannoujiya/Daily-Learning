// TODO: DEBOUNCE: Create a factory funtion that return the debounced Version of a particular function

function debounce(fn, delay) {
    let timerId;
    return function (...args) {
        clearTimeout(timerId) // cancel the last call
        timerId = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}

const search = (query) => {
    console.log(`Searching for: `, query)
}

searchWithDebounce = debounce(search, 2 * 1000);

searchWithDebounce(`H`)
searchWithDebounce(`Ha`)
searchWithDebounce(`Har`)
searchWithDebounce(`Hard`)
searchWithDebounce(`Hard `)
searchWithDebounce(`Hard J`)
searchWithDebounce(`Hard Js`)