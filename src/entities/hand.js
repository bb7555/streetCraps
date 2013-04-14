Hand = BaseEntity.extend({
	defaults: {
       'poke': 400,
       'pot': 0,
       'statusMsg': "This is the beginning of the game"
    },
    initialize: function(){
    	var model = this;

    	var currentPoke = model.get('poke');
    	var currentPot = model.get('pot');
		
		var entity = Crafty.e("2D, "+gameContainer.conf.get('renderType')+", hand, Mouse, MouseHover, HTML, Tween");

		var slickBack = Crafty.e("2D, "+gameContainer.conf.get('renderType')+", slickBack, Tween");

		var gambler = Crafty.e("2D, "+gameContainer.conf.get('renderType')+", slickBack, Tween");

		var infoPane = Crafty.e("2D, "+gameContainer.conf.get('renderType')+", Mouse, HTML, infoPaneOverlay");

		var poke = Crafty.e("2D, HTML, DOM, Text");

		var pot = Crafty.e("2D, HTML, DOM, Text");


		
		entity
			.attr({x:0, y: 250, z: 3})
            .setName('Hand')
			.bind('Click', function(){
			
			this.tween({rotation: 45.0, x:-150, y: 250}, 15);
			Crafty("infoPaneOverlay").css('display', 'block'); 
			currentPoke = currentPoke - 20;
			model.set('poke', currentPoke);
			poke.text("Poke: $"+currentPoke);
			
			}).bind('TweenEnd', function(){
				
				this.tween({rotation: 0, x:0, y: 250}, 15);

			});

		slickBack
			.attr({rotation:130, x:140, y:150, z:3});

		gambler
			.attr({rotation:130, x:140, y:350, z:3});

		infoPane
			.attr({x:10, y: 20, z: 300, w:300, h:400})
			.css({ 
				textAlign: 'center', 
				borderRadius: '5px',
				backgroundColor: 'white',
				font: 'Arial'
			})
			.append("<div id='infoPaneOverlay'>"+model.get('statusMsg')+"<div style='margin-top:20px;'>Tap Any Where To Continue</div></div>")
            .setName('infoPaneOverlay')
			.bind('Click', function(){
			
				this.css('display', 'none');
			
			});

		poke
		 	.attr({x: 10, y: 10, z: 1, w: 150})
            .text("Poke: $"+model.get('poke'))
            .textColor('#000')
            .textFont({'size' : '20px', 'family': 'Arial', 'weight': 'bold'});

        pot
		 	.attr({x: 10, y: 30, z: 1, w: 150})
            .text("Pot: $"+model.get('pot'))
            .textColor('#000')
            .textFont({'size' : '20px', 'family': 'Arial', 'weight': 'bold'});	

    	model.set({'entity' : entity });
    }
});