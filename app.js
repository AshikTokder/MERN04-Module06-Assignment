// Application Configuration holds
const express = require('express'); 
const router = require('./src/Routes/api');
const app = express();
// Application Routes
app.use('/api',router);
module.exports = app;