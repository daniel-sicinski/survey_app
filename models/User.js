const mongoose = require('mongoose');
const { Schema } = mongoose;

const userModel = new Schema ({
    googleId: String
})

mongoose.model('user', userModel);