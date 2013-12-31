'use strict';


module.exports = function (server) {

    server.get('/', function (req, res) {
        var model = { name: 'Iamlegend', engine: 'dustjs', stack: 'krakenjs' };
        
        //Test 1: for experiements specialization

        res.locals({
            experiments : {
                foo: true
            }
        });

        //Test 2:  for locales specialization
        //this is not the correct way of setting locales. Locale needs to be set
        //outside local context. But this works for a test 
        //TODO to figure out the right way to set the locale.
        
        /*res.locals({
            locality: 'es-US'
        });*/
    
        //TODO : what if we need both experiemnt + locale  specialization?


        res.render('index', model);
        
    });

};
