USE stackoverflowlite
GO

CREATE OR ALTER PROCEDURE sp_GetCommentsByAnswer
    @answer_id VARCHAR(255)
AS
BEGIN
    SELECT * FROM Comments WHERE answer_id = @answer_id
END
