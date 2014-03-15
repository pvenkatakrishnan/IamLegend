'use strict';


var express = require('express'),
    app = express(),
    kraken = require('kraken.next'),
    options = {
        onconfig: function (settings, cb) {
            var i18n = settings.get('i18n'),
                specialization = settings.get('specialization'),
                devtools,
                engine,
                dir;

            //for dev-tools setup

            if (i18n) {
                devtools = settings.get('devtools');
                devtools['arguments'][2].dust = {
                    'dir': devtools['arguments'][2].dust,
                    'i18n' : i18n
                };
                settings.set('devtools', devtools);
            }

            //for engine-munger setup

            engine = {
                'views': settings.get('express:views'),
                'view engine': settings.get('express:view engine'),
                'i18n': i18n,
                'specialization': specialization
            };
            var engines = settings.get('view engines');

            engines.dust.renderer['arguments'].push(engine);
            engines.js.renderer['arguments'].push(engine, app);

            settings.set('view engines', engines);
            cb(null, settings);
        }
    };

app.use(kraken(options));
app.listen(8000);
