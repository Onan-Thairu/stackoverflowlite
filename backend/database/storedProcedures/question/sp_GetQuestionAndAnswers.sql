USE stackoverflowlite
GO

CREATE PROCEDURE sp_GetQuestionAndAnswers
    @question_id VARCHAR(255)
AS
BEGIN
    SELECT * FROM Questions WHERE id = @question_id
    SELECT * FROM Answers WHERE id = @question_id
END
