InfoPaneOverlay = BaseEntity.extend({
	defaults: {
        
    },
    initialize: function(){
    	var model = this;
		
		var statusMsg = "This is the beginning of the game";
		
		var entity = Crafty.e("2D, "+gameContainer.conf.get('renderType')+", Mouse, HTML");
		
		entity
			.attr({x:10, y: 20, z: 300, w:300, h:400})
			.css({ 
				textAlign: 'center', 
				borderRadius: '5px',
				backgroundColor: 'white',
				font: 'Arial'
			})
			.append("<div>"+statusMsg+"<div style='margin-top:20px;'>Tap Any Where To Continue</div></div>")
            .setName('infoPaneOverlay')
			.bind('Click', function(){
			
				Crafty.scene("gamble");
			
			});

    	model.set({'entity' : entity });
    }
});