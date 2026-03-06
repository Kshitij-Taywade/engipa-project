const mongoose = require("mongoose");

const paperSchema = new mongoose.Schema({

    subject: String,
    branch: String,
    year: String,
    file: String

});

module.exports = mongoose.model("Paper", paperSchema);