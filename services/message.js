const messageRepository = require('../repositories/messageRepository');

module.exports = {
    getById: (id, cb) => {
        messageRepository.getById(id, (err, data) => {
            cb(err, data);
        })
    },
    createMessage: (msg, cb) => {
        messageRepository.createMessage(msg, (err, data) => {
            cb(err, data);
        })
    },
    updateMessage: (msg, cb) => {
        messageRepository.updateOne(msg, (err, data) => {
            cb(err, data);
        })
    },
    deleteMessage: (id, cb) => {
        messageRepository.deleteOne(id, (err, data) => {
            cb(err, data);
        })
    }
}