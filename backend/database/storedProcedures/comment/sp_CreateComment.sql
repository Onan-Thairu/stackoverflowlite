USE stackoverflowlite
GO

CREATE OR ALTER PROCEDURE sp_CreateComment
    @id VARCHAR(255),
    @description TEXT,
    @user_id VARCHAR(255),
    @answer_id VARCHAR(255)
AS
BEGIN
    INSERT INTO Comments (id, description, user_id, answer_id)
    VALUES (@id, @description, @user_id, @answer_id)
END
