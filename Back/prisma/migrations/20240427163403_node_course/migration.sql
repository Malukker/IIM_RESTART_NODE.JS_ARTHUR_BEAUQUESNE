/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `age` to the `Agent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `Agent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `agent` ADD COLUMN `age` INTEGER NOT NULL,
    ADD COLUMN `role` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `user`;
