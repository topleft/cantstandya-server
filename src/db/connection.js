const environment = process.env.NODE_ENV;
console.log(environment);
const config = require('../../knexfile.js')[environment];
module.exports = require('knex')(config);
