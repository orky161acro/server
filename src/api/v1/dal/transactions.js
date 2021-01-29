const {pool} = require('../../../config/index')
const queries = require("./query_builder/queries")

async function addTransaction({customer, product, total_price, currency}) {
    const transaction = await pool.query(queries.addTransactionQuery,
        [customer, product, total_price, currency])

    return {id: transaction[0].insertId, customer, product, total_price, currency}
};

async function getTransactions() {
    const transactions = await pool.query(queries.getTransactionsQuery)
    return transactions[0]
};

async function getTransactionById(id) {
    const transaction = await pool.query(queries.getTransactionByIdQuery,
        [id])
    return transaction[0][0]
};

function updateTransactionById(id, {customer, product, total_price, currency}) {
    return pool.query(queries.updateTransactionQuery,
        [customer, product, total_price, currency, id])
};

function deleteTransactionById(id) {
    return pool.query(queries.deleteTransactionByIdQuery, [id])
};

module.exports = {
    addTransaction,
    getTransactions,
    getTransactionById,
    updateTransactionById,
    deleteTransactionById
}
