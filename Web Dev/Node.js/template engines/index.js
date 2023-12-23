const express = require('express');
const app = express();
port = 5000;

app.set('view engine', 'ejs')



app.get('/', (req, res)=>{
    res.json({msg: "hiii"})
})

app.get('/profile', (req,res)=>{
    console.log(req.value);
    res.json({msg:"Welcome to the profile page!!"})
})

app.get('/profile/:username', (req,res)=>{  
    res.render('profile', {username:req.params.username, email:`${req.params.username}@gmail.com`})
})

app.listen(port, (err)=>{
    if(!err)
        console.log("server is up")
})