'use strict';


module.exports = function (server) {

    server.get('/', function (req, res) {
        var model = { name: 'Iamlegend', engine: 'dustjs', stack: 'krakenjs' };
        model.experiments = {
			foo: true
        };
        res.render('index', model);
        
    });

};
