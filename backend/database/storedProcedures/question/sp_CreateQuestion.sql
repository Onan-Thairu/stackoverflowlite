USE [stackoverflowlite]
GO
/****** Object:  StoredProcedure [dbo].[sp_CreateQuestion]    Script Date: 3/15/2023 9:46:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER   PROCEDURE [dbo].[sp_CreateQuestion]
    @id VARCHAR(255),
    @title VARCHAR(255),
    @description TEXT,
    @tried TEXT,
    @user_id VARCHAR(255)
AS
BEGIN
    INSERT INTO Questions (id, title, description, tried, user_id)
    VALUES (@id, @title, @description, @tried, @user_id)
END
