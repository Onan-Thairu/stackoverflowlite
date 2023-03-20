USE stackoverflowlite
GO

CREATE OR ALTER PROCEDURE sp_VoteOnAnswer
    @id VARCHAR(255),
    @answer_id VARCHAR(255),
    @user_id VARCHAR(255),
    @voteType INT
AS
BEGIN
    IF NOT EXISTS (SELECT * FROM Votes WHERE answer_id = @answer_id AND user_id = @user_id)
    BEGIN
        INSERT INTO Votes (id, voteType, answer_id, user_id) VALUES (@id, @voteType, @answer_id, @user_id);
    END
    ELSE
    BEGIN
        UPDATE Votes SET voteType = @voteType WHERE answer_id = @answer_id AND user_id = @user_id;
    END
END;
