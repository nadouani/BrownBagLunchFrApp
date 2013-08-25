/**
 * 
 * @param {Number} bagger index
 * @param {Object} city object
 * @param {Object} containingTab
 * @param {Number} countBaggers
 */
function DetailsWindow(index, city, containingTab) {
	
	var self = Ti.UI.createWindow({
		title: city.name,
		barColor: MyApp.ui.barColor,
		barImage: 'blue-bg.png',
		backgroundColor: '#E6E6E6',
		layout: 'vertical'
	});
	
	var views = [];
	var DetailsView = require('ui/common/baggers/view/DetailsView');
	
    TiUtils.each(city.baggers, function(bagger, idx){
        views.push(new DetailsView(idx, bagger));
    });
	
    var scrollView = Titanium.UI.createScrollableView({
        views: views,
        currentPage:index,
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        cacheSize: 3
    });
    self.add(scrollView);
	
	return self;
}

module.exports = DetailsWindow;
