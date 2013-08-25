exports.createTag = function(bgConfig, labelConfig){
	var tagView = Ti.UI.createView(bgConfig);
	tagView.add(Ti.UI.createLabel(labelConfig));
	
	return tagView;
};


exports.createLink = function(title, url){
	var link = Ti.UI.createLabel({
		textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
		left: 0,
		color: MyApp.ui.barColor,
		font: {fontSize: 12},
		text: title
	});
	link.addEventListener('click', function(){
		Ti.Platform.openURL(url);
	});
	return link;		
};
