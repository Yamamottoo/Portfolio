import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
    fullname: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minlength: [2, "Minimum length 2"],
        maxlength: [100, "Maximum length 100"],
    },
    telegram: {
        type: String,
        required: [true, "Name is required"],
    },
    vk: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
    },
    message: {
        type: String,
        required: [true, "Message is required"],
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);
export default Contact;