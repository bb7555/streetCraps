MMReturn = BaseEntity.extend({
	defaults: {
        
    },
    initialize: function(){
    	var model = this;
		
		
		var entity = Crafty.e("2D, "+gameContainer.conf.get('renderType')+", mm_btn, Mouse");
		
		entity
			.attr({x:60, y: 300, z: 300})
            .setName('MMReturn')
			.bind('Click', function(){
			
				Crafty.scene("main");			
			});

    	model.set({'entity' : entity });
    }
});