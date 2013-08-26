/**
 * 
 */
function CitiesWindow() {
	
	// Create the window container
	var self = Ti.UI.createWindow({
		barColor: MyApp.ui.barColor,
		barImage: 'blue-bg.png',
		backgroundColor: '#E6E6E6',
		
		title: 'Villes'
	});
	
	// Prepare the data view content
	var rows = [];
	var countCities = MyApp.data.villes.length, city = null, row = null, image = null;
	
	for(var i=0; i < countCities ; i++){
		city = MyApp.data.villes[i]; 
		
		
		row = Ti.UI.createTableViewRow({
            city: city,
            backgroundColor: '#E6E6E6',
            selectedBackgroundColor: '#FFF'
		});
		
		image = Ti.UI.createImageView({
            backgroundColor: '#FFF',
            height: '100dp',
            image: MyApp.url + city.ville_img,
            top: '6dp',
            left: '6dp',
            right: '6dp',
            bottom: 0
		});
		row.add(image);
		
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
		var BaggersWindow = require('/ui/common/baggers/BaggersWindow');
		self.containingTab.open(new BaggersWindow(e.index, e.rowData, self.containingTab));
	});
	
	return self;
	
}

module.exports = CitiesWindow;
