USE stackoverflowlite
GO

CREATE OR ALTER PROCEDURE sp_CreateAnswer
    @id VARCHAR(255),
    @description TEXT,
    @question_id VARCHAR(255),
    @user_id VARCHAR(255),
	@isAccepted BIT = 0
AS
BEGIN
    INSERT INTO Answers (id, description, question_id, user_id, isAccepted)
    VALUES (@id, @description, @question_id, @user_id, @isAccepted)
END
