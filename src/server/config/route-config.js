(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //

    const routes = require('../routes/routes');

    // *** register routes *** //

    app.use('/auth/', routes.auth);
    app.use('/api/', routes.notes);
    app.use('/api/', routes.bathrooms);
    app.use('/api/', routes.scores);

  };

})(module.exports);
