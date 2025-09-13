// Throatling: Sabr kro

const ptaNhi = (fn, delay) => {
    let myId = null
    return (...args) => {
        if (myId === null) {
            fn(...args)
            myId = setTimeout(() => {
                myId = null
            }, delay * 1000)
        }
    }
}

const sayHi = ptaNhi(() => console.log(`Hii`), 2)

sayHi()
sayHi()
sayHi()

