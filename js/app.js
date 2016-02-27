$(document).ready(function(){

	$(".webdevLink").mouseenter(function(){
		$(".phpOrbit").removeClass(".orbitHover");
		$(".pythonOrbit").removeClass(".orbitHover");
		$(".magentoOrbit").removeClass(".orbitHover");
		name = $(this).attr("data-name");
		$("."+name+"Orbit").addClass("orbitHover");
	});

	$(".webdevLink").mouseleave(function(){
			name = $(this).attr("data-name");
		$("."+name+"Orbit").removeClass("orbitHover");
	})


});