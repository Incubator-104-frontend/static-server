const express = require('express');
const app = express();
const router = require('../routers/router');
const port = 3000;



app.use('/static', express.static('static'));
app.use('/', router);

app.listen(port);