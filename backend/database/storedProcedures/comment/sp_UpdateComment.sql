USE [stackoverflowlite]
GO

CREATE OR ALTER PROCEDURE sp_UpdateComment
    @id VARCHAR(255),
    @description TEXT,
    @created_at DATETIME
AS
BEGIN
    UPDATE Comments SET
        description = @description,
        created_at = @created_at
    WHERE id = @id
	SELECT * FROM Comments WHERE id = @id
END
