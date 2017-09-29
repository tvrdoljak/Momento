var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

var db = mongojs('mongodb://test:test@ds129342.mlab.com:29342/momento', ['following']);

// Get
router.get('/following', function (req, res, next) {
    db.following.find(function (err, following) {
        if (err) {
            res.send(err);
        }
        res.json(following);
    });
});



module.exports = router;
