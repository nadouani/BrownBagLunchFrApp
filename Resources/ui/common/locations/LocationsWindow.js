/**
 * 
 */
function LocationsWindow() {
	
	// Create the window container
	var self = Ti.UI.createWindow({
		barColor: MyApp.ui.barColor,
		barImage: 'blue-bg.png',
		backgroundColor: '#E6E6E6',
		title: 'Trouver un Lieu'
	});
	
	// Prepare the data view content
	var rows = [];
	var countLocations = MyApp.locations.length, 
	   location = null, 
	   row = null,
	   view = null, 
	   image = null;
	
	for(var i=0; i < countLocations ; i++){
		location = MyApp.locations[i]; 
		
		row = Ti.UI.createTableViewRow({
		    location: location,
            backgroundColor: '#E6E6E6',
            selectedBackgroundColor: '#FFF'
		});
		
		view = Ti.UI.createView({
		    backgroundColor: '#FFF',
		    top: '6dp',
            left: '6dp',
            right: '6dp',
            //bottom: '6dp',
            layout: 'vertical',
            height: Ti.UI.SIZE,
            width: Ti.UI.FILL
		});
		row.add(view);
		
        image = Ti.UI.createImageView({
            height: '80dp',
            image: location.picture.indexOf("http")===0 ? location.picture : (MyApp.url + location.picture),
            top: '6dp',
            //left: '6dp',
            //right: '6dp',
            bottom: '6dp'
        });
        view.add(image);
        
        row.add(view);
		
		rows.push(row);
	}
	
	// Create the data view
	var dataView = Ti.UI.createTableView({
		data: rows,
		backgroundColor: '#E6E6E6',
        separatorColor: '#E6E6E6'
	});
	self.add(dataView);
	
	dataView.addEventListener('click', function(e){
		var DetailsWindow = require('ui/common/locations/LocationDetailsWindow');
		
		self.containingTab.open(new DetailsWindow(e.index, e.rowData.location, self.containingTab));
	});
	
	return self;
	
}

module.exports = LocationsWindow;
