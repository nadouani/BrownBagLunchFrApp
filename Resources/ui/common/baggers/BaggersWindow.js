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
		countBaggers = city.baggers.length,
		row = null,
		detailsView = null,
		textView = null;
		
	for(var i=0; i < countBaggers ; i++){
		bagger = city.baggers[i]; 
		
		row = Ti.UI.createTableViewRow({
            backgroundColor: '#E6E6E6',
            selectedBackgroundColor: '#FFF'
        });
        
        detailsView = Ti.UI.createView({
            backgroundColor: '#FFF',
            height: Ti.UI.SIZE,
            layout: 'horizontal',
            top: '6dp',
            left: '6dp',
            bottom: 0,
            right: '6dp'
        });
        row.add(detailsView);
        
        detailsView.add(Ti.UI.createImageView({
            height: '60dp',
            width: '60dp',
            image: bagger.picture.indexOf("http")===0 ? bagger.picture : (MyApp.url + bagger.picture),
            top: '4dp',
            left: '10dp',
            bottom: '4dp',
            borderRadius:'30dp',
            borderColor: MyApp.ui.colors.orange,
            borderWidth: '2dp'
        }));
        
        detailsView.add(Ti.UI.createLabel({
            textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
            top: '6dp',
            left: '10dp',
            font: {
                fontWeight: 'bold',
                fontSize: '16dp'
            },
            text: bagger.name,
            color: '#000',
            height: '60dp'
        }));
		
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
		var DetailsWindow = require('/ui/common/baggers/DetailsWindow');
		
		containingTab.open(new DetailsWindow(e.index, city, containingTab));
	});
	
	return self;
}

module.exports = BaggersWindow;