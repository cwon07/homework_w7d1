const express = require("express")
const app = express()

////// Greetings ///////

app.get("/greeting/:name", (req, res) => {
    const name = req.params.name
    res.send(`What's up, ${name}.`)
})

////// Tip Calculator //////

app.get("/tip/:total/:tipPercentage", (req, res) => {
    const total = req.params.total
    const tipPercentage = req.params.tipPercentage
    res.send(`Your total comes to ${total} with ${tipPercentage}% tips.`)
})

////// Magic 8 Ball //////

app.get("/magic/:id", (req, res) => {
    const arr = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    const id = req.params.id
    res.send(`<html>
        <body>
            <h1>Will I Be A Millionaire?</h1><br>
            <h1>${arr[Math.floor(Math.random()*arr.length)]}</h1>
        </body>
    </html>`)
})


app.listen(3000, () => {
    console.log("listening")
})