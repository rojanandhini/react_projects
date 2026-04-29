/*
  Warnings:

  - You are about to drop the `testPage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TestPaper" DROP CONSTRAINT "TestPaper_testPageId_fkey";

-- DropTable
DROP TABLE "testPage";

-- CreateTable
CREATE TABLE "TestPage" (
    "testId" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "topics" TEXT NOT NULL,

    CONSTRAINT "TestPage_pkey" PRIMARY KEY ("testId")
);

-- CreateIndex
CREATE UNIQUE INDEX "TestPage_testId_key" ON "TestPage"("testId");

-- CreateIndex
CREATE UNIQUE INDEX "TestPage_slug_key" ON "TestPage"("slug");

-- AddForeignKey
ALTER TABLE "TestPaper" ADD CONSTRAINT "TestPaper_testPageId_fkey" FOREIGN KEY ("testPageId") REFERENCES "TestPage"("testId") ON DELETE RESTRICT ON UPDATE CASCADE;
