/*
  Warnings:

  - The primary key for the `cliente` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `cliente` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `identificacaoCliente` on the `cliente` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `comentario_post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `comentario_post` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `ComentarioProfissinalID` on the `comentario_post` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `ComentariosClienteID` on the `comentario_post` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `imgem_perfil` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `imgem_perfil` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `identificacao_perfil` on the `imgem_perfil` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `notificacao_comentario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `notificacao_comentario` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `notificacaoID` on the `notificacao_comentario` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `cliente_id` on the `notificacao_comentario` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `profissional` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `profissional` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `identificacaoProfissionalId` on the `profissional` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `usuario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `usuario` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `cliente` DROP FOREIGN KEY `Cliente_identificacaoCliente_fkey`;

-- DropForeignKey
ALTER TABLE `comentario_post` DROP FOREIGN KEY `Comentario_Post_ComentarioProfissinalID_fkey`;

-- DropForeignKey
ALTER TABLE `comentario_post` DROP FOREIGN KEY `Comentario_Post_ComentariosClienteID_fkey`;

-- DropForeignKey
ALTER TABLE `imgem_perfil` DROP FOREIGN KEY `imgem_perfil_identificacao_perfil_fkey`;

-- DropForeignKey
ALTER TABLE `notificacao_comentario` DROP FOREIGN KEY `Notificacao_Comentario_cliente_id_fkey`;

-- DropForeignKey
ALTER TABLE `notificacao_comentario` DROP FOREIGN KEY `Notificacao_Comentario_notificacaoID_fkey`;

-- DropForeignKey
ALTER TABLE `profissional` DROP FOREIGN KEY `Profissional_identificacaoProfissionalId_fkey`;

-- DropIndex
DROP INDEX `usuario_id_key` ON `usuario`;

-- AlterTable
ALTER TABLE `cliente` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `identificacaoCliente` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `comentario_post` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `ComentarioProfissinalID` INTEGER NOT NULL,
    MODIFY `ComentariosClienteID` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `imgem_perfil` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `identificacao_perfil` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `notificacao_comentario` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `notificacaoID` INTEGER NOT NULL,
    MODIFY `cliente_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `profissional` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `identificacaoProfissionalId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `usuario` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `imgem_perfil` ADD CONSTRAINT `imgem_perfil_identificacao_perfil_fkey` FOREIGN KEY (`identificacao_perfil`) REFERENCES `usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cliente` ADD CONSTRAINT `Cliente_identificacaoCliente_fkey` FOREIGN KEY (`identificacaoCliente`) REFERENCES `usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comentario_post` ADD CONSTRAINT `Comentario_Post_ComentariosClienteID_fkey` FOREIGN KEY (`ComentariosClienteID`) REFERENCES `cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comentario_post` ADD CONSTRAINT `Comentario_Post_ComentarioProfissinalID_fkey` FOREIGN KEY (`ComentarioProfissinalID`) REFERENCES `profissional`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notificacao_comentario` ADD CONSTRAINT `Notificacao_Comentario_cliente_id_fkey` FOREIGN KEY (`cliente_id`) REFERENCES `cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notificacao_comentario` ADD CONSTRAINT `Notificacao_Comentario_notificacaoID_fkey` FOREIGN KEY (`notificacaoID`) REFERENCES `comentario_post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `profissional` ADD CONSTRAINT `Profissional_identificacaoProfissionalId_fkey` FOREIGN KEY (`identificacaoProfissionalId`) REFERENCES `usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
