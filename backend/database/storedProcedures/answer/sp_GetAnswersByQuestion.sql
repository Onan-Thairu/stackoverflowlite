USE stackoverflowlite
GO

CREATE OR ALTER PROCEDURE sp_GetAnswersByQuestion
    @question_id VARCHAR(255)
AS
BEGIN
    SELECT * FROM Answers WHERE question_id = @question_id
END
