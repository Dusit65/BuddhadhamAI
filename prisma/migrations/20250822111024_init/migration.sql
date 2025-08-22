/*
  Warnings:

  - You are about to drop the column `fileData` on the `embeddings_tb` table. All the data in the column will be lost.
  - You are about to drop the column `fileName` on the `embeddings_tb` table. All the data in the column will be lost.
  - You are about to drop the column `fileType` on the `embeddings_tb` table. All the data in the column will be lost.
  - Added the required column `embeddings` to the `embeddings_tb` table without a default value. This is not possible if the table is not empty.
  - Added the required column `metadata` to the `embeddings_tb` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[embeddings_tb] DROP CONSTRAINT [embeddings_tb_updatedAt_df];
ALTER TABLE [dbo].[embeddings_tb] DROP COLUMN [fileData],
[fileName],
[fileType];
ALTER TABLE [dbo].[embeddings_tb] ADD [createdAt] DATETIME2 NOT NULL CONSTRAINT [embeddings_tb_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
[embeddings] VARBINARY(max) NOT NULL,
[metadata] VARBINARY(max) NOT NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
