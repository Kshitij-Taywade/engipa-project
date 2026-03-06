const express = require("express");
const router = express.Router();

const Paper = require("../models/Paper");

const multer = require("multer");

const storage = multer.diskStorage({

    destination: function(req, file, cb) {
        cb(null, "uploads/");
    },

    filename: function(req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }

});

const upload = multer({ storage: storage });


router.post("/upload", upload.single("paper"), async(req, res) => {

    const { subject, branch, year } = req.body;

    const paper = new Paper({

        subject,
        branch,
        year,
        file: req.file.filename

    });

    await paper.save();

    res.json({ message: "Paper Uploaded" });

});


router.get("/papers", async(req, res) => {

    const papers = await Paper.find();

    res.json(papers);

});

module.exports = router;