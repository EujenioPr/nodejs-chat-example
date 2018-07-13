const router = require('express').Router();
const userService = require('../services/user');

router.get('/', (req, res) => {
    if(req.query.connectedWithId && req.query.connectedWithId.length > 0) {
        userService.findConnectedUsers(req.query.connectedWithId, (err, data) => {
            if(!err) {
                res.json(data);
            } else {
                res.status(400);
                res.end();
            }
        });
    } else {
        res.send('Users...');
    }
});

router.get('/:id', (req, res) => {
    userService.findOne(req.params.id, (err, data) => {
        if(!err) {
            res.json(data);
        } else {
            res.status(400);
            res.end();
        }
    });
});

router.post('/', (req, res) => {
    if(!req.body.name || !req.body.email) {
        res.status(400);
        res.end();
    }
    let user = req.body;

    userService.createUser(user, (err, data) => {
        if(!err) {
            res.json(data);
        } else {
            res.status(400);
            res.end();
        }
    });
});

router.put('/', (req, res) => {
    if(!req.body || !req.body.id || !req.body.set) {
        res.status(400);
        res.end();
    }
    let updatedUser = req.body;
    userService.updateUser(updatedUser, (err, data) => {
        if(!err) {   
            res.json(data)
        } else {
            res.status(400);
            res.end();
        }
    })
});

router.delete('/:id', (req, res) => {
    userService.deleteUser(req.params.id, (err, data) => {
        if(!err) {   
            res.json(data)
        } else {
            res.status(400);
            res.end();
        }
    });
});


module.exports = router;