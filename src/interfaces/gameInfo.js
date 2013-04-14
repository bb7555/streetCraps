GameInfo = BaseEntity.extend({
	defaults: {
        
    },

    initialize: function(){
    	var model = this;
		
				
    	var entity = Crafty.e("2D, HTML, DOM, Text");


    	entity
            .attr({x: 10, y: 10, z: 1, w: 150})
            .text("Poke: $"+poke)
            .textColor('#000')
            .textFont({'size' : '15px', 'family': 'Arial', 'weight': 'bold'})
				
    	model.set({'entity' : entity });
    }
});