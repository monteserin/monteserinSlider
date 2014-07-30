var i =0;
var fadeInTime=2000;
var fadeOutTime=2000;
var $lista;
var listaLength=0;
jQuery.fn.monteserinSlider = function(event){
	$lista = $(this).find("li");
	listaLength = $lista.length;
	if(event.fadeInTime !== undefined){fadeInTime=event.fadeInTime}
	if(event.fadeOutTime !== undefined){fadeOutTime=event.fadeOutTime}
	hacerSlider(i);      

}
function hacerSlider(i){
		 $lista.eq(i).fadeIn(fadeInTime, function(){
		 	$lista.fadeOut(fadeOutTime);
		 if(i>=listaLength)window.i=-1;
		 	hacerSlider(++window.i);

		 });
}