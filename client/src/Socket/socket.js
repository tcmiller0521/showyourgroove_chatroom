import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
import {createPost} from '../state/postListSlice'
import {store} from '../state/store/store'
// const ENDPOINT = "http://localhost:5000"

const socket = io();

socket.on('connect', () => {
  console.log(`connected as ${socket.id}`)
  socket.emit("userJoin", "public")
})

socket.on("greeting", greeting => console.log(greeting))

socket.on("serverMessage", (data, id) => {
  store.dispatch(createPost(data))
  console.log(`from ${id}: ${data.message}`)
})

socket.on("PM", data => {
//   dispatch(messageReducer(data))
  console.log(`from server: ${data}`)
})

socket.on("userLeft", (exit) => {
  console.log(exit);

});

export default socket