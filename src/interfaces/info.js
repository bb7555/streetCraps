Info = BaseEntity.extend({
	defaults: {
        'text_begin' : "<span class='app_title'>Street Craps</span>",
    },
    initialize: function(){
    	var model = this;
			
				
    	var entity = Crafty.e("2D, HTML, DOM, Text, Mouse")

    	entity
            .attr({x: 20, y: 20, z: 1, w: 200})
            .text(model.get('text_begin'))
            .textColor('#FF0000')
            .textFont({'size' : '30px', 'family': 'Arial', 'weight': 'bold'})
				
    	model.set({'entity' : entity });
    }
});