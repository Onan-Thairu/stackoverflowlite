USE [stackoverflowlite]
GO
/****** Object:  StoredProcedure [dbo].[sp_GetQuestionAndAnswers]    Script Date: 3/15/2023 9:53:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[sp_GetQuestionAndAnswers]
    @question_id VARCHAR(255)
AS
BEGIN
    SELECT * FROM Questions WHERE id = @question_id
    SELECT * FROM Answers WHERE question_id = @question_id
END
