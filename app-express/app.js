const express = require ("express");
const path=require("path");
const port =process.env.PORT || 3001;

const app = express();
const publicfolder=path.resolve("public");
app.use(express.static(path.join(__dirname, 'public')))
app.listen(port,() => console.log(`Servidor escuchando en puerto ${port}`));

app.get('/',(req,res)=> {
    res.sendFile(path.join(__dirname, "/views/home.html"));
})

app.get('/login',(req,res)=> {
    res.sendFile(path.join(__dirname, "/views/login.html"));
})

app.get('/register',(req,res)=> {
    res.sendFile(path.join(__dirname, "/views/register.html"));
})