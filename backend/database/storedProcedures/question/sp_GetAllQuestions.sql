USE [stackoverflowlite]
GO
/****** Object:  StoredProcedure [dbo].[sp_GetAllQuestions]    Script Date: 3/19/2023 10:29:05 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE OR ALTER     PROCEDURE [dbo].[sp_GetAllQuestions]
AS
BEGIN
    SELECT * FROM Questions ORDER BY created_at DESC
END
