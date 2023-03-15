USE stackoverflowlite 
GO

CREATE OR ALTER PROCEDURE sp_DeleteUser
  @id VARCHAR(255)
AS
BEGIN
   DELETE FROM Users WHERE id = @id
END
GO