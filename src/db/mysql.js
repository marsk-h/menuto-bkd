const mysql = require('mysql');
require('dotenv').config();

const conf = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
};

const db = (query, data) => {
    const connection = mysql.createConnection(conf);
    return new Promise((resolve, reject) => {
        connection.connect((err) => {
            if (err) {
                console.error('DB Error: ', err);
                console.log('Database no cennected');
            } else {
                connection.query(query, data, (err, fact) => {
                    if (err) return reject(err);
                    connection.end();
                    resolve(fact);
                });
            }
        });
    });
};

const login = (table, email, pass) => {
    let query = `SELECT * FROM ${table} WHERE Email = '${email}' AND Password = '${pass}' AND Status = 1`;
    return db(query);
};

const list = (table) => {
    let query = `SELECT * FROM ${table}`;
    return db(query);
};

const get = (table, field, id) => {
    let query = `SELECT * FROM ${table} WHERE ${field} = '${id}'`;
    return db(query);
};

const check = (table, field, value) => {
    let query = `SELECT * FROM ${table} WHERE ${field} = '${value}'`;
    return db(query);
};

const search = (table, field, value) => {
    let query = `SELECT * FROM ${table} WHERE ${field} LIKE '${value}%'`;
    return db(query);
};

const insert = (table, data) => {
    let query = `INSERT INTO ${table} SET ?`;
    return db(query, data);
};

const update = (table, field, data) => {
    let query = `UPDATE ${table} SET ? WHERE ${field} = ?`;
    return db(query, [data, data.ID]);
};

// const remove = (table, field, id) => {
//     let query = `DELETE FROM ${table} WHERE ${field} = ${id}`;
//     return db(query);
// };

const custom = (table, condition) => {
    let query = `SELECT * FROM ${table} WHERE ?`;
    return db(query, condition);
};

module.exports = {
    login,
    list,
    get,
    search,
    insert,
    update,
    check,
    // remove,
    custom
};