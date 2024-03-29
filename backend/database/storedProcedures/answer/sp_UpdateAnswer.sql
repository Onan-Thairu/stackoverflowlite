USE [stackoverflowlite]
GO
/****** Object:  StoredProcedure [dbo].[sp_UpdateAnswer]    Script Date: 3/19/2023 9:58:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE OR ALTER PROCEDURE sp_UpdateAnswer
    @id VARCHAR(255),
    @description TEXT,
	@isAccepted BIT,
    @created_at DATETIME2
AS
BEGIN
    UPDATE Answers SET
        description = @description,
		isAccepted = @isAccepted,
        created_at = @created_at
    WHERE id = @id
	SELECT * FROM Answers WHERE id = @id
END
