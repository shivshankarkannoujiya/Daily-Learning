
const resolveButton = document.getElementById(`resolve`)
const rejectButton = document.getElementById(`reject`)

const myPromise = new Promise((resolve, reject) => {
    resolveButton.addEventListener(`click`, function () {
        resolve(`My promise is reslved`)
    })
    rejectButton.addEventListener(`click`, function () {
        reject(`My promise is rejected`)
    })
})

myPromise
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.log(`ERROR RESOLVING PROMISE: `, error)
    })

// TODO: Create a Promise without using `new`
// Ans: async function

// TODO: module scope, global scope, script scope, function scope

