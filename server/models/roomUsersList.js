import mongoose from 'mongoose';

const roomUsersSchema = mongoose.Schema({
    username: String
});

const roomUsers = mongoose.model('roomUsers', roomUsersSchema)

export default roomUsers;