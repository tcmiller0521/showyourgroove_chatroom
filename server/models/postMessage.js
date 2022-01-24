// define how post data is going to be stored in the database with postSchema
import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    // "{user} says: {message}"
    // userName added to start of message from verification on submit.
    message: { type: String, required: true },
    createdAt: {
        type: Date,
        default: new Date(),
    }
});

// create and export model
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage