require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const db = mongoose.connection;
const path = require('path');



db.on('error', (error) => console.error(error));
db.once('open', ()=> console.log('Connected to Database'))

// 

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname + "/index.html"));
})

app.use(express.json());

const contactsRouter = require('./routes/contacts');
app.use('/contacts', contactsRouter);


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });



// SERVER LISTENING

app.listen(PORT, ()=> {
    console.log(`Server is running on port:${PORT}`);
})