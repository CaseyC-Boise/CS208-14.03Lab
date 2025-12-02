-- Downtown Donuts Comments Table Setup
-- Run this file with: mysql -u root -p < setup_scripts/create_comments_table.sql

-- Make sure we're using the correct database
USE cs208demo;

-- Create comments table
CREATE TABLE IF NOT EXISTS comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Optional: Insert some sample comments for testing
-- Remove these INSERT lines if you don't want sample data
INSERT INTO comments (name, message) VALUES 
('Sarah Johnson', 'Best donuts in town! The glazed are absolutely perfect every time.'),
('Mike Chen', 'Been coming here since I was a kid. Still the same great quality after all these years!'),
('Emma Davis', 'Love the maple bacon bar! Great coffee too. This place never disappoints.');

-- Verify the table was created
SELECT 'Comments table created successfully!' AS Status;
SELECT COUNT(*) AS 'Total Comments' FROM comments;