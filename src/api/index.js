const express = require('express')
const router = express.Router();
const v1Router = require('./v1/index');
const {checkConnection} = require("./v1/dal/dalInitaliztor");

router.use('/v1', v1Router);

router.get('/ping', function (req, res) {
    res.status(200).json({msg: "ping"})
})

router.get('/health', async (req, res) => {
    await checkConnection()
    res.status(200).json({msg: "health"})
})

module.exports = router
