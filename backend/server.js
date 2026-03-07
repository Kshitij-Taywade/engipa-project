console.log("SERVER FILE STARTED");

const express = require("express");
const cors = require("cors");

const connectDB = require("./db");

const authRoutes = require("./routes/authRoutes");
const paperRoutes = require("./routes/paperRoutes");

const app = express();

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"]
}));
app.use(express.json());

app.use("/uploads", express.static("uploads"));

connectDB();

app.use("/api", authRoutes);
app.use("/api", paperRoutes);



app.get("/", (req, res) => {
    res.send("EngiPa Backend Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});