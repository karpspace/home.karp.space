function menuClick(page){
	
	$("nav").fadeIn();

	if ( (page.attr("data-page") == "sysadmin") || (page.attr("data-page") == "exp") ) {
		$("nav li").addClass("light", 1500, "linear");
		$("nav li").removeClass("dark", 1500, "linear");
	}else{
		$("nav li").addClass("dark", 1500, "linear");
		$("nav li").removeClass("white", 1500, "linear");
	}



	if(page.index("li") == -1){
 		pIndex = 1
	}else{
		pIndex = page.index("li");
	}

	$("nav li").removeClass("active aroundActive");

	$("nav li:nth-child(" + parseInt(pIndex+1).toString() + ")" ).addClass("active");
	$("nav li:nth-child(" + parseInt(pIndex).toString() + "),nav li:nth-child(" + parseInt(pIndex+2).toString() + ")" ).addClass("aroundActive");

}


$(document).ready(function(){	



	$("nav ul li, .start i").click(function(){
		link = $(this);
	$(window).scrollTo("."+$(this).attr("data-page"),1500,{

			 onAfter:function(){
			 	 requestAnimationFrame(function() {
			 	
			 	 });
			 } 
		}); 
		 	menuClick(link);
		
	});



	//Menu Script









	//Webdev View

	$(".webdevLinkModal").mouseenter(function(){
		$(".phpOrbit").removeClass(".orbitHover");
		$(".pythonOrbit").removeClass(".orbitHover");
		$(".magentoOrbit").removeClass(".orbitHover");
		name = $(this).attr("data-name");
		$("."+name+"Orbit").addClass("orbitHover");
	});

	$(".webdevLinkModal").mouseleave(function(){
			name = $(this).attr("data-name");
		$("."+name+"Orbit").removeClass("orbitHover");
	});

	$(document).foundation();




});