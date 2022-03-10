/*
  Warnings:

  - Made the column `email` on table `usuario` required. This step will fail if there are existing NULL values in that column.
  - Made the column `senha` on table `usuario` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `usuario` MODIFY `email` VARCHAR(191) NOT NULL,
    MODIFY `senha` VARCHAR(191) NOT NULL;
