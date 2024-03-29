USE [stackoverflowlite]
GO
/****** Object:  StoredProcedure [dbo].[sp_CreateComment]    Script Date: 3/20/2023 4:50:36 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE OR ALTER   PROCEDURE [dbo].[sp_CreateComment]
    @id VARCHAR(255),
    @description TEXT,
    @user_id VARCHAR(255),
    @answer_id VARCHAR(255),
	@created_at DATETIME
AS
BEGIN
    INSERT INTO Comments (id, description, user_id, answer_id, created_at)
    VALUES (@id, @description, @user_id, @answer_id, @created_at)
	SELECT * FROM Comments WHERE id = @id
END
