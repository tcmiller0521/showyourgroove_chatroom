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


// set up routes
app.use('/posts', postRoutes) 
app.use('/auth', authRoutes)



//set up mongodb connection
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
    .catch((e) => console.log(e.message))

