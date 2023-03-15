CREATE OR ALTER PROCEDURE sp_CreateQuestion
    @id VARCHAR(255),
    @title VARCHAR(255),
    @description VARCHAR(MAX),
    @tried VARCHAR(MAX),
    @user_id VARCHAR(255)
AS
BEGIN
    INSERT INTO Questions (id, title, description, tried, user_id)
    VALUES (@id, @title, @description, @tried, @user_id)
END
