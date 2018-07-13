const UserRepository = require('../repositories/userRepository');

module.exports = {
    findOne: (id, cb) => {
        UserRepository.getById(id, (err, data) => {
            cb(err, data);
        })
    },
    createUser: (user, cb) => {
        UserRepository.insertUser(user, (err, data) => {
            cb(err, data);
        })
    },
    updateUser: (user, cb) => {
        UserRepository.updateOne(user, (err, data) => {
            cb(err, data);
        })
    },
    deleteUser: (id, cb) => {
        UserRepository.deleteOne(id, (err, data) => {
            cb(err, data);
        })
    },
    findConnectedUsers: (id, cb) => {
        UserRepository.findConnectedUsers(id, (err, data) => {
            cb(err, data);
        })
    }
}