/*
  Warnings:

  - You are about to drop the column `author` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `isbn` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `bookId` on the `BookList` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[OLID]` on the table `Book` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `OLID` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `BookList` DROP FOREIGN KEY `BookList_bookId_fkey`;

-- AlterTable
ALTER TABLE `Book` DROP COLUMN `author`,
    DROP COLUMN `description`,
    DROP COLUMN `isbn`,
    ADD COLUMN `OLID` VARCHAR(255) NOT NULL,
    ADD COLUMN `imagePath` VARCHAR(191) NULL,
    ADD COLUMN `pageCount` VARCHAR(191) NULL,
    ADD COLUMN `publishedDate` VARCHAR(191) NULL,
    MODIFY `title` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `BookList` DROP COLUMN `bookId`,
    ADD COLUMN `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0);

-- AlterTable
ALTER TABLE `User` DROP COLUMN `password`,
    DROP COLUMN `username`;

-- CreateTable
CREATE TABLE `BookListBook` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bookListId` INTEGER NOT NULL,
    `bookId` INTEGER NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Book_OLID_key` ON `Book`(`OLID`);

-- AddForeignKey
ALTER TABLE `BookListBook` ADD CONSTRAINT `BookListBook_bookListId_fkey` FOREIGN KEY (`bookListId`) REFERENCES `BookList`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BookListBook` ADD CONSTRAINT `BookListBook_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `Book`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
