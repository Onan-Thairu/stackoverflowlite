USE [stackoverflowlite]
GO
CREATE OR ALTER PROCEDURE [dbo].[sp_DeleteQuestion]
    @id VARCHAR(255)
AS
BEGIN
    DELETE FROM Questions WHERE id = @id;
    IF @@ROWCOUNT > 0
        SELECT 1 AS success;
    ELSE
        SELECT 0 AS success;
END
