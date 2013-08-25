function ApplicationTabGroup(){
	
	var self = Ti.UI.createTabGroup({});
	
	// Create the baggers tab
	var CitiesWindow = require('ui/common/baggers/CitiesWindow');
	var citiesWindow = new CitiesWindow(); 
	var baggersTab = Ti.UI.createTab({
		title: 'Baggers',
		icon: 'icons/baggers.png',
		window: citiesWindow
	});
	citiesWindow.containingTab = baggersTab;
	
	// Create the locations tabs
	var LocationsWindow = require('ui/common/locations/LocationsWindow');
	var locationsWindow = new LocationsWindow();
	var locationsTab = Ti.UI.createTab({
		title : 'Locations',
		icon: 'icons/locations.png',
		window: locationsWindow
	});
	locationsWindow.containingTab = locationsTab;
	
	self.addTab(baggersTab);
	self.addTab(locationsTab);
	
	return self;
}

module.exports = ApplicationTabGroup;
