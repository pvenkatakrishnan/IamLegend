'use strict';


module.exports = function (server) {

    server.get('/', function (req, res) {
        var model = { name: 'Iamlegend', engine: 'dustjs', stack: 'krakenjs' };
        
        //Test for experiements specialization
        //just a sample to try if experiments work
        //obviously the experiments wont be specified here in the model

        /*model.experiments = {
			foo: true
        };*/

        //Test for locales specialization
        //try to override the locales to check if the right templates get loaded
        console.info('res.locals:' + res.locals);

        res.locals({
            locality: 'es-US'
        });

        //TODO : what if we need both experiemnt + locale ?


        res.render('index', model);
        
    });

};
