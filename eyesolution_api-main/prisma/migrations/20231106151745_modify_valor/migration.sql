/*
  Warnings:

  - You are about to alter the column `valor_pagamento` on the `tb_pagamentos` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.

*/
-- AlterTable
ALTER TABLE `tb_pagamentos` MODIFY `valor_pagamento` DECIMAL(10, 2) NOT NULL;
