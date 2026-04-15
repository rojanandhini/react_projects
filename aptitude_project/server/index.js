const express = require("express");
const cors= require("cors");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const path = require('path');
const {PrismaClient} = require("@prisma/client");

const app=express();
const prisma= new PrismaClient();

app.use(cors());
app.use(express.json());

// fetch  all news
app.get("/api/news",async(req,res)=>{
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

//createMany news post 
app.post("/api/addManyNews", async(req,res)=>{
    try {
       const newNews= req.body;
       
       const allNews = await prisma.news.createMany({
        data: newNews,
       });

       res.status(200).json({message:"Data Added Successfully", data: allNews})
    } catch (error) {
        res.status(500).json({message:"Data Addition Failed", error: error})
    }
})

//create user

app.post("/api/signup", async(req, res)=>{
    try {
        const userData= req.body;

    const isUserExists = await prisma.users.findUnique({
        where:{
            email : userData.email,
        },
    });

    if (isUserExists)
    {
        res.status(401).json({message:"User already exists! Try Login"});
    }
    else{
        const hashPassword = await bcrypt.hash(userData.password, 10);
        console.log(hashPassword);
        const newUser = await prisma.users.create({
                data:{
                    firstName : userData.firstName,
                    secondName : userData.secondName,
                    gender : userData.gender,
                    email: userData.email,
                    dateOfBirth : userData.dateOfBirth,
                    password: hashPassword,
                    mobNo : userData.mobNo,
                },
            });

            const {password, ...remData}= newUser;
        res.status(200).json({message:"User created successfully", data: remData});
    }
    } catch (error) {
        res.status(500).json({message:"Unable to register the user", error: error});
    }
    
})

// login user
app.post("/api/login",async(req,res)=>{
    try {
        const loginData = req.body;

        const isUserExists = await prisma.users.findUnique({
            where:{
                email : loginData.email,
            },
        });

        if(isUserExists)
        {
            const {password, ...restData} = isUserExists;

            bcrypt.compare(loginData.password, password, function(err, result) {
                if (result) {

                    var tempToken = jwt.sign({ userId: isUserExists.userId, email : isUserExists.email }, "temp-room", {expiresIn: "10s"});

                    var mainToken = jwt.sign({userId: isUserExists.userId, email : isUserExists.email  }, "main-room",{expiresIn:"20s"});

                    const allData= {
                        token:{
                            tempToken,
                            mainToken,
                        }, ...restData
                    };
                     res.status(200).json({message:"Login successful",data:allData});

                } else {
                    res.status(401).json({message:"Incorrect Password"})
                }
               
});
        }else{
            res.status(404).json({message:"User didn't exist! "})
        }
    } catch (error) {
        res.status(500).json({message:"login failed",error:error});
    }
})

// POST => /refresh
app.post("/api/refresh", (req, res) => {
  // 1, Data from front-end
  const data = req.body;

  // 2, Db logic
  jwt.verify(data.mainToken, "main-room", (err, decoded) => {
    if (!err) {
      const tempToken = jwt.sign(
        {
          userId: decoded.userId,
          email: decoded.email,
        },
        "temp-room",
        { expiresIn: "5s" },
      );

      res.status(200).json({ message: "Token Generated", data: tempToken });
    } else {
      res.status(401).json({ message: "Invalid Token" });
    }
  });

  // 3, Data to front-end
});

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