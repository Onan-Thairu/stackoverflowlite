USE stackoverflowlite
GO

CREATE PROCEDURE sp_DeleteQuestion
    @id VARCHAR(255)
AS
BEGIN
    DELETE FROM Questions WHERE id = @id
END
