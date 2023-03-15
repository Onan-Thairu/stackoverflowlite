USE stackoverflowlite 
GO

CREATE OR ALTER PROCEDURE sp_GetAllUsers
AS
BEGIN
   SELECT * FROM Users
END
GO