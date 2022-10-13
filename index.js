const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001

app.listen(PORT, (req,res) => {
    console.log(`We are listening on port ${PORT}`)
})

app.get('/', function(req,res) {
    console.log(`Server his running on port: ${PORT}`)
    res.send("Your server is running!!!")
})