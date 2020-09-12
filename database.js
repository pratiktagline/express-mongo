const mongoose = require('mongoose')
const assert = require('assert')
const db_url = process.env.DB_URL;

mongoose.connect(
    db_url,
    {
        useNewUrlParser : true,
        useUnifiedTopology : true,
        useCreateIndex : true
    },
    (error,link) => {
        // check error
        assert.equal(error, null, "DB connection stop..")

        // console.log(link)
        console.log("DB connection successful")
    })