USE [stackoverflowlite]
GO
/****** Object:  StoredProcedure [dbo].[sp_CreateAnswer]    Script Date: 3/19/2023 6:32:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE OR ALTER PROCEDURE [dbo].[sp_CreateAnswer]
    @id VARCHAR(255),
    @description TEXT,
    @question_id VARCHAR(255),
    @user_id VARCHAR(255),
	@isAccepted BIT = 0,
	@created_at DATETIME2
AS
BEGIN
    INSERT INTO Answers (id, description, question_id, user_id, isAccepted, created_at)
    VALUES (@id, @description, @question_id, @user_id, @isAccepted, @created_at)
	SELECT * FROM Answers WHERE id = @id
END
