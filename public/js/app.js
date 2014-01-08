'use strict';

require(['config' /*, Dependencies */], function (config) {
	require(['jquery', 'nougat'], function ($, nougat) {
		var app = {
		    initialize: function () {
				
				nougat.setContext($(document.body).data());
				//Dmonstrating specialization for
				//client side rendering.
				this.initializeView();
				
		    },

		    initializeView: function () {
				$('#renderClientTemp').click(function () {
					nougat.viewRenderer
					.render('partialSamples/clientRender_sample1', {message: 'I <3 my job!'})
					.done(function (content) {
						$('#forClientRender').after(content);
					});
				});
		    }
		};
		app.initialize();
	});
});


