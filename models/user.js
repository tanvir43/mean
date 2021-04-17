// import mongoose from 'mongoose'

// // schema
// const userSchema = new mongoose.Schema(
//     {
//         username : { type: String, unique: true, required: true},
//         createdAt : { type: Date, required: true }
//     }
// )

// // reference model

// const User = mongoose.model("User", userSchema);
// // exports.user = User

import mongoose from 'mongoose';

// Schema
const UserSchema = new mongoose.Schema({
    username : { type: String, unique: true, required: true },
    createAt: { type: Date, required: true }
});

// model reference
const User = mongoose.model('User', UserSchema);

export default User;