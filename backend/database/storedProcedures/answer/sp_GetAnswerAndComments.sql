USE stackoverflowlite
GO

CREATE PROCEDURE sp_GetAnswerAndComments
    @answer_id VARCHAR(255)
AS
BEGIN
    SELECT * FROM Answers WHERE id = @answer_id
    SELECT * FROM Comments WHERE answer_id = @answer_id
END
