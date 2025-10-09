import { Server } from "socket.io";


export const initSocket = (httpServer) => {
    const io = new Server(httpServer);

    io.on("connection", (socket) => {
            console.log(`User connected: ${socket.id}`)
    })
    
    
    return io
}