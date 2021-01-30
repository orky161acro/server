const express = require('express')
const router = express.Router();
const transactionsRouter = require('./routes/transactions');
const customersRouter = require('./routes/customers');

router.use('/transactions', transactionsRouter);
router.use('/customers', customersRouter);

module.exports = router
