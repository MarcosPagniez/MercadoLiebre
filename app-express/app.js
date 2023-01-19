const express = require ("express");

const port =process.env.PORT || 3001;

const app = express();

app.listen(port,() => console.log(`Servidor escuchando en puerto ${port}`));

app.get(`/`,(req,res)=> {
    res.send("/home.html")
})