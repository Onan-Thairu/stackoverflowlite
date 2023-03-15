USE stackoverflowlite
GO

CREATE OR ALTER PROCEDURE sp_UpdateQuestion
    @id VARCHAR(255),
    @title VARCHAR(255),
    @description VARCHAR(MAX),
    @tried VARCHAR(MAX),
    @user_id VARCHAR(255)
AS
BEGIN
    UPDATE Questions SET
        title = @title,
        description = @description,
        tried = @tried,
        user_id = @user_id
    WHERE id = @id
END
