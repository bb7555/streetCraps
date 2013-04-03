Crafty.scene("infoPane", function() {

		
	var elements = [
        //"src/interfaces/h2p_info.js",
        "src/entities/infoPaneOverlay.js"
		
	];
	
	//when everything is loaded, run the main scene
	require(elements, function() {	
	Crafty.background('url(web/images/alley.jpg)');   
		
		//infc['h2p_info'] = new H2PInfo();
		sc['infoPaneOverlay']	= new InfoPaneOverlay();
		
	});

});
