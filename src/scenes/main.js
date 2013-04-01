Crafty.scene("main", function() {

		
	var elements = [
        "src/interfaces/info.js",
		"src/entities/startGame.js",
		"src/entities/h2pGame.js"
	];
	
	//when everything is loaded, run the main scene
	require(elements, function() {	
	Crafty.background('url(web/images/alley.jpg)');   
		sc['start_game'] = new StartGame(); 
		sc['h2p_game'] = new H2PGame();
		infc['info'] = new Info();	
		
	});

});
