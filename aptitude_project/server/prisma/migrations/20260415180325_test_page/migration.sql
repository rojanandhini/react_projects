-- CreateTable
CREATE TABLE "testPage" (
    "testId" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "topics" TEXT NOT NULL,

    CONSTRAINT "testPage_pkey" PRIMARY KEY ("testId")
);

-- CreateIndex
CREATE UNIQUE INDEX "testPage_testId_key" ON "testPage"("testId");

-- CreateIndex
CREATE UNIQUE INDEX "testPage_slug_key" ON "testPage"("slug");
