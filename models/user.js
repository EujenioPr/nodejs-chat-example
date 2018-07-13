const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    connectedEver: []
});

const User = mongoose.model('User', userSchema);

module.exports = User;