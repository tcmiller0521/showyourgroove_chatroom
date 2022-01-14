import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import UserModel from '../models/user.js'

const secret = 'test';

export const signIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await UserModel.findOne({ email });

        if (!existingUser) return res.status(404).json({ message: "Email doesn't exist" });

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);


        if (!isPasswordCorrect) return res.status(400).json({ message: "Password incorrect." });

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, secret, { expiresIn: "5h" });

        res.status(200).json({ result: existingUser, token });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong" });

        console.log(err)
    }
}

export const signUp = async (req, res) => {
    const { email, password, username } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await UserModel.create({ email, password: hashedPassword, username });

        const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: "5h" });

        res.status(201).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });

        console.log(error)
    }
}

