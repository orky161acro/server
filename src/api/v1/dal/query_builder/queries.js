const addTransactionQuery = 'INSERT INTO transactions (customer, product, total_price, currency) VALUES (?, ?, ?, ?)'
const deleteTransactionByIdQuery = 'DELETE FROM transactions WHERE id = (?)'
const getTransactionByIdQuery = 'SELECT * FROM transactions WHERE id = (?)'
const updateTransactionQuery = "UPDATE transactions SET " +
                        "customer = (?), product = (?), total_price = (?), currency = (?) " +
                        "WHERE id = (?)"
const getTransactionsQuery = 'SELECT * FROM transactions'

const getCustomersQuery = 'SELECT * FROM customers'

module.exports ={
    addTransactionQuery,
    deleteTransactionByIdQuery,
    getTransactionByIdQuery,
    updateTransactionQuery,
    getTransactionsQuery,
    getCustomersQuery
}
