const express = require('express');
const app = express();

require('./config/mongoose')
const cors = require('cors');

app.use(cors())
app.use(express.json());
const routes = require('./router')
app.use(routes)

app.listen(5000, () => { console.log('Server is listening to port 5000') })