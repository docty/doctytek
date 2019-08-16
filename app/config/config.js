
require('dotenv').config(); // postgresql-octagonal-85731
var database_url = process.env.DATABASE_URL;
module.exports = {
"development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host":     process.env.DB_HOST,
    "dialect": 'postgres'
},
"test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
},
"production": {
    "username": database_url['user'],
    "password": database_url['pass'],
    "database": database_url['path'],
    "host": database_url['host'],
    "port" : database_url['port'],
    "dialect": "postgres"
}
};
