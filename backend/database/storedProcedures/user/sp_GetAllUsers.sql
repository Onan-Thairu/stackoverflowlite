USE [stackoverflowlite]
GO
/****** Object:  StoredProcedure [dbo].[sp_GetAllUsers]    Script Date: 3/17/2023 3:52:47 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE OR ALTER   PROCEDURE [dbo].[sp_GetAllUsers]
AS
BEGIN
   SELECT id, username, email, isAdmin FROM Users
END
