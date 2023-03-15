USE stackoverflowlite
GO

CREATE OR ALTER PROCEDURE sp_GetQuestionById
    @id VARCHAR(255)
AS
BEGIN
    SELECT * FROM Questions WHERE id = @id
END
