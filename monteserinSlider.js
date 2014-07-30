
jQuery.fn.monteserinSlider = function(event){
var fadeInTime=2000;
var fadeOutTime=2000;
var $lista;
var listaLength=5;
var maxWidth=0;
var maxHeight=0;

	$lista = $(this).find("li");
	$(this).css({"position":"relative", "list-style": "none"});
	$lista.css({"display":"none","position":"absolute"})


	$lista.each(function(){
		if($(this).width()>maxWidth)maxWidth=$(this).width();
		if($(this).height()>maxHeight)maxHeight=$(this).height();
	});

	$(this).css({"height":maxHeight+"px", "width":maxWidth});
	listaLength = $lista.length;
	if(event !== undefined){
		if(event.fadeInTime !== undefined)fadeInTime=event.fadeInTime;
		if(event.fadeOutTime !== undefined)fadeOutTime=event.fadeOutTime;
	}else{
		var event={};
	}
	event.i = 0;

	hacerSlider(event.i);      




function hacerSlider(i){
	event.i=event.i+1;
	$lista.eq(i).fadeIn(fadeInTime, function(){
		$lista.fadeOut(fadeOutTime);
		if(event.i>=listaLength)event.i=0;
		hacerSlider(event.i);

	});
}




}
