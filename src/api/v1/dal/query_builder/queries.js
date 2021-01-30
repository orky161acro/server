const addTransactionQuery = 'INSERT INTO transactions (customer, product, total_price, currency) VALUES (?, ?, ?, ?)'
const deleteTransactionByIdQuery = 'DELETE FROM transactions WHERE id = (?)'
const getTransactionByIdQuery = 'SELECT * FROM transactions WHERE id = (?)'
const updateTransactionQuery = "UPDATE transactions SET " +
                        "customer = (?), product = (?), total_price = (?), currency = (?) " +
                        "WHERE id = (?)"
const getTransactionsQuery = 'SELECT transactions.id, transactions.product, transactions.total_price, transactions.currency, c.credit_card_number, c.phone, c.first_name\n' +
    'FROM transactions\n' +
    'INNER JOIN customers c on c.id = transactions.customer'

const getCustomersQuery = 'SELECT id, first_name FROM customers'

module.exports ={
    addTransactionQuery,
    deleteTransactionByIdQuery,
    getTransactionByIdQuery,
    updateTransactionQuery,
    getTransactionsQuery,
    getCustomersQuery
}
