function prepareChai(type) {
    
    if (typeof type !== "string") {
        console.log(`Please, Enter string only`)
        return
    }

    let chaiType = type.toLowerCase()
    if (chaiType === "masala Chai") {
        console.log(`Adding spices to the chai`)
    } else {
        console.log(`Preparing the regular chai`)
    }
}

function calculateTotalBill(amount) {
    // let amountInNum = Number(amount)
    // if (amountInNum >= 1000) {
    //     return amountInNum * 0.9
    // } else {
    //     return amount 
    // }

    return amount >= 1000 ? amount * 0.9 : amount;
}

// USECASE:
// let isLoading = false
// return isLoading ? () : ()

const finalBill = calculateTotalBill(1200)

function trafficLight(color) {
    let colorInLowerCase = color?.toLowerCase()
    switch (colorInLowerCase) {
        case "red":
            console.log(`STOP`)
            break;
        case "yellow":
            console.log(`Slow Down`)
            break;
        case "yellow":
            console.log(`GO`)
            break;
        default:
            console.log(`Chalan Kat do...`)
            break;
    }
}

function checkTruthyValue(value) {
    if (value) {
        console.log(`${JSON.stringify(value)}: is Truthy`)
    } else {
        console.log(`${JSON.stringify(value)}: is Falsy`)
    }
}

// checkTruthyValue(0)
// checkTruthyValue("")
// checkTruthyValue(null)
// checkTruthyValue(undefined)
// checkTruthyValue(NaN)
// checkTruthyValue(1)
// checkTruthyValue("abc")
// checkTruthyValue([])
// checkTruthyValue({})


function login(username, password, loginIP) {
    if (username === "admin" && (password === "123" || loginIP === "127.0.0.3")) {
        console.log("Login Successfully !")
    } else {
        console.log("Invalid Credentials")
    }
}