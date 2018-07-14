const connection = require('../db/dbconnect');
const Repository = require('./Repository');
const User = require('../models/user');

const mongoose = require('mongoose');

class UserRepository extends Repository {
    constructor() {
        super();
        this.model = User;
    }
    insertUser(user, cb) {
        if(user && user.name && user.email) {
            User.create({name: user.name, email: user.email }, (err, data) => {
                console.log(err, data);
                cb(err, data);
            });
        }
    }
    updateUserArray(user, cb) {
        User.update(
          { _id: user.id },
          { $addToSet: user.push }, cb);
    }
    async findConnectedUsers(id, cb) {
        if(id && id.length > 0) {

            let connected = [];

            await User.find({ _id: id }, { connectedEverIds: 1 }, (err, data) => {
                if(err) { cb(err, data) }
                connected = data[0].connectedEverIds;
            });

            let ids_ = [];

            for(let connection of connected) {
                ids_.push(mongoose.Types.ObjectId(connection));
            }
            
            User.find({
                '_id': { $in: ids_ }
            }, cb);
        }
    }
}

module.exports = new UserRepository();