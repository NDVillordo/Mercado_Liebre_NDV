const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/',(req,res)=>{

    res.sendFile(path.join(__dirname+'/views/index.html'))

})
app.get('/login',(req,res)=>{

    res.sendFile(path.join(__dirname+'/views/login.html'))

})
app.get('/register',(req,res)=>{

    res.sendFile(path.join(__dirname+'/views/register.html'))

})



app.listen(PORT,()=>{

    console.log('servidor'+ PORT +'en uso');

});