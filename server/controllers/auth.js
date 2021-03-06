import bcrypt from 'bcryptjs'
import mongoose from 'mongoose'
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
    const { email, password, username, color, selectedFiles, selectedFile } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await UserModel.create({ email, password: hashedPassword, username, color, selectedFile, selectedFiles });

        const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: "5h" });

        res.status(201).json({ result: result, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });

        console.log(error)
    }
}

export const getUser = async(req, res) => {
    const { id } = req.params

    try {
    console.log("User Gotten")
    const userList = await UserModel.find();

    res.status(200).json( userList )
    } catch (e) {
        res.status(400).json({ message: e })
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { email, username, color, selectedFile, selectedFiles } = req.body;

    const updatedUserInfo = { email, username, color, selectedFile, selectedFiles, _id: id };

    await UserModel.findByIdAndUpdate(id, updatedUserInfo, { new: true });

    res.json({result: updatedUserInfo});
}

export const updatePassword = async (req, res) => {
    const { id } = req.params
    const { password } = req.body;

    const updateHashedPassword = await bcrypt.hash(password, 12);

    const updatedPassInfo = { password: updateHashedPassword, _id: id };

    await UserModel.findByIdAndUpdate(id, updatedPassInfo, {new: true});

    res.json({result: updatedPassInfo})
}
