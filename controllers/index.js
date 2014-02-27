'use strict';
var nconf = require('nconf');

module.exports = function (server) {


    server.get('/', function (req, res) {
        var model = { name: 'Iamlegend', engine: 'dustjs', stack: 'krakenjs' };

        res.locals({
            experiments : ['foo']
        });

        res.render('index', model);
        
    });

};
