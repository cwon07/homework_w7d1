const express = require("express")
const app = express()

app.get("/greeting/:name", (req, res) => {
    const name = req.params.name
    res.send(`What's up, ${name}.`)
})

app.listen(3000, () => {
    console.log("listening")
})