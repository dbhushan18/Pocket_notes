const express = require('express')
const app = express();

app.get('/', (request, response)=>{
    // response.send("welcome from newly created api")
    response.sendFile(__dirname + '/index.html');

})

app.get('/message', (req , res)=>{
    res.send({'message': "message from api"});
})

app.get('/info', (req, res)=>{
    let products = [
        {id:1, name:"abcvv", price:123}
    ]
    res.send({products});
})

// app.get('/about', (request, response)=>{
//     response.send("welcome from About newly created api")
// })


app.listen(8000);