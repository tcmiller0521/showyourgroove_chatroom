// import express and mongoose along with middleware
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

const PORT = 5000;
const CONNECTION_URL = "mongodb+srv://BigMo:Groovy1234@bigmocluster.gpnr2.mongodb.net/message_board";
                            // mongodb+srv://BigMo:Groovy1234@bigmocluster.gpnr2.mongodb.net/message_board

// set up middleware
app.use(express.json());   // reference form bookList exercise
app.use(cors());

// set up route
// GET

// app.use('/posts', postRoutes) comment import postRoutes from './routes/posts.js'   up top

//set up mongodb connection
mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
    .catch((e) => console.log(e.message))