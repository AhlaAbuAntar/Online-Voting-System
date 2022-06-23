"use strict";
exports.__esModule = true;
exports.Vote = exports.voteSchema = void 0;
var mongoose_1 = require("mongoose");
exports.voteSchema = new mongoose_1.Schema({
    vote: { type: String, required: true },
    date: { type: Date, "default": Date.now }
});
exports.Vote = (0, mongoose_1.model)("Vote", exports.voteSchema);
