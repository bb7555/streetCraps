Crafty.scene("main", function() {
//set background for main scene
		Crafty.background('url(web/images/alley.jpg)');
	var elements = [
        "src/entities/ufo.js",
        "src/interfaces/info.js"
	];
	
	//when everything is loaded, run the main scene
	require(elements, function() {	   
		sc['ufo'] = new Ufo();
		infc['info'] = new Info();
		
		
		
	});

});
