var orbitCheck = 0;
//To Do


	function checkSlide(type){
		currentSlide = $("."+type+"Slider").slick("slickCurrentSlide");
		$("."+type+"List li").removeClass("active");
		$("."+type+"List li:nth-child("+(currentSlide+1)+")").addClass("active");
		console.log(currentSlide);
	}  

function menuClick(page){
	
	$("nav").fadeIn();

	if(page.index("li") == -1){
 		pIndex = 0
	}else{
		pIndex = page.index("li");
	}

	if ((page.attr("data-page") == "exp") || (page.attr("data-page") == "contact")|| (page.attr("data-page") == "about"))  {
		$("nav li").addClass("light", 1500, "linear");
		$("nav li").removeClass("dark blue activeLight activeBlue activeDark", 1500, "linear");
		page.addClass("activeLight");
	}else if(page.attr("data-page") == "sysadmin") {
		$("nav li").addClass("blue", 1500, "linear");
		$("nav li").removeClass("light dark activeLight activeBlue activeDark", 1500, "linear");
		page.addClass("activeBlue");
	}

	else{
		$("nav li").addClass("dark", 1500, "linear");
		$("nav li").removeClass("blue light activeLight activeBlue activeDark", 1500, "linear");
		page.addClass("activeDark");
	}



	
	/*
	$("nav li").removeClass("active aroundActive");

	
	$("nav li:nth-child(" + parseInt(pIndex).toString() + "),nav li:nth-child(" + parseInt(pIndex+2).toString() + ")" ).addClass("aroundActive");
	*/
}

