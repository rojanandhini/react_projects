const express = require("express");
const {PrismaClient} = require("@prisma/client");

const app=express();
const prisma= new PrismaClient();

// fetch  all news
app.get("/news",async(req,res)=>{
    try {
        const allNews=await prisma.news.findMany();

        res.status(200).json({message:"Data Retrieved",data: allNews})
            
    } catch (error) {
        res.status(500).json({message:"Couldn't fetch data", error: error})
    }});
// fetch news by date
app.get("/latestNews", async(req,res)=>{
    try {
       const latestNews = await prisma.news.findFirst({
            orderBy: {
                postDate: 'desc' // Sorts from newest to oldest
            }
        });

        res.status(200).json({message:"Latest News Received", data: latestNews});
    } catch (error) {
        res.status(500).json({message:"Data couldn't be retrieved", error:error});
    }
})

//fetch news by id
app.get("/recentNews/:postNo", async(req,res)=>{
    try {
        const {postNo}= req.params;
        const newsById = await prisma.news.findUnique({
            where:{
                postNo: postNo
            }
        })

        res.status(200).json({message:"Data Fetch Successful",data: newsById})
    } catch (error) {
        res.status(500).json({message:"API failed", error: error})
    }
})
const PORT = 5500;
app.listen(PORT,()=>{console.log(`API is woking on ${PORT} `);
})