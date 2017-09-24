
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Bathrooms', (table) => {
    table.increments('id');
    table.string('name').notNullable();
    table.string('lat').notNullable();
    table.string('lng').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Bathrooms');
};
