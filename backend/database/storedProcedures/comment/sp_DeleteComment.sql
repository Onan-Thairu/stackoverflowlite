USE [stackoverflowlite]
GO

CREATE OR ALTER PROCEDURE [dbo].[sp_DeleteComment]
    @id VARCHAR(255)
AS
BEGIN
    DELETE FROM Comments WHERE id = @id;
    IF @@ROWCOUNT > 0
        SELECT 1 AS success;
    ELSE
        SELECT 0 AS success;
END
