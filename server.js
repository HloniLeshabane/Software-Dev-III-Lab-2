const express = require("express");
const app = express();
let port = process.env.PORT || 3000;

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index');
})

app.listen(port);