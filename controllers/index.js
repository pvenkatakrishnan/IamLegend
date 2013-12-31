'use strict';


module.exports = function (server) {

    server.get('/', function (req, res) {
        var model = { name: 'Iamlegend', engine: 'dustjs', stack: 'krakenjs' };
        
        //Test 1: for experiements specialization
        //just a sample to try if experiments work
        //obviously the experiments wont be specified here in the model

        /*model.experiments = {
			foo: true
        };*/
        res.locals({
            experiments : {
                foo: true
            }
        });

        //Test 2:  for locales specialization
        
        /*res.locals({
            locality: 'es-US'
        });*/

        //TODO : what if we need both experiemnt + locale ?


        res.render('index', model);
        
    });

};
