CREATE TABLE Answers (
    id INT IDENTITY(1,1) PRIMARY KEY,
    description TEXT NOT NULL,
    question_id INT NOT NULL,
    user_id INT NOT NULL,
    isAccepted BIT NOT NULL DEFAULT 0,
    FOREIGN KEY (question_id) REFERENCES Questions(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE NO ACTION
);