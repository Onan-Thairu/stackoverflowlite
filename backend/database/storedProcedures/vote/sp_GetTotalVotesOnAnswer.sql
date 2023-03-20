USE stackoverflowlite
GO

CREATE OR ALTER PROCEDURE sp_GetTotalVotesOnAnswer
    @answer_id varchar(255)
AS
BEGIN
    SELECT SUM(voteType) as totalVotes FROM Votes WHERE answer_id = @answer_id;
END;