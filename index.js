'use strict';


var express = require('express'),
    app = express(),
    kraken = require('kraken.next'),
    options = {
        onconfig: function (settings, cb) {
            var config = {
                'views': settings.get('express:views'),
                'view engine': settings.get('express:view engine'),
                'i18n': settings.get('i18n'),
                'specialization': settings.get('specialization')
            };
            var engines = settings.get('view engines');

            engines.dust.renderer['arguments'].push(config);
            engines.js.renderer['arguments'].push(config, app);

            settings.set('view engines', engines);
            cb(null, settings);
        }
    };

app.use(kraken(options));
app.listen(8000);
