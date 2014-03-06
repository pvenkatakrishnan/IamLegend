module.exports = function (server) {


    server.get('/', function (req, res) {
        var model = { name: 'Iamlegend', engine: 'dustjs', stack: 'krakenjs' };

        res.locals({
            'doIt' : true
        });
        res.locals.context = {
            locality: 'es_US'
        };
        res.render('index', model);

    });

};