CREATE TABLE Comments (
    id VARCHAR(255) PRIMARY KEY,
    description TEXT NOT NULL,
    answer_id VARCHAR(255),
    user_id VARCHAR(255) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT GETDATE(),
    FOREIGN KEY (answer_id) REFERENCES Answers(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE NO ACTION
);