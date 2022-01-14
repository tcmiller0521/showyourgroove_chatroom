import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: {
        type: String,
    },
    email: { 
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    // roles: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "RoleModel"
    //     }
    // ]
})

export default mongoose.model("UserModel", userSchema);