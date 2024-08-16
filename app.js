if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}

// const express = require("express")
// const app = express()
// const port = 3000


// app.get("/", (req, res) => {
//     res.status(200).json({ message: "HELLO WORLD GUYS"})
// })

// app.listen(port => {
//     console.log("SERVER RUNNING");
// })

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.status(200).json({ message: "HELLO WORLD GUYS 44"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
