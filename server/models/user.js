import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: { 
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    color: {
        type: String,
    },
    avatar: {
        type: String,
    },
    banner: {
        type: String,
    }
})

const UserModel = mongoose.model('UserModel', userSchema);
export default UserModel;