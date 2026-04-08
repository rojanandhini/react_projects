const express = require("express");
const cors= require("cors");
const path = require('path');
const {PrismaClient} = require("@prisma/client");

const app=express();
const prisma= new PrismaClient();

app.use(cors());

// fetch  all news
app.get("/news",async(req,res)=>{
    try {
        const allNews=await prisma.news.findMany();

        res.status(200).json({message:"Data Retrieved",data: allNews})
            
    } catch (error) {
        res.status(500).json({message:"Couldn't fetch data", error: error})
    }});
// fetch news by date
app.get("/api/latestNews", async(req,res)=>{
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
app.get("/api/recentNews/:postNo", async(req,res)=>{
    try {
        const {postNo}= req.params;
        
        console.log(req.params);
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

// 1. Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// 2. The "catch-all" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('/*splat', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{console.log(`API is woking on ${PORT} `);
})