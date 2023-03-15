USE stackoverflowlite
GO

CREATE OR ALTER PROCEDURE sp_GetQuestionsByUser
    @user_id VARCHAR(255)
AS
BEGIN
    SELECT * FROM Questions WHERE user_id = @user_id
END
