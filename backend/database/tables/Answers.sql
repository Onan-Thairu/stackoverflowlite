CREATE TABLE Answers (
    id VARCHAR(255) PRIMARY KEY,
    description TEXT NOT NULL,
    question_id VARCHAR(255) NOT NULL,
    user_id VARCHAR(255) NOT NULL,
    isAccepted BIT NOT NULL DEFAULT 0,
    created_at DATETIME2 NOT NULL DEFAULT GETDATE(),
    accepted_email_sent BIT NOT NULL DEFAULT 0,
    FOREIGN KEY (question_id) REFERENCES Questions(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE NO ACTION
);