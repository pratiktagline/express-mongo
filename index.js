require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT;
const database = require('./database')
const userController = require('./controllers/user')

app.use('/api/user', userController)

app.all('/', (req, res) => {

    return res.json({
        status: true,
        message: "done"
    })
})

app.listen(port, () => {
    console.log("server running at", port)
})