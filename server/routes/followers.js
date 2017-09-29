var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

var db = mongojs('mongodb://test:test@ds129342.mlab.com:29342/momento', ['followers']);

// Get
router.get('/followers', function (req, res, next) {
    db.followers.find(function (err, followers) {
        if (err) {
            res.send(err);
        }
        res.json(followers);
    });
});



module.exports = router;
