const App = () => {
    return React.createElement(
        "div",
        {
            class: "test"
        },
        React.createElement(
            "h1",
            {},
            "Chai, Code, Chill"
        )
    )
}

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
root.render(
    React.createElement(App)
)

