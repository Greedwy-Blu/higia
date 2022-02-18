/*
  Warnings:

  - You are about to alter the column `idade` on the `profissional` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Added the required column `coteudo` to the `Comentario_Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comentario_post` ADD COLUMN `coteudo` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `profissional` MODIFY `idade` INTEGER NOT NULL;
