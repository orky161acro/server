const addTransactionQuery = 'INSERT INTO transactions (customer, product, total_price, currency, credit_card_type, credit_card_number) VALUES (?, ?, ?, ?, ?, ?)'
const deleteTransactionByIdQuery = 'DELETE FROM transactions WHERE id = (?)'
const getTransactionByIdQuery = 'SELECT * FROM transactions WHERE id = (?)'
const updateTransactionQuery = "UPDATE transactions SET " +
                        "customer = (?), product = (?), total_price = (?), currency = (?) , credit_card_type = (?) , credit_card_number = (?) " +
                        "WHERE id = (?)"
const getTransactionsQuery = 'SELECT transactions.id, transactions.product, transactions.total_price, transactions.currency, transactions.credit_card_number, transactions.credit_card_type, c.phone, c.first_name, c.id AS customer\n' +
    'FROM transactions\n' +
    'INNER JOIN customers c on c.id = transactions.customer'

const getCustomersQuery = 'SELECT id, first_name, phone FROM customers'

module.exports ={
    addTransactionQuery,
    deleteTransactionByIdQuery,
    getTransactionByIdQuery,
    updateTransactionQuery,
    getTransactionsQuery,
    getCustomersQuery
}
