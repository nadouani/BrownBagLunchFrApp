
/**
 * Method that lists the full data
 */
exports.listBaggers = function (){
	Ti.include('/data/baggers.js');
	
	Ti.API.info('Found ' + data.villes.length + ' cities');
	
	return data;
};

/**
 * Method that lists the full data
 */
exports.listLocations = function (){
	Ti.include('/data/locations.js');
	
	Ti.API.info('Found ' + data.locations.length + ' locations');
	
	return data.locations;
};
