import mongoose from 'mongoose';
import UserModel from './user.js'
import RoleModel from './role.js'

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = UserModel
db.role = RoleModel

db.ROLES = ["user", "admin", "moderator"];

export default db;