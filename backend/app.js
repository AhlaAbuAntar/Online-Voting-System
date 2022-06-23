"use strict";
exports.__esModule = true;
var express_1 = require("express");
var dotenv_1 = require("dotenv");
var mongoose_1 = require("mongoose");
var cors_1 = require("cors");
var app = (0, express_1["default"])();
dotenv_1["default"].config();
app.use((0, cors_1["default"])());
var PORT = 3000;
mongoose_1["default"].connect(process.env.CONNECTION_LINK);
app.get("/", function (req, res) {
    res.send("API started");
});
var vote_1 = require("./routes/vote");
app.use("/vote", vote_1["default"]);
app.listen(PORT, function () {
    "Listen to ".concat(PORT);
});
