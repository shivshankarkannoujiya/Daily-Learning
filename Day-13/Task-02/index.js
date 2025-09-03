
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color
}

const themeButton = document.getElementById("theme-btn")
themeButton.addEventListener("click", () => {
    console.log(document.body.style.backgroundColor)
    const currentColor = document.body.style.backgroundColor
    if (!currentColor || currentColor === "lightcyan") {
        changeBackgroundColor("black")
        themeButton.innerText = "Light Mode"
    } else {
        changeBackgroundColor("lightcyan")
        themeButton.innerText = "Dark Mode"
    }
})