USE stackoverflowlite 
GO

CREATE OR ALTER PROCEDURE sp_GetUserById
  @id VARCHAR(255)
AS
BEGIN
   SELECT * FROM Users WHERE id = @id
END
GO