USE [stackoverflowlite]
GO
/****** Object:  StoredProcedure [dbo].[sp_UpdateQuestion]    Script Date: 3/15/2023 9:40:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER   PROCEDURE [dbo].[sp_UpdateQuestion]
    @id VARCHAR(255),
    @title VARCHAR(255),
    @description TEXT,
    @tried TEXT,
    @user_id VARCHAR(255)
AS
BEGIN
    UPDATE Questions SET
        title = @title,
        description = @description,
        tried = @tried,
        user_id = @user_id
    WHERE id = @id
END
