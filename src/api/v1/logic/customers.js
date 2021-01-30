const customersDal = require('../dal/customers')

function getCustomersHandler() {
    return customersDal.getCustomers()
};

module.exports = {
    getCustomersHandler
}
