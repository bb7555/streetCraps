Crafty.scene("main", function() {

		
	var elements = [
        "src/entities/street.js",
        "src/interfaces/info.js",
		"src/entities/hand.js"
	];
	
	//when everything is loaded, run the main scene
	require(elements, function() {	   
		sc['street'] = new Street();
		sc['hand'] = new Hand();
		infc['info'] = new Info();	
		
	});

});
