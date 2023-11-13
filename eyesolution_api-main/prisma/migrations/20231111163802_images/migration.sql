/*
  Warnings:

  - You are about to drop the `tb_armacao` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `formato` to the `tb_imagens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modelo` to the `tb_imagens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `preco` to the `tb_imagens` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `tb_armacao` DROP FOREIGN KEY `tb_armacao_imagem_id_fkey`;

-- AlterTable
ALTER TABLE `tb_imagens` ADD COLUMN `formato` VARCHAR(63) NOT NULL,
    ADD COLUMN `modelo` VARCHAR(63) NOT NULL,
    ADD COLUMN `preco` VARCHAR(63) NOT NULL;

-- DropTable
DROP TABLE `tb_armacao`;
