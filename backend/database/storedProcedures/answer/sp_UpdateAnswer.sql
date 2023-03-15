USE stackoverflowlite
GO

CREATE OR ALTER PROCEDURE sp_UpdateAnswer
    @id VARCHAR(255),
    @description TEXT,
    @user_id VARCHAR(255),
    @question_id VARCHAR(255),
	@isAccepted BIT
AS
BEGIN
    UPDATE Answers SET
        description = @description,
        user_id = @user_id,
        question_id = @question_id,
		isAccepted = @isAccepted
    WHERE id = @id
END
