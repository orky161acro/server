const {pool} = require('../../../config/index')
const queries = require("./query_builder/queries")

async function getCustomers() {
    const transactions = await pool.query(queries.getTransactionsQuery)
    return transactions[0]
};

module.exports = {
    getCustomers
}
