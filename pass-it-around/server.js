const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send(`99 large cups of boba tea on the wall.
            <a href="/98">Take one down, pass it around.</a>`
            )
    })

app.get('/:number_of_bobacups', (req, res) => {
    const numberOfBobacups = parseInt(req.params.number_of_bobacups);

    if (numberOfBobacups === 0) {
        res.send(`No more cups of boba tea on the wall. <a href='/'>Start over</a>`)
    } else {
        const nextNumber = numberOfBobacups -1;
        const message = `${numberOfBobacups} large cups of boba tea on the wall.
                        <a href='/${nextNumber}'>Take one down, pass it around</a>`;
        const startOverLink = `<a href="/'>Start over</a>`;
        res.send(message + (nextNumber === 0 ? startOverLink : ''));
    }
})

app.listen(3000, () => {
    console.log("listening")
})