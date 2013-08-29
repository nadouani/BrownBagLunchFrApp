exports.createTag = function(bgConfig, labelConfig){
	var tagView = Ti.UI.createView(bgConfig);
	tagView.add(Ti.UI.createLabel(labelConfig));
	
	return tagView;
};


exports.createLink = function(title, url, cfg){
	var link = Ti.UI.createLabel(TiUtils.apply({
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 0,
        color: MyApp.ui.barColor,
        font: {fontSize: '12dp'},
        text: title
    }, cfg || {}));
    
	link.addEventListener('click', function(){
		Ti.Platform.openURL(url);
	});
	return link;		
};