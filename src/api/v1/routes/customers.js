const express = require('express')
const router = express.Router();
const customersLogic = require('../logic/customers')
require('express-async-errors');

router.get('/', async (req, res) => {
    const customers = await customersLogic.getCustomersHandler()
    res.status(200).json({ customers });
});

module.exports = router
