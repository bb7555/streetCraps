/**
    examples:             
    'sprites_name' : {
         'file' : 'path/to/file',
         'tile' : width,
         'tileh' : height,
         'elements': {
             'sprite_name' : [0, 0]
         }
    },
*/

Sprites = Backbone.Model.extend({
    defaults: {
        images:{
            'start_btn' : {
                 'file' : 'web/images/clear.png',
                 'tile' : 211,
                 'tileh' : 117,
                 'elements': {
                     'start_btn' : [0, 0]
                 }
			},
				 
				'hand' : {
                 'file' : 'web/images/hand.png',
                 'tile' : 150,
                 'tileh' : 153,
                 'elements': {
                     'hand' : [0, 0]
                 }
            },

                'start_btn':{
                    'file' : 'web/images/start_btn.png',
                    'tile' : 200,
                    'tileh' : 60,
                    'elements' : {
                        'start_btn' : [0,0]
                    }
            },
                'h2p_btn':{
                    'file' : 'web/images/h2p_btn.png',
                    'tile' : 200,
                    'tileh' : 60,
                    'elements' : {
                        'h2p_btn' : [0,0]
                    }
            },
                'mm_btn':{
                    'file' : 'web/images/mm_btn.png',
                    'tile' : 200,
                    'tileh' : 60,
                    'elements' : {
                        'mm_btn' : [0,0]
                    }
            },
                'slickBack':{
                    'file' : 'web/images/slickback.png',
                    'tile' : 253,
                    'tileh' : 199,
                    'elements' : {
                        'slickBack' : [0,0]
                    }
            }
        }
    },
    initialize: function(){
        
    },
    /**
     * Create Crafty sprites from images object
     * Pass key if You want create only one choosen sprite.
     * 
     * @param  string key - sprite definition key
     */
    create: function(key){
        if(key != undefined){
            element = this.get('images')[key];
            if(element['tileh'] == undefined)
                Crafty.sprite(element['tile'], element['file'], element['elements']);
            else
                Crafty.sprite(element['tile'], element['tileh'], element['file'], element['elements']);
    		
            return true;
        };

        _.each(this.get('images'), function(element, k){ 
            if(element['tileh'] == undefined)
                Crafty.sprite(element['tile'], element['file'], element['elements']);
            else
                Crafty.sprite(element['tile'], element['tileh'], element['file'], element['elements']);
        });

    },
    /**
     * Get path for sprites files - for loading
     * 
     * @return array array of files paths
     */
    getPaths: function(){
        var array = [], i=0;
        _.each(this.get('images'), function(element, key){ 
            array[i] = element['file']
            i++;
        });

        return array;
    }
});