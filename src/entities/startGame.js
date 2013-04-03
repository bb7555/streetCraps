StartGame = BaseEntity.extend({
	defaults: {
        
    },
    initialize: function(){
    	var model = this;
		
		
		var entity = Crafty.e("2D, "+gameContainer.conf.get('renderType')+", start_btn, Mouse");
		
		entity
			.attr({x:60, y: 100, z: 300})
            .setName('StartGame')
			.bind('Click', function(){
			
				Crafty.scene("infoPane");
			
			});

    	model.set({'entity' : entity });
    }
});