function LocationDetailsView(index, location){
    
    var Widgets = require('/ui/Widgets');
    
    var self = Ti.UI.createScrollView({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        layout: 'vertical',
        contentWidth: 'auto',
        contentHeight: 'auto',
        showVerticalScrollIndicator: true,
        backgroundColor: '#E6E6E6',
        top: 0
    });
    
    var topView = Ti.UI.createView({
        backgroundColor: '#FFF',
        top: '6dp',
        left: '6dp',
        right: '6dp',
        layout: 'vertical',
        height: Ti.UI.SIZE
    });
    self.add(topView);
    
    var image = Ti.UI.createImageView({
        height: '80dp',
        image: location.picture.indexOf("http")===0 ? location.picture : (MyApp.url + location.picture),
        top: '6dp',
        //left: '6dp',
        //right: '6dp',
        bottom: '6dp'
    });
    topView.add(image);
    
    // Details view
    var detailsView = Ti.UI.createView({
        backgroundColor: '#FFF',
        top: '6dp',
        left: '6dp',
        right: '6dp',
        layout: 'vertical',
        height: Ti.UI.SIZE
    });
    self.add(detailsView);
    

    detailsView.add(Ti.UI.createLabel({
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: '4dp',
        top: '6dp',
        text: location.name,
        font: {
            fontSize: '16dp',
            fontWeight: 'bold'
        },
        color: '#000'
    }));
    detailsView.add(Widgets.createLink(location.website, location.website, {
        left: '4dp'
    }));
    detailsView.add(Ti.UI.createLabel({
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: '4dp',
        text: 'Localisation: ' + location.address,
        font: {
            fontSize: '12dp'
        },
        color: '#000'
    }));
    detailsView.add(Ti.UI.createLabel({
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: '4dp',
        text: 'Infos et Contact: ' + location.contact,
        font: {
            fontSize: '12dp'
        },
        color: '#000'
    }));
    
    
    // Display audience
    detailsView.add(Ti.UI.createLabel({
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: '4dp',
        top: '10dp',
        text: 'Audience',
        font: {
            fontSize: '14dp',
            fontWeight: 'bold'
        },
        color: '#000'
    }));
    detailsView.add(Ti.UI.createLabel({
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: '4dp',
        text: location.audience.number + ': ' + location.audience.profiles,
        font: {
            fontSize: '12dp'
        },
        color: '#000'
    }));
    
    
    // Display interests
    detailsView.add(Ti.UI.createLabel({
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: '4dp',
        top: '10dp',
        text: 'Centres d\'intérêts',
        font: {
            fontSize: '14dp',
            fontWeight: 'bold'
        },
        color: '#000'
    }));
    var interestsView = Ti.UI.createView({
        layout: 'horizontal',
        backgroundColor: 'transparent',
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        top: '5dp',
        left: 0,
        right: '4dp',
        bottom: '6dp'
    });
    
    var color = null, interest = null;
    var sortedInterests = location.interests.sort(function(t1, t2){
        return (t2.length - t1.length);
    });
    
    for(var i=0; i < sortedInterests.length; i++){
        color = i % 2 === 0 ? MyApp.ui.colors.orange : MyApp.ui.colors.blue;
        
        interest = Widgets.createTag({
            backgroundColor: color,
            left: '4dp',
            top: '2dp',
            width: Ti.UI.SIZE,
            height: Ti.UI.SIZE,
            horizontalWrap: false
        }, {
            text: ' ' + sortedInterests[i] + ' ',
            left: '4dp',
            font: {fontSize: '12dp'},
            backgroundColor: '#fff',
            opacity: 0.6,
            width: Ti.UI.SIZE,
            horizontalWrap: false,
            wordWrap: true,
            color: '#000'
        });
        
        interestsView.add(interest);
    }
    detailsView.add(interestsView);
    
    
    return self;
}

module.exports = LocationDetailsView;
