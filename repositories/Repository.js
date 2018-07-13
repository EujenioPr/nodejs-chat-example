class Repository {
    constructor() {

    }
    getById(id, cb) {
        let model = this.model;
        let query = model.findOne({
            _id: id
        });
        query.exec(cb);
    }
    updateOne(doc, cb) {
        let model = this.model;
        let query = model.update(
            { _id: doc.id },
            { $set: doc.set }
        );
        query.exec(cb);
    }
    deleteOne(id, cb) {
        let model = this.model;
        let query = model.deleteOne({
            _id: id
        });
        query.exec(cb);
    }
}

module.exports = Repository;