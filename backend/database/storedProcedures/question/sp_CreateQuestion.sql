USE [stackoverflowlite]
GO
/****** Object:  StoredProcedure [dbo].[sp_CreateQuestion]    Script Date: 3/18/2023 9:02:50 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE OR ALTER   PROCEDURE [dbo].[sp_CreateQuestion]
    @id VARCHAR(255),
    @title VARCHAR(255),
    @description TEXT,
    @tried TEXT,
	@created_at DATETIME,
    @user_id VARCHAR(255)
AS
BEGIN
    INSERT INTO Questions (id, title, description, tried, created_at, user_id)
    VALUES (@id, @title, @description, @tried, @created_at, @user_id)
	SELECT * FROM Questions WHERE id = @id
END
