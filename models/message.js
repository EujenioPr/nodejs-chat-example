const mongoose = require('mongoose');

const msgSchema = mongoose.Schema({
    senderId: String,
    receiverId: String,
    msgBody: String
});

const Message = mongoose.model('Message', msgSchema);

module.exports = Message;