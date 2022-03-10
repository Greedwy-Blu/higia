/*
  Warnings:

  - Made the column `senha` on table `usuario` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `usuario` MODIFY `senha` VARCHAR(191) NOT NULL;
