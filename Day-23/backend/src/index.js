import http from "http";
import app from "./app.js";
import { initSocket } from "./socket.js";

const httpServer = http.createServer(app);
initSocket(httpServer)

const PORT = process.env.PORT || 8000


httpServer.listen(PORT, () => {
    console.log(`server is listening at PORT: ${PORT}`);
})




