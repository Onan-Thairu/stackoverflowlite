USE [stackoverflowlite]
GO
/****** Object:  StoredProcedure [dbo].[sp_DeleteQuestion]    Script Date: 3/19/2023 10:18:49 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE OR ALTER PROCEDURE [dbo].[sp_DeleteQuestion]
    @id VARCHAR(255)
AS
BEGIN
    DELETE FROM Questions WHERE id = @id
	SELECT * FROM Questions WHERE id = @id
END
