const mongoose = require("mongoose");

async function connectDB() {

    console.log("Trying to connect MongoDB...");

    try {

        await mongoose.connect("mongodb+srv://EG:TMFEN3yQUgwErkmh@engipa-cluster.d3hydzq.mongodb.net/models");

        console.log("MongoDB Connected");

    } catch (error) {

        console.error("MongoDB connection failed:", error);

    }

}

module.exports = connectDB;