H2PGame = BaseEntity.extend({
	defaults: {
        
    },
    initialize: function(){
    	var model = this;
		
		
		var entity = Crafty.e("2D, "+gameContainer.conf.get('renderType')+", h2p_btn, Mouse");
		
		entity
			.attr({x:60, y: 200, z: 300})
            .setName('H2PGame')
			.bind('Click', function(){
			
				Crafty.scene("h2p");			
			});

    	model.set({'entity' : entity });
    }
});