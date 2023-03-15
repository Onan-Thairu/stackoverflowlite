USE stackoverflowlite
GO

CREATE PROCEDURE sp_GetAnswerById
    @id VARCHAR(255)
AS
BEGIN
    SELECT * FROM Answers WHERE id = @id
END
