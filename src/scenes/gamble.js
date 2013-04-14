Crafty.scene("gamble", function() {

	var elements = [
       //"src/interfaces/poke.js",
        "src/entities/hand.js",
        //"src/entities/infoPaneOverlay.js"
		
	];
	
	
	//when everything is loaded, run the main scene
	require(elements, function() {	
	Crafty.background('url(web/images/alley.jpg)');   
		
		//infc['poke'] = new Poke();
		sc['hand']	= new Hand();
		//sc['infoPaneOverlay']	= new InfoPaneOverlay();
	});



});

