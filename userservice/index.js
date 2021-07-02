const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get("/api/v1/users", (req, res) => {
    res.send({
        "name" : "baris"
    })
})

app.listen(5000, '0.0.0.0')