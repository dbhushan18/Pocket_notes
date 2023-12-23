const express = require('express');
const app = express();

port = 8000;

const customMiddleware = (req, res,next)=>{
    req.value = 50;
    console.log("Entered in middleware")
    next();
}

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.json({msg: "home page"})
})

app.get('/msg', (req, res)=>{
    res.sendFile(__dirname+"/msg.html")
})


app.listen(port, (err)=>{
    if(!err)
        console.log("Server is up")
})