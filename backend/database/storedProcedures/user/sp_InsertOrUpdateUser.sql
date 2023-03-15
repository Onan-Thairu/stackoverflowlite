USE stackoverflowlite 
GO

CREATE OR ALTER PROCEDURE sp_InsertOrUpdateUser
  @id VARCHAR(255),
  @username VARCHAR(255),
  @email VARCHAR(255),
  @password VARCHAR(255),
  @isAdmin BIT = 0
AS
BEGIN
   IF EXISTS (SELECT * FROM Users WHERE id=@id)
   BEGIN
     UPDATE Users SET username=@username, email = @email, password = @password, isAdmin = @isAdmin
   END
   ELSE
   BEGIN
     INSERT INTO Users (id, username, email, password, isAdmin) VALUES (@id, @username, @email, @password, @isAdmin)
	 SELECT * FROM Users WHERE id=@id
   END
END
GO