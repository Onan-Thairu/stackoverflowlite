USE stackoverflowlite
GO

CREATE OR ALTER PROC sp_GetAllAnswers
AS
BEGIN
    SELECT *
    FROM Answers
END