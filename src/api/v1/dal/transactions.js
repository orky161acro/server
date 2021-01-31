const {pool} = require('./dalInitaliztor')
const queries = require("./query_builder/queries")

async function addTransaction({customer, product, total_price, currency, credit_card_type, credit_card_number}) {
    const transaction = await pool.query(queries.addTransactionQuery,
        [customer, product, total_price, currency, credit_card_type, credit_card_number])

    return {id: transaction[0].insertId, customer, product, total_price, currency, credit_card_type, credit_card_number}
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

function updateTransactionById(id, {customer, product, total_price, currency, credit_card_type, credit_card_number}) {
    return pool.query(queries.updateTransactionQuery,
        [customer, product, total_price, currency, id, credit_card_type, credit_card_number])
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
