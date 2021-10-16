const express = require("express")
const mongoose = require("mongoose")
// add routes var

const app = express()
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`now listening on port# ${PORT}`)
})