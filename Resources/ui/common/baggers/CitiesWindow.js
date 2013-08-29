/**
 * 
 */
function CitiesWindow() {
	
	// Create the window container
	var self = Ti.UI.createWindow({
		barColor: MyApp.ui.barColor,
		barImage: 'blue-bg.png',
		backgroundColor: '#E6E6E6',
		title: 'Trouver un Bagger'
	});
	
	// Prepare the data view content
	var rows = [];
	var countCities = MyApp.data.villes.length, 
	   city = null, 
	   row = null, 
	   image = null,
	   path = null;
	
	for(var i=0; i < countCities ; i++){
		city = MyApp.data.villes[i]; 
		
		row = Ti.UI.createTableViewRow({
            city: city,
            backgroundColor: '#E6E6E6',
            selectedBackgroundColor: '#FFF'
		});

		path = city.ville_img.substr(city.ville_img.lastIndexOf("/")+1);
        //path = city.ville_img.replace(path, "min/"+path);
        
		image = Ti.UI.createImageView({
            backgroundColor: '#FFF',
            height: '100dp',
            //image: MyApp.url + path,
            //image: MyApp.url + city.ville_img,
            image: '/images/villes/' + path,
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
