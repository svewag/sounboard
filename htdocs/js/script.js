var bg = new Image();
bg.src = "images/knoeppe_hover.png";

$(document).ready(function(){
	$(".qKnopp").live("click", function(){
		var $ele = $(this);
		
		var sounds = $ele.data("sounds").split("|");
		var $audio = $ele.find("audio");
		
		if($ele.data("linear")){
			console.log("linear");
			var index = 0;
			playSound($audio, sounds[index]);
			
			$audio.bind("ended", function(){
				var nextSound = sounds[++index]
				if(nextSound){
					playSound($audio, nextSound);
				}
			})
		} else {
			console.log("random");
			var sound = sounds[GetRandom(0, sounds.length-1)];
			playSound($audio, sound);
		}
	})
});

function playSound($ele, sound){
	console.log("Sound: " + sound);
	$ele.attr("src", "sounds/"+sound+".ogg");
}

function GetRandom( min, max ) {
	if( min > max ) {
		return( -1 );
	}
	if( min == max ) {
		return( min );
	}
 
        return( min + parseInt( Math.random() * ( max-min+1 ) ) );
}