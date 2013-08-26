// Global app object
var MyApp = {
	osname: Ti.Platform.osname,
	version: Ti.Platform.version,
	height: Ti.Platform.displayCaps.platformHeight,
	width: Ti.Platform.displayCaps.platformWidth,
	ui: {
		colors: {
			blue: '#74C0CF',
			orange: '#faa732'
		},
		barColor: '#74C0CF'
	}
};

var TiUtils = require('/lib/ti-utils').TiUtils();

(function() {
	
	// Load data
	var ds = require('/lib/DataSource');
	MyApp.data = ds.listBaggers();
	MyApp.locations = ds.listLocations();
	
	// Show TabGroup
	var ApplicationTabGroup = require('/ui/common/ApplicationTabGroup');
	new ApplicationTabGroup().open();
	
})();
