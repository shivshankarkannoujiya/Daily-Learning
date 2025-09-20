import mongoose from "mongoose";
import bcrypt from "bcryptjs";

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

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

userSchema.methods.isPasswordCorrect = async function (password) {
    if (!password) return false;
    if(!this.password) throw new Error("user password not exist")
    return await bcrypt.compare(password, this.password)
}

const User = mongoose.model("User", userSchema)
export default User