USE [stackoverflowlite]
GO
/****** Object:  StoredProcedure [dbo].[sp_UpdateQuestion]    Script Date: 3/19/2023 2:48:49 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE OR ALTER   PROCEDURE [dbo].[sp_UpdateQuestion]
    @id VARCHAR(255),
    @title VARCHAR(255),
    @description TEXT,
    @tried TEXT,
	@created_at DATETIME2
AS
BEGIN
    UPDATE Questions SET
        title = @title,
        description = @description,
        tried = @tried,
        created_at = @created_at
    WHERE id = @id
	SELECT * FROM Questions WHERE id = @id
END
