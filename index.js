'use strict';


var kraken = require('kraken-js'),
    app = {};


app.configure = function configure(nconf, next) {
    // Fired when an app configures itself
    next();
};


app.requestStart = function requestStart(server) {
    // Fired at the beginning of an incoming request
};


app.requestBeforeRoute = function requestBeforeRoute(server) {
    // Setting all the res.locals information for the
    // specialization to happen
    server.use(function(req, res, next) {
        res.locals({
            templatePath: (process.env.NODE_ENV === 'production') ? '/IamLegend/templates/US/en' : '/IamLegend/templates'
        });
        res.locals({
            context: {
                locality: 'es_US'
            }
        });
        res.locals({
            device: 'tablet'
        });
        next();
    });
};


app.requestAfterRoute = function requestAfterRoute(server) {
    // Fired after routing occurs
};


kraken.create(app).listen(function (err) {
    if (err) {
        console.error(err);
    }
});
