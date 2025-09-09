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
