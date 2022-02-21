/*
  Warnings:

  - You are about to alter the column `raio` on the `profissional` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Int`.

*/
-- AlterTable
ALTER TABLE `profissional` MODIFY `raio` INTEGER NOT NULL;
