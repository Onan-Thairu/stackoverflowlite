USE stackoverflowlite 
GO

CREATE OR ALTER PROCEDURE sp_GetUserByEmail
  @email VARCHAR(255)
AS
BEGIN
   SELECT * FROM Users WHERE email = @email
END
GO