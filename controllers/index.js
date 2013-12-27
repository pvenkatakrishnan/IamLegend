'use strict';


module.exports = function (server) {

    server.get('/', function (req, res) {
        var model = { name: 'iamlegend' };
        
        res.render('index', model);
        
    });

};
