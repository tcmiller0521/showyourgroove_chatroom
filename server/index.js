// import express and mongoose along with middleware
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import authRoutes from './routes/auth.js';

const app = express();

const PORT = 5000;
const CONNECTION_URL = "mongodb+srv://BigMo:Groovy1234@bigmocluster.gpnr2.mongodb.net/message_board";
// mongodb+srv://BigMo:Groovy1234@bigmocluster.gpnr2.mongodb.net/message_board

// set up middleware
app.use(express.json());   // reference form bookList exercise
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//import socket components
import { createServer } from 'http';
import { Server } from 'socket.io';

const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

io.on('connection', (socket) => {
    // console.log('New Connection...' + socket.id);
    // socket.emit("greeting", "Welcome")
    // io.emit("greeting", "look who showed up, everyone!")
    // socket.broadcast.emit("greeting", "pretend you like them")

    socket.on('userJoin', (room) => {
        socket.join(room)
        console.log('user joined ' + room)
    });

    //send a message to everyone else
    // socket.on('message', (data) => {
    //     //broadcast from original senders socket
    //     console.log(data)
    //     socket.broadcast.emit('serverMessage', data, socket.id)
    // });

    socket.on("usermessage", (data, room) => {
        socket.leave("public")
        socket.join(room);
        console.log('user joined ' + room)
        socket.to(room).emit("serverMessage", data, socket.id);
        // io.to(socket.id).emit("PM", `message sent: ${data}`) //Send a PM 
    })

    // Message for user disconnect
    socket.on("disconnect", (userList) => {
        console.log("user disconnected");
        io.emit("userLeft", `${socket.id} disconnected`);
    });

})

// set up routes
app.use('/posts', postRoutes)
app.use('/auth', authRoutes)

//set up mongodb connection
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => httpServer.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
    .catch((e) => console.log(e.message))