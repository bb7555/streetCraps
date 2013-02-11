Crafty.scene("main", function() {

		
	var elements = [
        "src/entities/street.js",
        "src/interfaces/info.js"
	];
	
	//when everything is loaded, run the main scene
	require(elements, function() {	   
		sc['street'] = new Street();
		infc['info'] = new Info();	
		
	});

});
