// function changebackgroundToBlack() {
//     console.log("function callled....")
//     document.body.style.backgroundColor = "black"
//     document.body.style.color = "white"
// }
// changebackgroundToBlack()

// function changebackgroundToWhite() {
//     document.body.style.backgroundColor = "white"
//     document.body.style.color = "black"
// }

function changebackgroundColor(bgColor, textColor) {
    document.body.style.backgroundColor = bgColor
    document.body.style.color = textColor
}


const darkModeButton = document.getElementById("button")
const lightModeButton = document.getElementById("button_2")

darkModeButton.addEventListener("click", function () {
    console.log(`I got clicked`)
    changebackgroundColor("black", "white")
})

lightModeButton.addEventListener("click", function () {
    changebackgroundColor("white", "black")
})
