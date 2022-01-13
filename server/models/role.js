import mongoose from 'mongoose';

const roleSchema = mongoose.Schema({
    name: {
        type: String,
    }
})

export default mongoose.model("RoleModel", roleSchema);