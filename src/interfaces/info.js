Info = BaseEntity.extend({
	defaults: {
        'text' : "<span style='text-shadow:2px 2px #000;cursor:pointer;'>Street Craps <br />Begin Game</span>",
    },
    initialize: function(){
    	var model = this;
    	var entity = Crafty.e("2D, DOM, Text");

    	entity
            .attr({x: 20, y: 50, z: 1000, w: 400})
            .text(model.get('text'))
            .textColor('#FF0000')
            .textFont({'size' : '30px', 'family': 'Arial', 'weight': 'bold'})
            .bind('click', function(){
				alert('click');
                               
            })

    	model.set({'entity' : entity });
    }
});