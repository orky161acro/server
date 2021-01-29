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

function updateTransactionByIdHandler(id,) {
    return transactionsDal.updateTransactionById(id)
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
