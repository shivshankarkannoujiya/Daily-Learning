if (!Function.prototype.myBind) {
    Function.prototype.myBind = function (thisArgs, ...args) { 
        const context = thisArgs || globalThis
        const self = this
        return function (...bindArgs) {
            self.call(thisArgs, ...args, bindArgs)
        }
    }
}

if (!Function.prototype.myBind) {
    Function.prototype.myBind = function (thisArgs, ...args) { 
        const context = thisArgs || globalThis
        const self = this
        return function () {
            const key = Symbol()
            context[key] = self
            const result = context[key](...args)
            delete context[key]
            return result
        }
    }
} 