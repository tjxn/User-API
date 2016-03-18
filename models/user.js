/**
 * Created by Trevor Jackson on 04-Feb-2016.
 */
/// <reference path="../typings/browser/ambient/mongoose/mongoose.d.ts"/>
var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    "Stormpath-ID": String,
    "Favourites": [String],
    "Contributed": [String],
    "Type": String,
    "Email": String
});
module.exports = mongoose.model('User', UserSchema);
//# sourceMappingURL=user.js.map