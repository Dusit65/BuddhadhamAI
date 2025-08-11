BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[chat_tb] (
    [chatId] INT NOT NULL IDENTITY(1,1),
    [chatHeader] NVARCHAR(50) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [chat_tb_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [chat_tb_pkey] PRIMARY KEY CLUSTERED ([chatId])
);

-- CreateTable
CREATE TABLE [dbo].[qNa_tb] (
    [qNaId] INT NOT NULL IDENTITY(1,1),
    [chatId] INT NOT NULL,
    [qNaWords] NVARCHAR(max) NOT NULL,
    [qNaType] CHAR(1) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [qNa_tb_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [qNa_tb_pkey] PRIMARY KEY CLUSTERED ([qNaId])
);

-- AddForeignKey
ALTER TABLE [dbo].[qNa_tb] ADD CONSTRAINT [qNa_tb_chatId_fkey] FOREIGN KEY ([chatId]) REFERENCES [dbo].[chat_tb]([chatId]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
