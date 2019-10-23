const express = require("express");
const fs = require("fs");
const path = require("path");

const app = require('express')();
const http = require('http').createServer(app);

// MAKE ALL FILES IN PUBLIC ACCESSIBLE

app.use(express.static(path.join(__dirname, "public")));

http.listen(3000, function(){
  console.log('listening on *:3000');
});
