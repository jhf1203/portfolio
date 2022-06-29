const express = require("express")
const mongoose = require("mongoose")
// const routes = require("./routes")
import fetch from "node-fetch"
// add routes var

require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 3001

router.get("/:list", async (req, res) => {

    const key = process.env.REACT_APP_LASTFM_API_KEY
    let url = `https://ws.audioscrobbler.com/2.0/?method=user.getweeklyalbumchart&user=thenewblueblood&api_key=${key}&format=json`
    const retrieve = await fetch(url)
    const data = await retrieve.json()
    res.json(data)
})

// app.use(routes)

app.listen(PORT, () => {
    console.log("env", process.env)
    console.log(`now listening on port# ${PORT}`)
})