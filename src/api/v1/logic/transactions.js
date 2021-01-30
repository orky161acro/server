const transactionsDal = require('../dal/transactions')

function addTransactionHandler(transaction) {
    return transactionsDal.addTransaction(transaction)
};

function getTransactionsHandler() {
    return transactionsDal.getTransactions()
};

function getTransactionByIdHandler(id) {
    return transactionsDal.getTransactionById(id)
};

function updateTransactionByIdHandler(id, transaction) {
    return transactionsDal.updateTransactionById(id, transaction)
};

function deleteTransactionByIdHandler(id) {
    return transactionsDal.deleteTransactionById(id)
};

module.exports = {
    addTransactionHandler,
    getTransactionsHandler,
    getTransactionByIdHandler,
    updateTransactionByIdHandler,
    deleteTransactionByIdHandler
}
