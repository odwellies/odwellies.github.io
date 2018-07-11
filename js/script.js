
var OpenDoorWellness = (function () {

	var thisIsAVariableOrFunction = "true";
	
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		items:1
	});
	
	console.log('test');
	
	return {
		thisIsAVariableOrFunction: thisIsAVariableOrFunction,
	};

})();


$(document).ready(function(){
	console.log(OpenDoorWellness.thisIsAVariableOrFunction);
});