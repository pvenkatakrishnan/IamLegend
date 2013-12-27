'use strict';


module.exports = function (server) {

    server.get('/', function (req, res) {
        var model = { name: 'Iamlegend', engine: 'dustjs', stack: 'krakenjs' };
        
        res.render('index', model);
        
    });

};
