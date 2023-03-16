USE [stackoverflowlite]
GO
/****** Object:  StoredProcedure [dbo].[sp_GetUserByEmail]    Script Date: 3/16/2023 9:25:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER   PROCEDURE [dbo].[sp_GetUserByEmail]
  @email VARCHAR(255)
AS
BEGIN
   SELECT id, username, email, isAdmin FROM Users WHERE email = @email
END
