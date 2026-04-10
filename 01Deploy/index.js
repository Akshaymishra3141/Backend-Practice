const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const port = process.env.PORT;

app.get('/',(req,res)=>{
    res.send('Hello Akshay')
})

app.get('/twitter', (req,res)=>{
    res.send('<h1>Twitter</h1>')
})
app.get('/login', (req,res)=>{
    res.send('<h1>Please Login to this Web Site</h1>')
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})