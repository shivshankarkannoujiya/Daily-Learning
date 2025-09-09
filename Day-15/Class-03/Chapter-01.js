const user = {
    name: "Piyush",
    email: "piyush@gmail.com",
    age: 25,
    password: "12345"
}


// We want user can not access: user.password
// Proxy

const proxyUser = new Proxy(user, {
    get(target, prop) {
        if (prop === `password`) {
            throw new Error(`Access Denied`)
        }
        return target[prop]
    },
    set(target, prop, value) {
        target[prop] = value
        return true
    }
})


// console.log(proxyUser.password);
// proxyUser["name"] = "Raman"
// console.log(proxyUser.name)


function negativeIndex(arr) {
    return new Proxy(arr, {
        get(target, prop) {
            const index = Number(prop)
            if (index < 0) {
                return target[target.length + index]
            }
            return target[index]
        },

        set(target, prop, value) {
            const index = Number(prop)
            if (index < 0) {
                target[target.length + index] = value
                return true
            }
            target[index] = value
            return true
        }

    })
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArray = negativeIndex(arr)

// console.log(newArray[-1]);
// newArray[-1] = 22;
// console.log(newArray)
// console.log(arr)



// TODO: Write a normal function that takes (arr, index) as parameter and enable the negative indexing

function enableNgativeIndexingGET(arr, index) {
    if (index < 0) {
        return arr[arr.length + index]
    }

    return arr[index]
}

function enableNgativeIndexingSET(arr, index, value) {
    if (index < 0) {
        arr[arr.length + index] = value
    } else {
        arr[index] = value;
    }

    return arr
}

// console.log(enableNgativeIndexingGET(arr, -1));
// console.log(enableNgativeIndexingSET(arr, -2, 20));

function enableNegativeIndexing(arr, index, value) {
    
    const realIndex = index < 0 ? arr.length + 1 : index

    if (value === undefined) {
        return arr[realIndex]
    } else {
        arr[realIndex] = value
        return arr;
    }
}

