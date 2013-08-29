/**
 * Location details window
 * 
 * @param {Number} index
 * @param {Object} location
 */
function LocationDetailsWindow(index, location, containingTab){
    
    var self = Ti.UI.createWindow({
        barColor: MyApp.ui.barColor,
        barImage: 'blue-bg.png',
        backgroundColor: '#E6E6E6',
        layout: 'vertical'
    });
    
    var views = [];
    var DetailsView = require('/ui/common/locations/view/LocationDetailsView');
    
    TiUtils.each(MyApp.locations, function(location, idx){
        views.push(new DetailsView(idx, location));
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
};

module.exports = LocationDetailsWindow;
