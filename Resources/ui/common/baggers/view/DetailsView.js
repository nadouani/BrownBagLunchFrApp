function DetailsView(index, bagger){
    
    var Widgets = require('ui/Widgets');
    
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
        height: Ti.UI.SIZE,
        top: 4
    });
    self.add(topView);

    // Create the bagger image view
    var image = Ti.UI.createImageView({
        image: bagger.picture.indexOf("http")===0 ? bagger.picture : ("http://www.brownbaglunch.fr/" + bagger.picture),
        width: 80,
        height: 80,
        left: 2,
        top: 2,
        borderRadius:40,
        borderColor: MyApp.ui.colors.orange,
        borderWidth: 2
    });
    topView.add(image);
    
    // Create the bagger details container view
    var detailsView = Ti.UI.createView({
        layout: 'vertical',
        backgroundColor: 'transparent',
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        left: 2,
        top: 2
    });
    topView.add(detailsView);
    
    detailsView.add(Ti.UI.createLabel({
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 0,
        font: {
            fontWeight: 'bold',
            fontSize: 16
        },
        text: bagger.name
    }));
    detailsView.add(Ti.UI.createLabel({
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 0,
        font: {fontSize: 12},
        text: bagger.bio
    }));
    detailsView.add(Ti.UI.createLabel({
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 0,
        font: {fontSize: 12},
        text: bagger.location
    }));
    
    detailsView.add(Ti.UI.createLabel({
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 0,
        font: {fontSize: 12},
        text: '@' + bagger.twitter
    }));
    
    // Display baggers' sites
    var link = null, site = null;
    for(var i=0; i < bagger.websites.length; i++){
        site = bagger.websites[i];
        detailsView.add(Widgets.createLink(site.title, site.href));
    }
    
    // Display tags
    var tagView = Ti.UI.createView({
        layout: 'horizontal',
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        top: 5,
        left: 0,
        bottom: 6
    });
    
    var color = null, tag = null;
    var sortedTags = bagger.tags.sort(function(t1, t2){
        return (t2.length - t1.length);
    });
    
    for(var i=0; i < bagger.tags.length; i++){
        color = i % 2 === 0 ? MyApp.ui.colors.orange : MyApp.ui.colors.blue;
        
        tag = Widgets.createTag({
            backgroundColor: color,
            left: 4,
            top: 2,
            width: Ti.UI.SIZE,
            height: Ti.UI.SIZE,
            horizontalWrap: false
        }, {
            text: ' ' + bagger.tags[i] + ' ',
            left: 4,
            font: {fontSize: 12},
            backgroundColor: '#fff',
            opacity: 0.3,
            width: Ti.UI.SIZE,
            horizontalWrap: false,
            wordWrap: true
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
