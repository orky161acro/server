require('dotenv').config("./env");

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const apiRouter = require('./api/index');
const compression = require('compression')

const app = express()
const port = 9001

app.use(cors())
app.use(bodyParser.json())
app.use(compression())
app.use('/api', apiRouter);

app.use((err, req, res, next) => {
        if (res.headersSent) {
            return next(err)
        }
        console.error(err)
        res.status(500).json({ error: "something when wrong" })
    }
)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

