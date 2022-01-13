import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import user from '../models/user.js'

import UserModel from '../models/user.js'

export const checkDuplicateEmail = (req, res, next) => {
    UserModel.findOne({
        email: req.body.email
    }).exec((err, email) => {
        if (err){
            res.status(500).send({ message: "error" });
            return;
        }

        if (email) {
            res.status(400).send({message: "email already in use"});
            return;
        }

        next();
    })
};

export const checkDuplicateUsername = (req, res, next) => {
    UserModel.findOne({
        username: req.body.username
    }).exec((err, username) => {
        if (err){
            res.status(500).send({ message: "error" });
            return;
        }

        if (username) {
            res.status(400).send({message: "username already in use"});
            return;
        }

        next();
    })
};


