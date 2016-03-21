/**
 * Created by Trevor Jackson on 04-Feb-2016.
 */
/// <reference path="../typings/browser/ambient/mongoose/mongoose.d.ts"/>

import mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    "Favourites" : [String],
    "Contributed" : [String],
    "UserType": String,
    "Email": String
});
export = mongoose.model('User', UserSchema);
