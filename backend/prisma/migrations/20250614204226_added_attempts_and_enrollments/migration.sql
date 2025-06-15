/*
  Warnings:

  - You are about to drop the column `times` on the `courses` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `courses` DROP COLUMN `times`,
    ADD COLUMN `attempts` INTEGER NOT NULL DEFAULT 2;
