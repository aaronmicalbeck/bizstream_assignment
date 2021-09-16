require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const DATABASE_URL = process.env.DATABASE_URL;
const db = mongoose.connection



db.on('error', (error) => console.error(error));
db.once('open', ()=> console.log('Connected to Database'))


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });



























// SERVER LISTENING

app.listen(PORT, ()=> {
    console.log(`Server is running on port:${PORT}`);
})