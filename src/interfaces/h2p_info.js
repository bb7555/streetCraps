H2PInfo = BaseEntity.extend({
	defaults: {
        'text_info' : "This the info we have about how to play",
    },
    initialize: function(){
    	var model = this;
			
				
    	var entity = Crafty.e("2D, HTML, DOM, Text, Mouse")

    	entity
            .attr({x: 10, y: 20, z: 1, w: 300})
            .text(model.get('text_info'))
            .textColor('#000')
            .textFont({'size' : '12px', 'family': 'Arial', 'weight': 'bold'})
				
    	model.set({'entity' : entity });
    }
});