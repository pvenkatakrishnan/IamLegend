'use strict';

require(['config' /*, Dependencies */], function (config) {

    var app = {
        initialize: function () {
			//Lets demonstrate specialization for
			//client side rendering.
			require(['jquery', 'nougat'], function ($, nougat) {
				nougat.setContext($(document.body).data());
				console.info('**********' + JSON.stringify(nougat.getContext()));
				nougat.viewRenderer
					.render('partialSamples/clientRender_sample1')
					.done(function(content) {
						$('#forClientRender').html(content);
					});
			});
        }
    };

    app.initialize();

});


