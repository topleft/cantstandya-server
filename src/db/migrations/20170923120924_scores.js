
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Scores', (table) => {
    table.increments('id');
    table.string('type').notNullable();
    table.integer('score').notNullable();
    table.integer('bathroom_id').unsigned();
    table.foreign('bathroom_id').references('Bathrooms.id').onDelete('cascade');
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('Users.id').onDelete('cascade');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Scores');
};
