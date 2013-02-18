Hand = BaseEntity.extend({
	defaults: {
        
    },
    initialize: function(){
    	var model = this;
		
		
		var entity = Crafty.e("2D, "+gameContainer.conf.get('renderType')+", hand, Mouse, MouseHover, HTML, Tween");
		
		entity
			.attr({x:0, y: 250, z: 300})
            .setName('Hand')
			.bind('Click', function(){
			
			this.tween({rotation: 45.0, x:-150, y: 250}, 15)
			
			});

    	model.set({'entity' : entity });
    }
});