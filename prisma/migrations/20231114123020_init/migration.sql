/*
  Warnings:

  - You are about to drop the column `priority` on the `Todo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "priority";

-- DropEnum
DROP TYPE "Priority";