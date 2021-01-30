const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const apiRouter = require('./api/index');
const compression = require('compression')

const app = express()
const port = 8080

app.use(cors())
app.use(bodyParser.json())
app.use(compression())
app.use('/api', apiRouter);


app.get('/ping', function (req, res) {
    res.status(200).json({msg: "ping"})
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

