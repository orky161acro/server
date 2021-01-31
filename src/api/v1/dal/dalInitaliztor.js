const mysql = require('mysql2');
const {checkConnectionQuery} = require("./query_builder/queries");
const {mysqlConnection} = require("../../../config");

const pool = mysql.createPool(mysqlConnection);
const promisePool = pool.promise();

function checkConnection() {
    return promisePool.query(checkConnectionQuery)
}

module.exports = {
    pool: promisePool,
    checkConnection
}

