// Globals

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const db = mongoose.connection;
const path = require('path');
require('dotenv').config();
app.use(express.json());
app.use(express.static("public"));

// Database

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

db.on('error', (error) => console.error(error));
db.once('open', ()=> console.log('Connected to Database'))

// Home Route

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname + "./public/index.html"));
})

// Requiring all routes

const contactsRouter = require('./routes/contacts');
app.use('/contacts', contactsRouter);


// SERVER LISTENING

app.listen(PORT, ()=> {
    console.log(`Server is running on port:${PORT}`);
})