const express = require("express");
const cors = require("cors");

const connectDB = require("./db");

const authRoutes = require("./routes/authRoutes");
const paperRoutes = require("./routes/paperRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

connectDB();

app.use("/api", authRoutes);
app.use("/api", paperRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});