-- CreateTable
CREATE TABLE "News" (
    "postNo" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "eligibility" TEXT NOT NULL,
    "salary" TEXT NOT NULL,
    "impDates" TEXT NOT NULL,
    "howToApply" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "News_postNo_key" ON "News"("postNo");
