/*
  Warnings:

  - Made the column `title` on table `Book` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Book` required. This step will fail if there are existing NULL values in that column.
  - Made the column `author` on table `Book` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Book` MODIFY `title` VARCHAR(255) NOT NULL,
    MODIFY `description` VARCHAR(255) NOT NULL,
    MODIFY `author` VARCHAR(255) NOT NULL,
    MODIFY `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    MODIFY `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0);
