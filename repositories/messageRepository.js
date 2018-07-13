const connection = require('../db/dbconnect');
const Repository = require('./Repository');
const Message = require('../models/message');

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
        }, cb);
    }
}

module.exports = new MessageRepository();