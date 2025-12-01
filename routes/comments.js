// routes/comments.js
const express = require("express");
const router = express.Router();

// Show comments
router.get("/", (req, res) => {
    req.db.query("SELECT * FROM comments ORDER BY created_at DESC", (err, results) => {
        if (err) {
            console.error("Error loading comments:", err);
            return res.render("comments", { comments: [] });
        }
        res.render("comments", { comments: results });
    });
});

// Add a comment
router.post("/", (req, res) => {
    const { name, message } = req.body;

    req.db.query(
        "INSERT INTO comments (name, message) VALUES (?, ?)",
        [name, message],
        (err) => {
            if (err) {
                console.error("Insert error:", err);
            }
            res.redirect("/comments");
        }
    );
});

module.exports = router;
