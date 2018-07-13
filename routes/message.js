const router = require('express').Router();
const messageService = require('../services/message');

router.get('/', (req, res) => {
    res.send('messages');
});

router.get('/:id', (req, res) => {
    messageService.getById(req.params.id, (err, data) => {
        if(!err) {
            res.json(data);
        } else {
            res.status(400);
            res.end();
        }
    });
});

router.post('/', (req, res) => {
    if(!req.body || !req.body.senderId || !req.body.receiverId || !req.body.body) {
        res.status(400);
        res.end();
    }

    let message = { 
        senderId: req.body.senderId,
        receiverId: req.body.receiverId,
        body: req.body.body
    };

    messageService.createMessage(message, (err, data) => {
        if(!err) {
            res.json(data);
        } else {
            res.status(400);
            res.end();
        }
    });
});

router.put('/', (req, res) => {
    if(!req.body.id || !req.body.body) {
        res.status(400);
        res.end();
    }
    let message = {
        id: req.body.id,
        set:  {
            msgBody: req.body.body 
        }
    };
    messageService.updateMessage(message, (err, data) => {
        if(!err) {
            res.json(data);
        } else {
            res.status(400);
            res.end();
        }
    });
});

router.delete('/:id', (req, res) => {
    if(!req.params || !req.params.id) {
        res.status(400);
        res.end();
    }
    messageService.deleteMessage(req.params.id, (err, data) => {
        if(!err) {
            res.json(data);
        } else {
            res.status(400);
            res.end();
        }
    });
});

module.exports = router;