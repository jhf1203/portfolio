const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes")
// add routes var

require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(routes)

app.listen(PORT, () => {
    console.log("env", process.env)
    console.log(`now listening on port# ${PORT}`)
})