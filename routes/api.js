/**
 * Created by Trevor Jackson on 3/3/2016.
 */
/// <reference path="../typings/browser/ambient/mongoose/mongoose.d.ts"/>
/// <reference path="../typings/browser/ambient/express/express.d.ts"/>
/**
 * Created by Trevor Jackson on 04-Feb-2016.
 */
var express = require('express');
var router = express.Router();
var User = require('../models/user');
/* GET /user listing. */
router.get('/', function (req, res, next) {
    User.find(function (err, user) {
        if (err)
            return next(err);
        res.json(user);
    });
});
/* GET /user/:email. */
// Return User with specified email
router.get('/email/:email', function (req, res, next) {
    console.log(req.params.email);
    User.findOne({ "Email": req.params.email }, function (err, user) {
        if (err)
            return next(err);
        res.json(user);
    });
});
/* GET /user/id */
router.get('/id/:id', function (req, res, next) {
    User.findById(req.params.id, function (err, post) {
        if (err) {
            res.json('Error: Cannot Find Object With That ID');
            return;
        }
        res.json(post);
    });
});
/* PUT /user/:id */
router.put('/:id', function (req, res, next) {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, post) {
        if (err) {
            res.json('Error: Cannot Find Object With That ID');
            return;
        }
        res.json(post);
    });
});
/* POST /user */
router.post('/', function (req, res, next) {
    // If the call doesn't contain the field Title then
    // call was done incorrectly, throw error
    var text = JSON.stringify(req.body);
    console.log('Received:');
    console.log(req.body);
    if (text.indexOf('UserType') < 0) {
        res.json("Error: Given object was not a user");
        return;
    }
    User.create(req.body, function (err, post) {
        if (err)
            return next(err);
        var msg = JSON.stringify(post);
        res.json(msg);
    });
});
/* DELETE /user/:id */
router.delete('/:id', function (req, res, next) {
    User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) {
            res.json('Error: Cannot Find Object With That ID');
            return;
        }
        res.json(post);
    });
});
module.exports = router;
//# sourceMappingURL=api.js.map