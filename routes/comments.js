const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const sql = `SELECT id, name, message, created_at FROM comments ORDER BY created_at DESC`;

  req.db.all(sql, [], (err, rows) => {
    if (err) {
      console.error(err);
      return res.render('comments', { comments: [], error: 'Could not load comments' });
    }
    res.render('comments', { comments: rows });
  });
});

router.post('/', (req, res) => {
  const { name, message } = req.body;

  if (!message || message.trim() === "") {
    return res.redirect('/comments'); 
  }

  const sql = `INSERT INTO comments (name, message) VALUES (?, ?)`;
  req.db.run(sql, [name || "Anonymous", message], (err) => {
    if (err) {
      console.error(err);
    }
    res.redirect('/comments');
  });
});

module.exports = router;
