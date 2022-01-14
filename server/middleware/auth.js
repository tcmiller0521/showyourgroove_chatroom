import jwt from 'jsonwebtoken'
import db from '../models/index.js';

const User = db.user;
const Role = db.role;

export const secret = 'test';

export const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];

        let decodedData;

        if (token) {
            decodedData = jwt.verify(token, secret);

            req.userId = decodedData?.id;
        }
        next();
    } catch (error) {
        console.log(error);
    }
};

// export const isAdmin = async (req, res) => {

//     try{
//         const admin = await User.findById(req.userId);

//         if (!admin) return res.status(404).json({ message: "Requires Admin Role"})
//     } catch (err) {
//         res.status(500).json({ message: "Something went wrong" })

//         console.log(err)
//     }
// }
  
//   export const isModerator =  async (req, res) => {
//     try{
//         const mod = await User.findById(req.userId);

//         if (!mod) return res.status(404).json({ message: "Requires Moderator Role"})
//     } catch (err) {
//         res.status(500).json({ message: "Something went wrong" })

//         console.log(err)
//     }
//   };