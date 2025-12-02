// routes/about.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("about", { 
        title: "About Us - Downtown Donuts"
    });
});

module.exports = router;