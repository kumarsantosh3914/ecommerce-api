// this package returns a function using which we can initiate a new express application object
const express = require('express');
const { PORT } = require('./config/serverConfig');

const app = express();

app.listen(PORT, async () => {
    // this callback will be executed everytime the server starts
    console.log(`Server started on port ${PORT}`);
})