USE stackoverflowlite
GO

CREATE OR ALTER PROCEDURE sp_GetAllQuestions
AS
BEGIN
    SELECT * FROM Questions
END
