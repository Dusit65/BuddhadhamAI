/*
  Warnings:

  - The primary key for the `book_tb` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `chapter_tb` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `chat_tb` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `embeddings_tb` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `log_tb` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `qNa_tb` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `user_tb` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[chapter_tb] DROP CONSTRAINT [chapter_tb_bookId_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[chat_tb] DROP CONSTRAINT [chat_tb_userId_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[qNa_tb] DROP CONSTRAINT [qNa_tb_chatId_fkey];

-- AlterTable
ALTER TABLE [dbo].[book_tb] DROP CONSTRAINT [book_tb_pkey];
ALTER TABLE [dbo].[book_tb] ALTER COLUMN [bookId] BIGINT NOT NULL;
ALTER TABLE [dbo].[book_tb] ADD CONSTRAINT book_tb_pkey PRIMARY KEY CLUSTERED ([bookId]);

-- AlterTable
ALTER TABLE [dbo].[chapter_tb] DROP CONSTRAINT [chapter_tb_pkey];
ALTER TABLE [dbo].[chapter_tb] ALTER COLUMN [chapterId] BIGINT NOT NULL;
ALTER TABLE [dbo].[chapter_tb] ALTER COLUMN [bookId] BIGINT NOT NULL;
ALTER TABLE [dbo].[chapter_tb] ADD CONSTRAINT chapter_tb_pkey PRIMARY KEY CLUSTERED ([chapterId]);

-- AlterTable
ALTER TABLE [dbo].[chat_tb] DROP CONSTRAINT [chat_tb_pkey];
ALTER TABLE [dbo].[chat_tb] ALTER COLUMN [chatId] BIGINT NOT NULL;
ALTER TABLE [dbo].[chat_tb] ALTER COLUMN [userId] BIGINT NOT NULL;
ALTER TABLE [dbo].[chat_tb] ADD CONSTRAINT chat_tb_pkey PRIMARY KEY CLUSTERED ([chatId]);

-- AlterTable
ALTER TABLE [dbo].[embeddings_tb] DROP CONSTRAINT [embeddings_tb_pkey];
ALTER TABLE [dbo].[embeddings_tb] ALTER COLUMN [id] BIGINT NOT NULL;
ALTER TABLE [dbo].[embeddings_tb] ADD CONSTRAINT embeddings_tb_pkey PRIMARY KEY CLUSTERED ([id]);

-- AlterTable
ALTER TABLE [dbo].[log_tb] DROP CONSTRAINT [log_tb_pkey];
ALTER TABLE [dbo].[log_tb] ALTER COLUMN [id] BIGINT NOT NULL;
ALTER TABLE [dbo].[log_tb] ADD CONSTRAINT log_tb_pkey PRIMARY KEY CLUSTERED ([id]);

-- AlterTable
ALTER TABLE [dbo].[qNa_tb] DROP CONSTRAINT [qNa_tb_pkey];
ALTER TABLE [dbo].[qNa_tb] ALTER COLUMN [qNaId] BIGINT NOT NULL;
ALTER TABLE [dbo].[qNa_tb] ALTER COLUMN [chatId] BIGINT NOT NULL;
ALTER TABLE [dbo].[qNa_tb] ADD CONSTRAINT qNa_tb_pkey PRIMARY KEY CLUSTERED ([qNaId]);

-- AlterTable
ALTER TABLE [dbo].[user_tb] DROP CONSTRAINT [user_tb_pkey];
ALTER TABLE [dbo].[user_tb] ALTER COLUMN [userId] BIGINT NOT NULL;
ALTER TABLE [dbo].[user_tb] ADD CONSTRAINT user_tb_pkey PRIMARY KEY CLUSTERED ([userId]);

-- AddForeignKey
ALTER TABLE [dbo].[chat_tb] ADD CONSTRAINT [chat_tb_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[user_tb]([userId]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[qNa_tb] ADD CONSTRAINT [qNa_tb_chatId_fkey] FOREIGN KEY ([chatId]) REFERENCES [dbo].[chat_tb]([chatId]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[chapter_tb] ADD CONSTRAINT [chapter_tb_bookId_fkey] FOREIGN KEY ([bookId]) REFERENCES [dbo].[book_tb]([bookId]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
