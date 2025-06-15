/*
  Warnings:

  - A unique constraint covering the columns `[enrollmentId,chance]` on the table `grades` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `grades_enrollmentId_chance_key` ON `grades`(`enrollmentId`, `chance`);
