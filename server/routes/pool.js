//Pools closed .. for now

var pg = require('pg');

var config = {
    database: "pet_hotel",
    host: "localhost",
    port: 5432,
    max: 10,
    idleTimeoutMillis: 1500,
}

module.exports = pg.Pool(config);