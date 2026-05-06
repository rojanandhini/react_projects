-- CreateTable
CREATE TABLE "TestSet" (
    "id" SERIAL NOT NULL,
    "questions" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "testPaperId" TEXT NOT NULL,

    CONSTRAINT "TestSet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserTest" (
    "id" TEXT NOT NULL,
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "testId" INTEGER NOT NULL,
    "answers" JSONB NOT NULL,
    "qnAttempted" BOOLEAN NOT NULL DEFAULT false,
    "score" INTEGER NOT NULL,
    "correctAnsCount" INTEGER NOT NULL,
    "wrongAnsCount" INTEGER NOT NULL,
    "unansweredCount" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserTest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserMetrics" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "setsAttempted" TEXT[],
    "totalCorrect" INTEGER NOT NULL DEFAULT 0,
    "totalIncorrect" INTEGER NOT NULL DEFAULT 0,
    "totalUnanswered" INTEGER NOT NULL DEFAULT 0,
    "review" INTEGER NOT NULL,

    CONSTRAINT "UserMetrics_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TestSet_id_key" ON "TestSet"("id");

-- CreateIndex
CREATE UNIQUE INDEX "UserTest_id_key" ON "UserTest"("id");

-- CreateIndex
CREATE UNIQUE INDEX "UserMetrics_userId_key" ON "UserMetrics"("userId");

-- AddForeignKey
ALTER TABLE "TestSet" ADD CONSTRAINT "TestSet_testPaperId_fkey" FOREIGN KEY ("testPaperId") REFERENCES "TestPaper"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTest" ADD CONSTRAINT "UserTest_testId_fkey" FOREIGN KEY ("testId") REFERENCES "TestSet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTest" ADD CONSTRAINT "UserTest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMetrics" ADD CONSTRAINT "UserMetrics_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
