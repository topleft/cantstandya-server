
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Users', (table) => {
    table.increments('id');
    table.string('username').unique().notNullable();
    table.specificType('password', 'char(60)').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Users');
};
