/**
 * 
 * @param {Array} sessions object array. Each object is defined by a title and a summary attributes
 */
function SessionsView(sessions){
    
    var self = Ti.UI.createView({
        backgroundColor: '#E6E6E6',
        layout: 'vertical',
        height: Ti.UI.SIZE
    });
	
	var rows = [],
        row = null,
		session = null, 
		view = null, 
		lblName = null, 
		lblSummary = null;
		
	for(var i=0; i < sessions.length; i++){
		session = sessions[i];
		
		lblName = Ti.UI.createLabel({
			text: session.title,
			left: 6,
			right: 6,
			top: 6,
			font: {
                fontSize: 14,
				fontWeight: 'bold'
			}
		});
		lblSummary = Ti.UI.createLabel({
			text: session.summary,
		    left: 6,
            right: 6,
            top: 6,
			font: {fontSize: 12},
			height: Ti.UI.SIZE
		});
		
		view = Ti.UI.createView({
			backgroundColor: '#FFF',
			layout: 'vertical',
			top: 4, 
			left: 4,
			right: 4,
			height: Ti.UI.SIZE
		});
		view.add(lblName);
		view.add(lblSummary);
		
		self.add(view);
	}
	
	return self;
}

module.exports = SessionsView;
