/*
  Warnings:

  - You are about to drop the column `bookId` on the `BookListBook` table. All the data in the column will be lost.
  - Added the required column `OLID` to the `BookListBook` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `BookListBook` DROP FOREIGN KEY `BookListBook_bookId_fkey`;

-- AlterTable
ALTER TABLE `BookListBook` DROP COLUMN `bookId`,
    ADD COLUMN `OLID` VARCHAR(255) NOT NULL;

-- AddForeignKey
ALTER TABLE `BookListBook` ADD CONSTRAINT `BookListBook_OLID_fkey` FOREIGN KEY (`OLID`) REFERENCES `Book`(`OLID`) ON DELETE RESTRICT ON UPDATE CASCADE;
