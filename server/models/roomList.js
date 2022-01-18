import mongoose from 'mongoose';

const roomSchema = mongoose.Schema({
    roomName: String
});

const Room = mongoose.model('Room', roomSchema)

export default Room;