$(document).foundation();
$(document).ready(function(){	

 

	$(".expOrbit").hover(function(){
		console.log($(this).attr("data-orbitName"));
		$(".expObject").removeClass("expColor");
		$("." + $(this).attr("data-orbitName") + "Object").addClass("expColor");

	})

	//$(".aboutSlider").slick();

	$(".aboutSlider").slick({   
		prevArrow: $('.prevAbout'),
        nextArrow: $('.nextAbout'),
        fade:true
    });




	$(".webdevLinkModal").click(function(){
		$("nav").fadeOut();
	});

	$(".exitIcon").click(function(){
		$("nav").fadeIn();
	});


	// Oribts highlight on scroll
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
				 					$(".frontend").mouseenter();
				 					$(".python").mouseleave();
				 					setTimeout(function(){
				 						$(".other").mouseenter();
				 						$(".frontend").mouseleave();
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




	//Sysadmin View

	$(".circle").mouseenter(function(){

		var y;
		var x;
		y = $(this).css("top");
		x = $(this).css("left");
		frame = $(this).attr("data-sysAdminInfo")
		console.log(x + " " + y);
		//$(".sysadminContainer").append("<div >");





	});

	$(".circle").click(function(){
		$(".syadminFrame").removeClass("zoomIn");
		frame = $(this).attr("data-sysAdminInfo");
		console.log(frame+"t");
		$(".syadminFrame").html("");
		switch(frame){
			case "cp":
			$(".syadminFrame").html(" <h1>cp</h1><p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis.<br>Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.<br>Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium.<br>Qui animated corpse, cricket bat max brucks terribilem incessu zomby.</p>");
			break;

			case "http":
			$(".syadminFrame").html(" <h1>http</h1><p>Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris. Hi brains mindless mortuis limbic cortex soulless creaturas optic nerve, imo evil braaiinns stalking monstra hypothalamus adventus resi hippocampus dentevil vultus brain comedat cerebella pitiutary gland viventium. Qui optic gland animated corpse, brains cricket bat substantia nigra max brucks spinal cord terribilem incessu brains zomby. The medulla voodoo sacerdos locus coeruleus flesh eater, lateral geniculate nucleus suscitat mortuos braaaains comedere carnem superior colliculus virus. Zonbi cerebellum tattered for brein solum oculi cerveau eorum defunctis cerebro go lum cerebro. Nescio brains an Undead cervello zombies. Sicut thalamus malus putrid brains voodoo horror. Nigh basal ganglia tofth eliv ingdead.</p>");
			break;

			case "mysql":
			$(".syadminFrame").html(" <h1>mysql</h1><p>Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apocalypsi gorgibilem incessu brains zomby. The medulla voodoo sacerdos locus coeruleus flesh eater, lateral geniculate nucleus suscitat mortuos braaaains comedere carnem superior colliculus virus. Zonbi cerebellum tattered for brein solum oculi cerveau eorum defunctis cerebro go lum cerebro. Nescio brains an Undead cervello zombies. Sicut thalamus malus putrid brains voodoo horror. Nigh basal ganglia tofth eliv ingdead.</p>");
			break;

			case "ftp":
			$(".syadminFrame").html(" <h1>ftp</h1><p>Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris. Hi brainsruleus flesh eater, lateral geniculate nucleus suscitat mortuos braaaains comedere carnem superior colliculus virus. Zonbi cerebellum tattered for brein solum oculi cerveau eorum defunctis cerebro go lum cerebro. Nescio brains an Undead cervello zombies. Sicut thalamus malus putrid brains voodoo horror. Nigh basal ganglia tofth eliv ingdead.</p>");
			break;

			case "services":
			$(".syadminFrame").html(" <h1>services</h1><p>Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris. Hi brains mindless mortuis limbic cortex soulless creaturas optic nerve, imo evil braaiinns stalking monstra hypothalamus adventus resi hippocampus dentevil vultus brain comedat cerebella pitiutary gland viventium. Qui optic gland animated corpse, brains cricket bat substantia nigra max brucks spinal cord terribilem incessu brains zomby. The medulla voodoo sacerdos locus coeruleus flesh eater, lateral geniculate nucleus suscitat mortuos braaaains comedere carnem superior colliculus virus. Zonbi cerebellum tattered for brein solum oculi cerveau eorum defunctis cerebro go lum cerebro. Nescio brains an Undead cervello zombies. Sicut thalamus malus putrid brains voodoo horror. Nigh basal ganglia tofth eliv ingdead.</p>");
			break;

			case "dns":
			$(".syadminFrame").html(" <h1>dns</h1><p>Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris. Hi brains mindless mortuis limbic cortex soulless creaturas optic nerveerveau eorum defunctis cerebro go lum cerebro. Nescio brains an Undead cervello zombies. Sicut thalamus malus putrid brains voodoo horror. Nigh basal ganglia tofth eliv ingdead.</p>");
			break;

			case "email":
			$(".syadminFrame").html(" <h1>mail</h1><p>Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro.ganglia tofth eliv ingdead.</p>");
			break;

			case "http":
			$(".syadminFrame").html(" <h1>http</h1><p>Zains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basrvivor fornix dictum mauris. Hi brains mindless mortuis limbic cortex soulless creaturas optic nerve, imo evil braaiinns stalking itiutary gland viventium. Qui optic gland animated corpse, brains cricket bat substantia nigra max brucks spinal cord terribilem ivoodoo sacerdos locus coeruleus flesh eater, lateral geniculate nucleus suscitat mortuos braaaains comedere carnem superior collis. Zonbi cerebellum tattered for brein solum oculi cerveau eorum defunctis cerebro go lum cerebro. Nescio brains an Undead cervello zombies. Sicut thalamus malus putrid brains voodoo horror. Nigh basal ganglia tofth eliv ingdead.</p>");
			break;
			case "admin":
			$(".syadminFrame").html(" <h1>administration</h1><p>Zo. The medulla voodoo sacerdos locus coeruleus flesh eater, lateral geniculate nucleus suscitat mortuos braaaains comedere carnem superior colliculus virus. Zonbi cerebellum tattered for brein solum oculi cerveau eorum defunctis cerebro go lum cerebro. Nescio brains an Undead cervello zombies. Sicut thalamus malus putrid brains voodoo horror. Nigh basal ganglia tofth eliv ingdead.</p>");
			break;

			case "security":
			$(".syadminFrame").html(" <h1>security</h1><p>Zalum cerveau cerebro. erebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris. Hi i hippocampus dentevil vultus brain comedat cerebella pitiutary gland viventium. Qui optic gland animated corpse, brains cricket bat substantia nigra maere carnem superior colliculus virus. Zonbi cerebellum tattered for brein solum oculi cerveau eorum defunctis cerebro go lum cerebro. Nescio brains an Undead cervello zombies. Sicut thalamus malus putrid brains voodoo horror. Nigh basal ganglia tofth eliv ingdead.</p>");
			break;

			case "os":
			$(".syadminFrame").html(" <h1>os</h1><p>Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apolocus coeruleus flesh eater, lateral geniculate nucleus suscitat mortuos braaaains comede Undead cervello zombies. Sicut thalamus malus putrid brains voodoo horror. Nigh basal ganglia tofth eliv ingdead.</p>");
			break;

			case "cli":
			$(".syadminFrame").html(" <h1>cli</h1><p>Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiinsl cord terribilem incessu brains zomby. The medulla voodoo sacerdos locus coeruleus flesh eatnctis cerebro go lum cerebro. Nescio brains an Undead cervello zombies. Sicut thalamus malus putrid brains voodoo horror. Nigh basal ganglia tofth eliv ingdead.</p>");
			break;

		}
		$(".syadminFrame").addClass("zoomIn");
	});



	//Webdev View
///
	$(".php").click(function(){
		
		$('#phpModal').fadeIn();
		$(".phpSlider").slick({   
			prevArrow: $('.prevWebDev'),
	        nextArrow: $('.nextWebDev'),
	        fade:true
    	});
		
	});
	







	//PHP modal


	


    $('.phpSlider').on('afterChange', function(event, slick, direction){
  		checkSlide("php");
	});
	

	$(".phpList li").click(function(){
		$(".phpSlider").slick("slickGoTo", $(this).index());   
	});



  //Python Modal

	$(".python").click(function(){
		$('#pythonModal').fadeIn();
		$(".pythonSlider").slick({   
			prevArrow: $('.prevWebDev'),
	        nextArrow: $('.nextWebDev'),
	        fade:true
    	});
	});

	


    $('.pythonSlider').on('afterChange', function(event, slick, direction){
  		checkSlide("python");
  		console.log("test");
	});
	

	$(".pythonList li").click(function(){
		//console.log($(this).index());
		$(".pythonSlider").slick("slickGoTo", $(this).index());   
	});

	//Frontend Modal
		$(".frontend").click(function(){	
			$('#frontendModal').fadeIn();
			$(".frontendSlider").slick({   
				prevArrow: $('.prevWebDev'),
        		nextArrow: $('.nextWebDev'),
        		fade:true
    		});		
		});




    $('.frontendSlider').on('afterChange', function(event, slick, direction){
  		checkSlide("python");
  		console.log("test");
	});
	

	$(".frontendList li").click(function(){
		$(".frontendSlider").slick("slickGoTo", $(this).index());   
		}); 

	//Other Modal
	$(".other").click(function(){
		$('#otherModal').fadeIn();
		$(".otherSlider").slick({   
			prevArrow: $('.prevWebDev'),
	        nextArrow: $('.nextWebDev'),
	        fade:true
	    });	
	});

	$(".otherSlider").slick({   
		prevArrow: $('.prevWebDev'),
        nextArrow: $('.nextWebDev'),
        fade:true
    });


    $('.otherSlider').on('afterChange', function(event, slick, direction){
  		checkSlide("python");
  		console.log("test");
	});
	

	$(".otherList li").click(function(){
		$(".otherSlider").slick("slickGoTo", $(this).index());   
	}); 

	


	






	$(".moreInfoButton").click(function(){
		
		$('#expModal').fadeIn();
		
	});

		$(".expSlider").slick({   
		prevArrow: $('.prevWebDev'),
        nextArrow: $('.nextWebDev'),
        fade:true
    });


    $('.expSlider').on('afterChange', function(event, slick, direction){
  		checkSlide("exp");
  		console.log("test");
	});
	

	$(".expList li").click(function(){
		$(".expSlider").slick("slickGoTo", $(this).index());   
	}); 








	$(".webdevLinkModal").mouseenter(function(){
		$(".phpOrbit").removeClass(".orbitHover");
		$(".pythonOrbit").removeClass(".orbitHover");
		$(".frontendOrbit").removeClass(".orbitHover");
		name = $(this).attr("data-name");
		$("."+name+"Orbit").addClass("orbitHover");
	});

	$(".webdevLinkModal").mouseleave(function(){
			name = $(this).attr("data-name");
		$("."+name+"Orbit").removeClass("orbitHover");
	});

	$(".exitIcon").click(function(){
		$(".webdevModal").fadeOut();
		$(".invertedModal").fadeOut();
	});
});