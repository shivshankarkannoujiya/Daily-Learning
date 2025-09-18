/*
TODO: Implement an Event Emitter
Problem Statement:
    Design an EventEmitter class in JavaScript that supports the following methods:
        - on(event, listener): Subscribes a listener function to an event.
        - emit(event, ...args): Calls all listeners associated with that event, passing them the arguments.
        - off(event, listener): Removes a specific listener from an event.
        - once(event, listener): Registers a listener that runs only once.
    TODO: Study Observer Design Pattern
*/


class myEventEmitter {

    constructor() {
        // [event]: listener[]
        // "user:signup": [() => {}, () => {}]
        this.__event_listener = {}    
    }

    on(event, listener) {
        // Register the [listener] for [event]
        // Particular [event] fire hoga, call the listener [listener]
        if (!this.__event_listener[event]) {
            this.__event_listener[event] = []
        }

        this.__event_listener[event].push(listener)
        return true;
    }
    emit(event, ...args) {
        if (!this.__event_listener[event]) {
            return false
        }

        const listeners = this.__event_listener[event]
        listeners.forEach(listener => listener(...args))
    }

    off(event, listener) {
        if (!this.__event_listener[event]) {
            return false
        }

        const index = this.__event_listener[event].indexOf(listener)

        if (index !== -1) {
            this.__event_listener[event].splice(index, 1)
            return true
        }

        return false;
    }

    once(event, listener) {
        // Pehali baar chalo uske baad apne aap ko off kr lo
        const wrapperFn = (...args) => {
            listener(...args)
            this.off(event, wrapperFn) 
        }

        this.on(event, wrapperFn)
        return true
    }
}

const emitter = new myEventEmitter()

const sendWhatsApp = (username) => console.log(`WhatsApp to ${username}`)

// emitter.on(`user:signup`, (username) => console.log(`User ${username} Signup`) )
// emitter.on(`user:signup`, (username) => console.log(`Sending email to ${username}`) )
// emitter.on(`user:signup`,  sendWhatsApp)
// emitter.on(`user:logout`, (username) => console.log(`Log out ${username}`))

// TODO: once
emitter.on(`user:signup`, (username) => console.log(`User ${username} Signup`) )
emitter.on(`user:signup`, (username) => console.log(`Sending email to ${username}`) )
emitter.once(`user:signup`,  sendWhatsApp)
emitter.on(`user:logout`, (username) => console.log(`Log out ${username}`) )

// emitter.emit(`user:signup`, `@abhi`)
// emitter.emit(`user:signup`, `@abhi-1`)
// emitter.emit(`user:signup`, `@abhi-2`)
// emitter.emit(`user:signup`, `@abhi-3`)
// emitter.emit(`user:logout`, `@abhi`)

// TODO: off:
// emitter.emit(`user:signup`, `@abhi`)
// emitter.emit(`user:signup`, `@abhi-1`)
// emitter.emit(`user:signup`, `@abhi-2`)

// <IMPORTANT>: Iske baad jo bhi user signup krega usko [WhatsApp] nhi jayega
// Removed particular event listener [sendWhatsApp]
// emitter.off(`user:signup`, sendWhatsApp)

// emitter.emit(`user:signup`, `@abhi-3`)
// emitter.emit(`user:logout`, `@abhi`)

// TODO: once: <Run once: Mean yaha only one user ke liye run hoga>
emitter.emit(`user:signup`, `@abhi`)
emitter.emit(`user:signup`, `@abhi-1`)
emitter.emit(`user:signup`, `@abhi-2`)
emitter.emit(`user:signup`, `@abhi-3`)
emitter.emit(`user:logout`, `@abhi`)