import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true,
    },

    email: {
        type: String,
        trim: true,
        required: true,
        lowercase: true
    },

    password: {
        type: String,
        minlength: 6,
        required: true,
    },

    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },

    isVerified: {
        type: Boolean,
        default: false
    },

    verificationToken: {
        type: String,
    },

    verificationTokenExpires: {
        type: Date
    },

    resetPasswordToken: {
        type: String
    },

    resetPasswordTokenExpires: {
        type: Date
    }


}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

export default User