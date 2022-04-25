/*
  Warnings:

  - A unique constraint covering the columns `[identificacaoProfissionalId]` on the table `profissional` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `profissional_identificacaoProfissionalId_key` ON `profissional`(`identificacaoProfissionalId`);
