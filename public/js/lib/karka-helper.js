'use strict';
function templateResolve(name, dataAttributes) {

	console.info('*****' + JSON.stringify(dataAttributes));
	var config = dataAttributes.specialization,
		context = {
			experiments: dataAttributes.experiments,
			locality: dataAttributes.locality
		};


	//console.info('called into resolveTemplate: name ', name, ' config', config, ' context', context);
	var configExperiments = dataAttributes.specialization.experimentation,
		experimentations = dataAttributes.experiments,
		//locals = context.get('context'),
		//locality would be like 'en-US','en_US','en'
		//locality = locals && locals.locality,
		locality = dataAttributes.locality,
		configLocale = dataAttributes.specialization.locales,
		root,
		pair,
		tempName = name;
	
	//CASE 1:
	//checking experimentation specialization

	if (experimentations && configExperiments) {

		//TODO does not solve for multiple experiments having
		// the same template specialized
		// WHAT DO WE DO IF THIS HAPPENS ?

		Object.keys(experimentations).forEach(function(exp) {
			var dust = configExperiments[exp].dust;
			if (dust && dust[name]) {
				root = (configExperiments[exp].root) + '/' || '' ;
				tempName = root + dust[name];
			}
		});
	}

	//CASE 2:
	//checking locale specialization

    console.info('********** locals:' + locality);
    if (locality && configLocale) {
		pair = util.parseLangTag(locality); //returns pair.country and pair.language
		console.info('the pair:', pair);
		if (configLocale[locality].dust && configLocale[locality].dust[name]) {
			tempName = pair.country + '/' || '' ;
			tempName += pair.language + '/';
			tempName += name;
		}
    }

	//TODO figure out checking hybrids
	console.info('name returned:', tempName);

	return tempName;
}