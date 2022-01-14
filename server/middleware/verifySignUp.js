import userModel from '../models/user.js';

export const checkDuplicateEmail = (req, res, next) => {
    userModel.findOne({
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
    userModel.findOne({
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


export const checkRolesExist = ( req, res, next ) => {
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                res.status(400).send({
                    message: `Role ${req.body.roles[i]} does not exist.`
                });
                return;
            }
        }
    }

    next();
}

