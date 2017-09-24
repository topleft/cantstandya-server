
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Bathrooms').del()
    .then(function () {
      return Promise.all([
        knex('Bathrooms').insert({id: 1, name: 'Congress Park', lat: '39.7357859', lng: '-104.9589701'}),
        knex('Bathrooms').insert({id: 2, name: 'Sloan\'s Lake', lat: '39.7483921', lng: '-105.0493193'}),
        knex('Bathrooms').insert({id: 3, name: 'Union Station', lat: '39.753117',lng: '-105.0021187'})
      ]);
    });
};
