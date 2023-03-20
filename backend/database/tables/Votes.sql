CREATE TABLE Votes (
    id VARCHAR(255) PRIMARY KEY,
    voteType INT NOT NULL,
    answer_id VARCHAR(255),
    user_id VARCHAR(255),
    FOREIGN KEY (answer_id) REFERENCES Answers(id) ON DELETE NO ACTION,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE NO ACTION
);