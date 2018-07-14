const connection = require('../db/dbconnect');
const Repository = require('./Repository');
const Message = require('../models/message');

const User = require('./userRepository');

const mongoose = require('mongoose');

class MessageRepository extends Repository {
    constructor() {
        super();
        this.model = Message;
    }
    createMessage(msg, cb) {
        Message.create({ 
            senderId: msg.senderId, 
            receiverId: msg.receiverId, 
            msgBody: msg.body 
        }, (err, data) => {
            console.log(data);
            User.updateUserArray({id: data.senderId, push: { connectedEverIds: data.receiverId, messagesIds: data.id }}, (err_, data_) => {
                console.log(err_, data_);
            });
            cb(err, data);
        });
    }
}

module.exports = new MessageRepository();