const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "This field is required"],
        minlength: [3, "Please enter a longer name"]
    },
    lastName: {
        type: String,
        required: [true, "This field is required"],
        minlength: [3, "Please enter a longer name"]
    },
    email: {
        type: String,
        required: [true, "This field is required"],
        minlength: [7, "Please enter a longer email"]
    },
    password: {
        type: String,
        required: [true, "This field is required"],
        minlength: [7, "Please enter a longer password"]
    },
    confPass: {
        type: String,
        required: [true, "This field is required"],
        minlength: [7, "Please enter a longer name"]
    }
}, {timestamps: true});
module.exports.User = mongoose.model('User', UserSchema);