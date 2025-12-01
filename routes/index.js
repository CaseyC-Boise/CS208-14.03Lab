// routes/index.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    req.db.query("SELECT * FROM todos", (err, results) => {
        if (err) {
            console.error("Error fetching todos:", err);
            return res.render("index", { todos: [] });
        }
        res.render("index", { todos: results });
    });
});

module.exports = router;
