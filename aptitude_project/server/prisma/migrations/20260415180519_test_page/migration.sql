/*
  Warnings:

  - Added the required column `img` to the `testPage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "testPage" ADD COLUMN     "img" TEXT NOT NULL;
