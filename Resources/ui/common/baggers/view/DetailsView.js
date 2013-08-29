function DetailsView(index, bagger){
    
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
    
    // Create the top view
    var topView = Ti.UI.createView({
        backgroundColor: 'transparent',
        layout: 'horizontal',
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: '4dp'
    });
    self.add(topView);

    // Create the bagger image view
    var image = Ti.UI.createImageView({
        image: bagger.picture.indexOf("http")===0 ? bagger.picture : (MyApp.url + bagger.picture),
        width: '80dp',
        height: '80dp',
        left: '2dp',
        top: '2dp',
        borderRadius:'40dp',
        borderColor: MyApp.ui.colors.orange,
        borderWidth: '2dp'
    });
    topView.add(image);
    
    // Create the bagger details container view
    var detailsView = Ti.UI.createView({
        layout: 'vertical',
        backgroundColor: 'transparent',
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        left: '2dp',
        top: '2dp'
    });
    topView.add(detailsView);
    
    detailsView.add(Ti.UI.createLabel({
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 0,
        font: {
            fontWeight: 'bold',
            fontSize: '16dp'
        },
        text: bagger.name,
        color: '#000'
    }));
    detailsView.add(Ti.UI.createLabel({
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 0,
        font: {fontSize: '12dp'},
        text: bagger.bio,
        color: '#000'
    }));
    detailsView.add(Ti.UI.createLabel({
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 0,
        font: {fontSize: '12dp'},
        text: bagger.location,
        color: '#000'
    }));
    
    detailsView.add(Ti.UI.createLabel({
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 0,
        font: {fontSize: '12dp'},
        text: '@' + bagger.twitter,
        color: '#000'
    }));
    
    Ti.API.info(bagger.websites);
    
    // Display baggers' sites
    if(!TiUtils.isEmpty(bagger.websites)){
        var link = null, 
            site = null;
        
        TiUtils.each(bagger.websites, function(site){
            detailsView.add(Widgets.createLink(site.title, site.href));
        });
    }
    
    // Display tags
    var tagView = Ti.UI.createView({
        layout: 'horizontal',
        backgroundColor: 'transparent',
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        top: '5dp',
        left: 0,
        bottom: '6dp'
    });
    
    var color = null, tag = null;
    var sortedTags = bagger.tags.sort(function(t1, t2){
        return (t2.length - t1.length);
    });
    
    for(var i=0; i < bagger.tags.length; i++){
        color = i % 2 === 0 ? MyApp.ui.colors.orange : MyApp.ui.colors.blue;
        
        tag = Widgets.createTag({
            backgroundColor: color,
            left: '4dp',
            top: '2dp',
            width: Ti.UI.SIZE,
            height: Ti.UI.SIZE,
            horizontalWrap: false
        }, {
            text: ' ' + bagger.tags[i] + ' ',
            left: '4dp',
            font: {fontSize: '12dp'},
            backgroundColor: '#fff',
            opacity: 0.6,
            width: Ti.UI.SIZE,
            horizontalWrap: false,
            wordWrap: true,
            color: '#000'
        });
        
        tagView.add(tag);
    }
    self.add(tagView);
    
    // Display baggers' sessions'
    var SessionsView = require('ui/common/baggers/SessionsView');
    self.add(new SessionsView(bagger.sessions));
        
    return self;
}

module.exports = DetailsView;
