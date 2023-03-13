CREATE TABLE Votes (
    id INT IDENTITY(1,1) PRIMARY KEY,
    voteType INT NOT NULL,
    question_id INT NOT NULL,
    answer_id INT NOT NULL,
    comment_id INT NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (question_id) REFERENCES Questions(id) ON DELETE CASCADE,
    FOREIGN KEY (answer_id) REFERENCES Answers(id) ON DELETE NO ACTION,
    FOREIGN KEY (comment_id) REFERENCES Comments(id) ON DELETE NO ACTION,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE NO ACTION
);