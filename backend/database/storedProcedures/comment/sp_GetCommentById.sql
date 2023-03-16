USE stackoverflowlite
GO

CREATE OR ALTER PROCEDURE sp_GetCommentById
    @id VARCHAR(255)
AS
BEGIN
    SELECT * FROM Comments WHERE id = @id
END
