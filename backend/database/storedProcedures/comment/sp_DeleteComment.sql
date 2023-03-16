USE stackoverflowlite
GO

CREATE OR ALTER PROCEDURE sp_DeleteComment
    @id VARCHAR(255)
AS
BEGIN
    DELETE FROM Comments WHERE id = @id
END
