import mongoose from 'mongoose';

const loginSchema = mongoose.Schema({
    email: { 
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
});

const Login = mongoose.model('Login', loginSchema)

export default Login;