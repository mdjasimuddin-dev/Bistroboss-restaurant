const express = require('express')
const cors = require('cors')
require('dotenv').config()
const mongodb = require('mongodb')
const port = process.env.PORT || 5000



const app = express()


app.get('/', (req, res) => {
    res.send("Bistro boss server start")
})


app.listen(port, () => {
    console.log(`Server Start Port is : ${port}`);
})


