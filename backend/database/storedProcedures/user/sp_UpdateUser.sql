USE stackoverflowlite
GO

CREATE OR ALTER PROCEDURE sp_UpdateUser
  @id VARCHAR(255),
  @password VARCHAR(255),
  @isAdmin VARCHAR(255)
AS
BEGIN
  UPDATE Users SET
  password = @password,
  isAdmin = @isAdmin
  WHERE id = @id
  SELECT id, username, email, isAdmin FROM Users WHERE id=@id
END