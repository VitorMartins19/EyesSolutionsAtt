/*
  Warnings:

  - Added the required column `valor_pagamento` to the `tb_pagamentos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tb_pagamentos` ADD COLUMN `valor_pagamento` DECIMAL(65, 30) NOT NULL;
