const {pool} = require('../../../config/index')
const queries = require("./query_builder/queries")

async function getCustomers() {
    const customers = await pool.query(queries.getCustomersQuery)
    return customers[0]
};

module.exports = {
    getCustomers
}
