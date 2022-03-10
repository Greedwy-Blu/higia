-- CreateTable
CREATE TABLE `imgem_perfil` (
    `id` VARCHAR(191) NOT NULL,
    `identificacao_perfil` VARCHAR(191) NOT NULL,
    `imagen` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `imgem_perfil_identificacao_perfil_key`(`identificacao_perfil`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cliente` (
    `id` VARCHAR(191) NOT NULL,
    `nivel` INTEGER NOT NULL,
    `medicamentos` VARCHAR(191) NOT NULL,
    `identificacaoCliente` VARCHAR(191) NOT NULL,

    INDEX `Cliente_identificacaoCliente_fkey`(`identificacaoCliente`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `comentario_post` (
    `id` VARCHAR(191) NOT NULL,
    `nota` INTEGER NOT NULL,
    `coteudo` VARCHAR(191) NOT NULL,
    `ComentarioProfissinalID` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `ComentariosClienteID` VARCHAR(191) NOT NULL,

    INDEX `Comentario_Post_ComentarioProfissinalID_fkey`(`ComentarioProfissinalID`),
    INDEX `Comentario_Post_ComentariosClienteID_fkey`(`ComentariosClienteID`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notificacao_comentario` (
    `id` VARCHAR(191) NOT NULL,
    `comentario` VARCHAR(191) NOT NULL,
    `notificacaoID` VARCHAR(191) NOT NULL,
    `imgem_perfil` VARCHAR(191) NOT NULL,
    `cliente_id` VARCHAR(191) NOT NULL,

    INDEX `Notificacao_Comentario_cliente_id_fkey`(`cliente_id`),
    INDEX `Notificacao_Comentario_notificacaoID_fkey`(`notificacaoID`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `profissional` (
    `id` VARCHAR(191) NOT NULL,
    `imagens` VARCHAR(191) NULL,
    `servico` VARCHAR(191) NOT NULL,
    `raio` INTEGER NOT NULL,
    `grupo` INTEGER NOT NULL DEFAULT 1,
    `ambiente` CHAR(55) NOT NULL,
    `localatendimento` CHAR(55) NOT NULL,
    `especial` CHAR(55) NOT NULL DEFAULT 'SIM',
    `idade` INTEGER NOT NULL,
    `identificacaoProfissionalId` VARCHAR(191) NOT NULL,
    `especialidade` VARCHAR(191) NOT NULL,
    `qualificacao` VARCHAR(191) NOT NULL,

    INDEX `Profissional_identificacaoProfissionalId_fkey`(`identificacaoProfissionalId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `cidade` VARCHAR(191) NULL,
    `SobreNome` VARCHAR(191) NULL,
    `idade` INTEGER NULL,
    `telefone` VARCHAR(191) NULL,
    `genero` VARCHAR(191) NULL,
    `senha` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
