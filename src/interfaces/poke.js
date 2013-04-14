Poke = BaseEntity.extend({
	defaults: {

        'poke': 400,
        'initialBet': true       
    },

    initialize: function(){
    	var model = this;
        var newPoke;
		
        if(model.get('initialBet')===true)
        {
            newPoke = model.get('poke') - 20;
            model.set({ 'poke': newPoke });
            //initialBet = false;
        }
				
    	var entity = Crafty.e("2D, HTML, DOM, Text");


    	entity
            .attr({x: 10, y: 10, z: 1, w: 150})
            .text("Poke: $"+model.get('poke'))
            .textColor('#000')
            .textFont({'size' : '20px', 'family': 'Arial', 'weight': 'bold'})
				
    	model.set({'entity' : entity });
    }
});