
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Scores').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('Scores').insert({bathroom_id: 1, type: 'overall', score: 4}),
        knex('Scores').insert({bathroom_id: 1, type: 'overall', score: 3}),
        knex('Scores').insert({bathroom_id: 1, type: 'overall', score: 1}),
        knex('Scores').insert({bathroom_id: 2, type: 'overall', score: 7}),
        knex('Scores').insert({bathroom_id: 2, type: 'overall', score: 7}),
        knex('Scores').insert({bathroom_id: 2, type: 'overall', score: 9}),
        knex('Scores').insert({bathroom_id: 3, type: 'overall', score: 5}),
        knex('Scores').insert({bathroom_id: 3, type: 'overall', score: 7}),
        knex('Scores').insert({bathroom_id: 3, type: 'overall', score: 2})
      ]);
    });
};
