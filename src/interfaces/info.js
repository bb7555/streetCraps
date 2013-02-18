Info = BaseEntity.extend({
	defaults: {
        'text_begin' : "<span id='info_begin' style='text-shadow:2px 2px #000;cursor:pointer; '>Street Craps</span>",
    },
    initialize: function(){
    	var model = this;
			
				
    	var entity = Crafty.e("2D, HTML, DOM, Text, Mouse")

    	entity
            .attr({x: 20, y: 50, z: 1, w: 200})
            .text(model.get('text_begin'))
            .textColor('#FF0000')
            .textFont({'size' : '30px', 'family': 'Arial', 'weight': 'bold'})
            .setName('Begin Info')
			.bind("Click", function(){console.log('hi tere')})
			
		
		
			
    	model.set({'entity' : entity });
    }
});