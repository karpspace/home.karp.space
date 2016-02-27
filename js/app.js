var orbitCheck = 0;


function menuClick(page){
	
	$("nav").fadeIn();

	if(page.index("li") == -1){
 		pIndex = 0
	}else{
		pIndex = page.index("li");
	}

	if ((page.attr("data-page") == "exp") || (page.attr("data-page") == "contact"))  {
		$("nav li").addClass("light", 1500, "linear");
		$("nav li").removeClass("dark blue activeLight activeBlue activeDark", 1500, "linear");
		page.addClass("activeLight");
	}else if(page.attr("data-page") == "sysadmin") {
		$("nav li").addClass("blue", 1500, "linear");
		$("nav li").removeClass("light dark activeLight activeBlue activeDark", 1500, "linear");
		page.addClass("activeBlue");
	}else{
		$("nav li").addClass("dark", 1500, "linear");
		$("nav li").removeClass("blue light activeLight activeBlue activeDark", 1500, "linear");
		page.addClass("activeDark");
	}



	
	/*
	$("nav li").removeClass("active aroundActive");

	
	$("nav li:nth-child(" + parseInt(pIndex).toString() + "),nav li:nth-child(" + parseInt(pIndex+2).toString() + ")" ).addClass("aroundActive");
	*/
}


$(document).ready(function(){	


	$(".webdevLinkModal").click(function(){
		$("nav").fadeOut();
	});

	$(".close-button").click(function(){
		$("nav").fadeIn();
	});
	$("nav ul li, .start i").click(function(){
		link = $(this);
		$(window).scrollTo("."+$(this).attr("data-page"),1500,
		{
			onAfter:function(){
			 	requestAnimationFrame(function() {
			 	
			 		if ((link.attr("data-page") == "webdev") && (1)){
			 			orbitCheck = 1;
			 			setTimeout(function(){
			 				$(".php").mouseenter();
			 				setTimeout(function(){
			 					$(".php").mouseleave();
				 				$(".python").mouseenter();
				 				
				 				setTimeout(function(){
				 					$(".magento").mouseenter();
				 					$(".python").mouseleave();
				 					setTimeout(function(){
				 						$(".other").mouseenter();
				 						$(".magento").mouseleave();
				 						setTimeout(function(){
					 						$(".other").mouseleave();
				 						},500)
				 					},500)
				 				},500)
				 			},500)
			 			},100)
			 		}

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