-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `cidade` VARCHAR(191) NULL,
    `SobreNome` VARCHAR(191) NULL,
    `idade` INTEGER NULL,
    `telefone` VARCHAR(191) NULL,
    `genero` VARCHAR(191) NULL,

    UNIQUE INDEX `Usuario_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Profissional` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `imagens` VARCHAR(191) NULL,
    `servico` VARCHAR(191) NOT NULL,
    `raio` DECIMAL(65, 30) NOT NULL DEFAULT 6.2,
    `grupo` INTEGER NOT NULL DEFAULT 1,
    `ambiente` CHAR(55) NOT NULL,
    `localatendimento` CHAR(55) NOT NULL,
    `especial` CHAR(55) NOT NULL DEFAULT 'SIM',
    `idade` VARCHAR(191) NOT NULL,
    `identificacaoProfissionalId` INTEGER NOT NULL,
    `especialidade` VARCHAR(191) NOT NULL,
    `qualificacao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cliente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nivel` INTEGER NOT NULL,
    `medicamentos` VARCHAR(191) NOT NULL,
    `identificacaoCliente` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Notificacao_Comentario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `comentario` VARCHAR(191) NOT NULL,
    `notificacaoID` INTEGER NOT NULL,
    `imgem_perfil` VARCHAR(191) NOT NULL,
    `cliente_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comentario_Post` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nota` INTEGER NOT NULL,
    `ComentarioProfissinalID` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `ComentariosClienteID` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `imgem_perfil` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `identificacao_perfil` INTEGER NOT NULL,
    `imagen` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Profissional` ADD CONSTRAINT `Profissional_identificacaoProfissionalId_fkey` FOREIGN KEY (`identificacaoProfissionalId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cliente` ADD CONSTRAINT `Cliente_identificacaoCliente_fkey` FOREIGN KEY (`identificacaoCliente`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notificacao_Comentario` ADD CONSTRAINT `Notificacao_Comentario_cliente_id_fkey` FOREIGN KEY (`cliente_id`) REFERENCES `Cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notificacao_Comentario` ADD CONSTRAINT `Notificacao_Comentario_notificacaoID_fkey` FOREIGN KEY (`notificacaoID`) REFERENCES `Comentario_Post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comentario_Post` ADD CONSTRAINT `Comentario_Post_ComentarioProfissinalID_fkey` FOREIGN KEY (`ComentarioProfissinalID`) REFERENCES `Profissional`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comentario_Post` ADD CONSTRAINT `Comentario_Post_ComentariosClienteID_fkey` FOREIGN KEY (`ComentariosClienteID`) REFERENCES `Cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `imgem_perfil` ADD CONSTRAINT `imgem_perfil_identificacao_perfil_fkey` FOREIGN KEY (`identificacao_perfil`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
