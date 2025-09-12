class myPromise {
    constructor(executorFN) {
        this._state = `pending`
        this._successCallbacks = []    
        this._errorCallbacks = []
        this._finallyCallbacks = []
        this._value = undefined
        
        executorFN(
            this.resolverFn.bind(this),
            this.rejectorFn.bind(this)
        )
    }

    then(callback) {
        if (this._state === `fulfilled`) {
            callback(this._value)
            return this
        }
        this._successCallbacks.push(callback)
        return this
    }

    catch(callback) {
        if (this._state === `rejected`) {
            callback(this._value)
            return this
        }
        this._errorCallbacks.push(callback)
        return this
    }

    finally(callback) {
        if (this._state !== `pending`) {
            callback()
        }
        this._finallyCallbacks.push(callback)
        return this
    }

    resolverFn(value) {
        this._state = `fulfilled`
        this._value = value
        this._successCallbacks.forEach(cb => cb(this._value))
        this._finallyCallbacks.forEach(cb => cb())
    }

    rejectorFn(error) {
        this._state = `rejected`
        this._value = error
        this._errorCallbacks.forEach(cb => cb(this._value))
        this._finallyCallbacks.forEach(cb => cb())
    }
}

// TODO: Implement Promise Chaining

function wait(seconds) {
    return new myPromise((resolve) => {
        setTimeout(() => resolve(), seconds * 1000)
        // resolve()
    })
}

wait(5)
    .then(() => console.log(`Promise resolved!`))
    .catch((err) => console.log(`Rejected after 5 second:`, err.message))
    .finally(() => console.log(`All Tasks Done!`))

wait(5)
    .then(() => console.log(`Promise resolved!`))
    .catch((err) => console.log(`Rejected after 5 second:`, err.message))
    .finally(() => console.log(`All Tasks Done!`))

