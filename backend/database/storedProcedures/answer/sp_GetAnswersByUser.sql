USE stackoverflowlite
GO

CREATE PROCEDURE sp_GetAnswersByUser
    @user_id VARCHAR(255)
AS
BEGIN
    SELECT * FROM Answers WHERE user_id = @user_id
END
