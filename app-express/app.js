const express = require ("express");

const port =process.env.PORT || 3001;

const app = express();

app.listen(port,() => console.log(`Servidor escuchando en puerto ${port}`));

Router.get(`/`,(req,res)=> {
    res.send("/home")
})