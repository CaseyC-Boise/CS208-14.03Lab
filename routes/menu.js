// routes/menu.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("menu", { 
        title: "Our Menu - Downtown Donuts"
    });
});

module.exports = router;