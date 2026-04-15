-- CreateTable
CREATE TABLE "Users" (
    "userId" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "secondName" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "dateOfBirth" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "conPassword" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_userId_key" ON "Users"("userId");
