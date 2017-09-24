const knex = require('../../db/connection');

module.exports = {

  getAllScoresForBathroom: (bathroomId) => {
    return knex('Scores')
    .select()
    .where('bathroom_id', bathroomId);
  },

  getAllScoresForUser: (userId) => {
    return knex('Scores')
    .select()
    .where('user_id', userId);
  },

  addOneScore: (score) => {
    return knex('Scores')
    .insert(score);
  },

  editOneScore: (scoreId, score) => {
    return knex('Scores')
    .update({score})
    .where('id', scoreId);
  },

  deleteOneScore: (id) => {
    if (!id) {
      return Promise.reject('no id supplied');
    }
    return knex('Scores')
    .del()
    .where('id', id);
  }

};
