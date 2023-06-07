const express = require("express")
const app = express()

app.get("/greeting/:name", (req, res) => {
    const name = req.params.name
    res.send(`What's up, ${name}.`)
})

app.get("/tip/:total/:tipPercentage", (req, res) => {
    const total = req.params.total
    const tipPercentage = req.params.tipPercentage
    res.send(`Your total comes to ${total} with ${tipPercentage}% tips.`)
})

app.listen(3000, () => {
    console.log("listening")
})