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
			left: '6dp',
			right: '6dp',
			top: '6dp',
			font: {
                fontSize: '14dp',
				fontWeight: 'bold'
			},
			color: '#000'
		});
		lblSummary = Ti.UI.createLabel({
			text: session.summary,
		    left: '6dp',
            right: '6dp',
            top: '6dp',
			font: {fontSize: '12dp'},
            color: '#000',
			height: Ti.UI.SIZE
		});
		
		view = Ti.UI.createView({
			backgroundColor: '#FFF',
			layout: 'vertical',
			top: '4dp', 
			left: '4dp',
			right: '4dp',
			height: Ti.UI.SIZE
		});
		view.add(lblName);
		view.add(lblSummary);
		
		self.add(view);
	}
	
	return self;
}

module.exports = SessionsView;
