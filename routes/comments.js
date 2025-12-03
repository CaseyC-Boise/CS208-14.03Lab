// routes/comments.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    req.db.query("SELECT * FROM comments ORDER BY created_at DESC", (err, results) => {
        if (err) {
            console.error("Error loading comments:", err);
            return res.render("comments", { 
                comments: [], 
                title: "Customer Comments - Downtown Donuts",
                error: "Unable to load comments at this time."
            });
        }
        res.render("comments", { 
            comments: results,
            title: "Customer Comments - Downtown Donuts",
            error: null
        });
    });
});

router.post("/", (req, res) => {
    const { name, message } = req.body;

    if (!name || !message || name.trim() === "" || message.trim() === "") {
        return res.redirect("/comments?error=missing");
    }

    const sanitizedName = name.trim().substring(0, 255);
    const sanitizedMessage = message.trim().substring(0, 1000);

    req.db.query(
        "INSERT INTO comments (name, message) VALUES (?, ?)",
        [sanitizedName, sanitizedMessage],
        (err) => {
            if (err) {
                console.error("Insert error:", err);
                return res.redirect("/comments?error=insert");
            }
            res.redirect("/comments");
        }
    );
});

module.exports = router;