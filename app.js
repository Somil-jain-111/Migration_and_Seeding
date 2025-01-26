require("dotenv").config();
const express  = require("express");
const http = require('http');
const db = require("./config/db-config");
const app = express();
const port = process.env.PORT || 4000;



var server = http.createServer(app);

server.listen(port,()=>{
    console.log('Listening on port ' + server.address().port);
})
