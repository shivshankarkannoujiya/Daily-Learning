const http = require("http")
const express = require("express")

const handlerFNV2 = express()

handlerFNV2.get("/", (req, res) => {
    res.send("HOMEPAGE")
})
handlerFNV2.get("/about", (req, res) => {
    res.send("ABOUT US")
})
handlerFNV2.get("/contact", (req, res) => {
    res.send("CONTACT US")
})
const serverV2 = http.createServer(handlerFNV2)





function handlerFN(req, res) {
     switch (req.method) {
        case 'GET': {
            if(req.url === "/contact") return res.end("CONTACT US")
            if(req.url === "/about") return res.end("ABOUT US")
        }
            break;
        case 'POST': { }
            break;
        default:
            req.url === "/" ? res.end(`HOMEPAGE`) : `${req.url} not exists`
    }
}

const server = http.createServer(handlerFN)

const PORT = process.env.PORT ?? 8000

server.listen(PORT, () => {
    console.log(`Server started at at PORT: ${PORT}`)
})


serverV2.listen(PORT, () => {
    console.log(`Server started at at PORT: ${PORT}`)
})





















// const express = require("express")

// const app = express()

// app.get("/", (req, res) => {
//     res.send(`This is respnse`)
//     console.log(req.protocol);
//     console.log(req.get("host"));
//     console.log(req.url);
//     console.log(req.baseUrl);
//     console.log(req.method);
//     console.log(`${req.protocol}://${req.get("host")}/api/v1/users`);
    
// })

// app.listen(PORT, () => {
//     console.log(`Server started at at PORT: ${PORT}`)
// })
