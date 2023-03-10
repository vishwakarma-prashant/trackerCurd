// const mongoose = require("mongoose");


// const Schema = mongoose.Schema;

// // const userSchema = new Schema({
// //     userName: {
// //     type: String,
// //     required: true,
// //     unique: true,
// //     trim: true,
// //     minlength: 3
// // },
// // }, {
// //     timestamps: true,
// // });
// const userSchema = new Schema({
//     username: String,
// }, {
//     timestamps: true,
// });

// const User = mongoose.model("User", userSchema)

// module.exports = User;



const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;