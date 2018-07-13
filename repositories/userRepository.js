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
            User.create({name: user.name, email: user.email }, cb);
        }
    }
    async findConnectedUsers(id, cb) {
        if(id && id.length > 0) {
            let ids = [];
            await User.find({ _id: id }, { connectedEver: 1 }, (err, data) => {
                ids = data[0].connectedEver;
            });
            let ids_ = [];
            for(let id_ of ids) {
                ids_.push(mongoose.Types.ObjectId(id_));
            }
            User.find({
                '_id': { $in: ids_ }
            }, cb);
        }
    }
}

module.exports = new UserRepository();