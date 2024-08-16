if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/hello', (req, res) => {
    res.status(200).json({ message: "SURYANA JR 2"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
