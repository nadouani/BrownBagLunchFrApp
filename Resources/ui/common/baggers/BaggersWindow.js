/**
 * 
 * @param {Number} index of the selected city row
 * @param {Object} rowData data of the selected city row
 * @param {Object} containingTab
 */
function BaggersWindow(index, rowData, containingTab){

	var self = Ti.UI.createWindow({
		barColor: MyApp.ui.barColor,
		barImage: 'blue-bg.png',
		backgroundColor: 'transparent',
		title: rowData.city.name
	});	
	
	// Prepare the data view content
	var rows = [];
	var city = MyApp.data.villes[index], 
		bagger = null,
		countBaggers = city.baggers.length;
		
	for(var i=0; i < countBaggers ; i++){
		bagger = city.baggers[i]; 
		
		rows.push({
			title: bagger.name,
			image: bagger.image,
			hasChild: true
		});
	}
	
	// Create the data view
	var dataView = Ti.UI.createTableView({
		data: rows
	});
	self.add(dataView);
	
	dataView.addEventListener('click', function(e){
		var DetailsWindow = require('/ui/common/baggers/DetailsWindow');
		
		containingTab.open(new DetailsWindow(e.index, city, containingTab));
	});
	
	return self;
}

module.exports = BaggersWindow;