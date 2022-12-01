const {getConnection} = require('./db/db-connection-mongo.js');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

getConnection();

const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use('/order', require('./router/order'));
//app.use('/status', require('./router/status'));

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
});
