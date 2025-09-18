// TODO: THROTTLE: WAIT FOR A SPECIFIC TIME INTERVAL

function throttle(fn, delay) {
    let lastCall = 0
    return function (...args) {
        const now = Date.now()
        if ((now-lastCall) < delay) {
            return   
        }

        lastCall = now
        fn(...args)
    }
}



function sendChatMessage(message) {
    console.log(`Sending Message: ${message}`)
}

const sendChatMessageWithSlowMode = throttle(sendChatMessage, 2 * 1000)

sendChatMessageWithSlowMode(`Hello`)
sendChatMessageWithSlowMode(`Hello, how are you?`)
sendChatMessageWithSlowMode(`What is going on ?`)
sendChatMessageWithSlowMode(`What is going on ?`)
sendChatMessageWithSlowMode(`What are you learning ?`)
