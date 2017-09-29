var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

var db = mongojs('mongodb://test:test@ds129342.mlab.com:29342/momento', ['card']);

// Get all card items
router.get('/card', function (req, res, next) {
    db.card.find(function (err, card) {
        if (err) {
            res.send(err);
        }
        res.json(card);
    });
});

// Update card
router.put('/card/:id', function(req, res, next){
    var card = req.body;
    console.log(card);
    var updCard = {};

    if(card.title){
        updCard.title = card.title;
    }

    if(card.description){
        updCard.description = card.description;
    }

    if(card.comments){
        updCard.comments = card.comments;
    }

    if(!updCard){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        db.card.update({_id: mongojs.ObjectId(req.params.id)},updCard, {}, function(err, task){
            if(err){
                res.send(err);
            }
            res.json(task);
        });
    }
});

module.exports = router;
