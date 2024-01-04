import mongoose from "mongoose";
const { Schema,model } = mongoose;

//  User collection

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    profilePicture: { type: String }
});

const User = mongoose.model('User', userSchema);

export default User;
