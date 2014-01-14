'use strict';
var nconf = require('nconf');

module.exports = function (server) {


    server.get('/', function (req, res) {
        var model = { name: 'Iamlegend', engine: 'dustjs', stack: 'krakenjs' };
        
        //TODO IMPORTANT!!!!!!
        //this should be figured out in the framework somewhere
        res.locals({
            templatePath: (process.env.NODE_ENV === 'production') ? '/IamLegend/templates/US/en' : '/IamLegend/templates'
        });
        res.locals({
            _specialization: nconf.get('specialization')
        });

        //Test 1: for experiements specialization

        res.locals({
            experiments : ['foo']
        });
        
        //Test 2:  for locales specialization
        //this is not the correct way of setting locales. Locale needs to be set
        //outside local context. But this works for a test 
        //TODO to figure out the right way to set the locale.
        
        res.locals({
            locale: 'es_US'
        });
    
        //TODO : what if we need both experiemnt + locale  specialization?

        res.render('index', model);
        
    });

};
