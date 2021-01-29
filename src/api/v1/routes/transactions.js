const express = require('express')
const router = express.Router();
const transactionsLogic = require('../logic/transactions')
require('express-async-errors');

router.get('/:id', async (req, res) => {
    const transaction = await transactionsLogic.getTransactionByIdHandler(req.params.id)
    res.status(200).json({ transaction });
});

router.get('/', async (req, res) => {
    const transactions = await transactionsLogic.getTransactionsHandler()
    res.status(200).json({ transactions });
});

router.post('/', async (req, res) => {
    const transaction = await transactionsLogic.addTransactionHandler()
    res.status(200).json({ transaction });
});

router.put('/:id', async (req, res) => {
    await transactionsLogic.updateTransactionByIdHandler(req.params.id)
    res.status(202).json({ message: "success" });
});

router.delete('/:id', async (req, res) => {
    await transactionsLogic.deleteTransactionByIdHandler(req.params.id)
    res.status(202).json({ message: "success" });
});

module.exports = router
