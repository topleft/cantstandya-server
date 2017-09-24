module.exports = {
  auth: require('./auth'),
  notes: require('./basic-crud')('Notes', false),
  bathrooms: require('./basic-crud')('Bathrooms', false),
  scores: require('./scores')(false)
};
