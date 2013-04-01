Street = BaseEntity.extend({
	defaults: {
        
    },
    initialize: function(){
    	var model = this;
		
		Crafty.background('url(web/images/alley.jpg)');

    	model.set({'entity' : entity });
    }
});