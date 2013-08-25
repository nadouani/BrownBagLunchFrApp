/**
 * 
 */
function LocationsWindow() {
	
	// Create the window container
	var self = Ti.UI.createWindow({
		barColor: MyApp.ui.barColor,
		backgroundColor: '#E6E6E6',
		title: 'Hôtels'
	});
	
	// Prepare the data view content
	var rows = [];
	var countLocations = MyApp.locations.length, 
	   location = null, 
	   row = null, 
	   image = null;
	
	for(var i=0; i < countLocations ; i++){
		location = MyApp.locations[i]; 
		
		row = Ti.UI.createTableViewRow({
		    location: location,
            backgroundColor: '#E6E6E6',
            selectedBackgroundColor: '#FFF'
		});
        image = Ti.UI.createImageView({
            backgroundColor: '#FFF',
            height: 100,
            image: location.picture.indexOf("http")===0 ? location.picture : ("http://www.brownbaglunch.fr/" + location.picture),
            top: 6,
            left: 6,
            right: 6,
            bottom: 0
        });
        row.add(image);
		
		rows.push(row);
	}
	
	// Create the data view
	var dataView = Ti.UI.createTableView({
		data: rows,
		backgroundColor: '#E6E6E6'
	});
	self.add(dataView);
	
	/*
	dataView.addEventListener('click', function(e){
		var BaggersWindow = require('ui/common/baggers/BaggersWindow');
		
		Ti.API.info('row clicked: ' + e.index);
		
		self.containingTab.open(new BaggersWindow(e.index, e.rowData, self.containingTab));
	});
	*/
	
	return self;
	
}

module.exports = LocationsWindow;
