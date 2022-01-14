// import express and mongoose along with middleware
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import authRoutes from './routes/auth.js';
// import userRoutes from './routes/user.js';

import db from './models/index.js';
const Role = db.role;

const app = express();


const PORT = 5000;
const CONNECTION_URL = "mongodb+srv://BigMo:Groovy1234@bigmocluster.gpnr2.mongodb.net/message_board";
                            // mongodb+srv://BigMo:Groovy1234@bigmocluster.gpnr2.mongodb.net/message_board



// set up middleware
app.use(express.json());   // reference form bookList exercise
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


// set up routes
app.use('/posts', postRoutes) 
app.use('/auth', authRoutes)
// app.use('/user', userRoutes)


//set up mongodb connection
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
    .catch((e) => console.log(e.message))

//Roles

// function initial() {
//     Role.estimatedDocumentCount((err, count) => {
//       if (!err && count === 0) {
//         new Role({
//           name: "user"
//         }).save(err => {
//           if (err) {
//             console.log("error", err);
//           }
  
//           console.log("added 'user' to roles collection");
//         });
  
//         new Role({
//           name: "moderator"
//         }).save(err => {
//           if (err) {
//             console.log("error", err);
//           }
  
//           console.log("added 'moderator' to roles collection");
//         });
  
//         new Role({
//           name: "admin"
//         }).save(err => {
//           if (err) {
//             console.log("error", err);
//           }
  
//           console.log("added 'admin' to roles collection");
//         });
//       }
//     });
//   }