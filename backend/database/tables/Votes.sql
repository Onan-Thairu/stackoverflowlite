CREATE TABLE Votes (
    id VARCHAR(255) PRIMARY KEY,
    voteType INT NOT NULL,
    question_id VARCHAR(255),
    answer_id VARCHAR(255),
    comment_id VARCHAR(255),
    user_id VARCHAR(255),
    FOREIGN KEY (question_id) REFERENCES Questions(id) ON DELETE CASCADE,
    FOREIGN KEY (answer_id) REFERENCES Answers(id) ON DELETE NO ACTION,
    FOREIGN KEY (comment_id) REFERENCES Comments(id) ON DELETE NO ACTION,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE NO ACTION
);