Street = BaseEntity.extend({
	defaults: {
        
    },
    initialize: function(){
    	var model = this;
		
		Crafty.background('url(web/images/alley.jpg)');
		
    	
			var entity = Crafty.e("2D, "+gameContainer.conf.get('renderType')+", ufo, Mouse, MouseHover, HTML");


    	entity
            .attr({x:100, y: 100, z: 300})
            .replace('<input type="button" value="Start Game" />')
            .bind('Click', function(){
             $("#info_begin").hide();   
            })
            .setName('Begin Game btn');

            

    	model.set({'entity' : entity });
    }
});