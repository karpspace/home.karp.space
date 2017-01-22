var orbitCheck = 0;
//To Do


	function checkSlide(type){
		currentSlide = $("."+type+"Slider").slick("slickCurrentSlide");
		$("."+type+"List li").removeClass("active");
		$("."+type+"List li:nth-child("+(currentSlide+1)+")").addClass("active");
		//console.log(currentSlide);
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



	
    var scroll = $(window).scrollTop();
    if (scroll > 100){
    	$("nav").fadeIn();
    }

 

	$(".expOrbit").hover(function(){
		//console.log($(this).attr("data-orbitName"));
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
		$(".webdevModal").fadeOut();
		$(".invertedModal").fadeOut();
		//$('.sliders').slick('unslick');
	});


	// Oribts highlight on scroll
	$("nav ul li, .start i").click(function(){
		link = $(this);
		$(window).scrollTo("."+$(this).attr("data-page"),1500,
		{
			onAfter:function(){
			 	requestAnimationFrame(function() {
			 	
			 	/*	if ((link.attr("data-page") == "webdev") && (1)){
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
			 		} */

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
		//console.log(x + " " + y);
		//$(".sysadminContainer").append("<div >");





	});

	$(".circle").click(function(){
		$(".circle").removeClass("circleInvert");
		$(this).addClass("circleInvert");
		$(".syadminFrame").removeClass("fadeOut");
		frame = $(this).attr("data-sysAdminInfo");
		$(".syadminFrame").html("");
		switch(frame){
			case "cp":
			$(".syadminFrame").html(" <h1>cp</h1><p>I have experience with <span class='bold'>CPanel</span>, <span class='bold'>Plesk</span> and <span class='bold'>Webmin</span> control panels. My own preference is Webmin, but I feel comfortable with any of them.</p>");
			break;

			case "http":
			$(".syadminFrame").html(" <h1>http</h1><p><span class='bold'>Apache</span> is my webserver to go. Even though it's not as fast as nginx I choose it because of it’s <span class='bold'>great community</span> and <span class='bold'>documentation</span> as well as ease of use of mods. Because of all my vhosts have dynamic content, default ability to support it was a huge advantage. I feel really comfortable around apache <span class='bold'>config file</span> and <span class='bold'>.htaccess files</span>. I had to write scripts, that would <span class='bold'>generate vhosts</span> for every directory in given folder with certain options. <br>If I had to serve lots of static websites I would definitely choose <span class='bold'>nginx</span>, though. That’s why I've installed nginx and put couple of my static vhosts on it on my private server. </p>");
			break;

			case "mysql":
			$(".syadminFrame").html(" <h1>mysql</h1><p>MySQL server is my main load on server, as every website has CMS that uses database. I painfully learnt that having over <span class='bold'>1M entries</span>, and trying to make live web statistics is not a good idea on simple VPS. I really fast learnt that <span class='bold'>caching</span> is the key word. I use different user with random generated name and password, and <span class='bold'>close access</span> to MySQL from outside the server. Although I know how to use MySQL, I prefer using <span class='bold'>phpMyAdmin</span> </p>");
			break;

			case "ftp":
			$(".syadminFrame").html(" <h1>ftp</h1><p>One of the older and really <span class='bold'>insecure protocol</span>. Unfortunately used till today. I use <span class='bold'>VSFTPD</span> as my main FTP service. I try to set it up as secure as possible with custom rules in <span class='bold'>Fail2Ban</span>, and <span class='bold'>custom configuration</span>. </p>");
			break;

			case "services":
			$(".syadminFrame").html(" <h1>services</h1><p>My servers run <span class='bold'>http server(Apache)</span>, <span class='bold'>ftp(vsftpd)</span>, <span class='bold'>mail(sendmail)</span>, <span class='bold'>dns(bind)</span>, <span class='bold'>ssh</span>, <span class='bold'>mysql</span>. You can find out more about my preferred services by clicking on different stars.</p>");
			break;

			case "dns":
			$(".syadminFrame").html(" <h1>dns</h1><p>Bind configuration <span class='bold'>is not</span> my strongest skill. I've installed it my private server, connected my private domains and <span class='bold'>it works</span> without any problems. Unfortunately I don't have experience with large scale DNS settings, as we use one of the control panel for it. I know how set <span class='bold'>reverse dns, set <span class='bold'><span class='bold'>different DNS records</span> and <span class='bold'>transfer to proper IP</span>.</p>");
			break;

			case "email":
			$(".syadminFrame").html(" <h1>mail</h1><p>I don't think there is anything more <span class='bold'>evil</span> the setting email server. Even though I was able to set it up, and <span class='bold'>it's working</span> - it's road through hell. I’m <span class='bold'>still learning</span> how to manage and configure it.  </p>");
			break;

			case "admin":
			$(".syadminFrame").html(" <h1>administration</h1><p>Administration is <span class='bold'>big surprise</span> to me. Before I started learning about it, I thought it’s dull and boring. Yet, as I started getting aware of how administration of a server works, it started to interest me more and more. I love controlling what happens on the server, making sure it <span class='bold'>secure</span>, and as <span class='bold'>fast</span> as possible.<br>You can find out more about my <span class='bold'>administration skills by clicking on different stars.  </p>");
			break;

			case "security":
			$(".syadminFrame").html(" <h1>security</h1><p><span class='bold'>Information</span> is the key in security. That’s why I use <span class='bold'>Logwatch</span> to get <span class='bold'>daily updates</span> from my servers, informing about all the security threats. I also react to all illegal access tries with <span class='bold'>Fail2Ban</span> - using <span class='bold'>REGEX</span> to build rules is very powerful. As a standard I have <span class='bold'>root account disabled</span>, <span class='bold'>allow only specified users</span> to connect through ssh. Password, if cannot be switched to keys, are generated by <span class='bold'>KeePassX2</span>. I also install <span class='bold'>RootKit</span> hunter to track any changes made to crucial files. <span class='bold'>Backups</span> are stored in <span class='bold'>two different places</span>. One is cloud and second one is physical storage. We don't always have resources we wished to have, but we still have to <span class='bold'>have things done</span>. I’ve managed to write script, that connects and backups all crucial data to online drive with <span class='bold'>2Tb storage for 10$ a month</span>.</p>");
			break;

			case "os":
			$(".syadminFrame").html(" <h1>os</h1><p>I feel comfortable with <span class='bold'>all major OS's</span>. I <span class='bold'>prefer Linux/Windows</span> over MacOS, but it's just a preference. I feel more comfortable with Linux administration than any other os, but I will do well with any medium office network administration on Windows/MacOS. For everyday use I have Windows computers with mobaXterm to connect to servers.</p>");
			break;

			case "cli":
			$(".syadminFrame").html(" <h1>cli</h1><p>Oh the commandline - I think anyone in IT who was raised on movies like <span class='bold'>Hackers</span> or <span class='bold'>Matrix</span> fell in love with the green letters pouring down the monitor. First steps were so <span class='bold'>tough but also rewarding</span>. After using it non stop for the <span class='bold'>past 4 years</span> I love it. I'm still learning and discovering how to do things better. I also believe in <span class='bold'>automation</span>, if I need to do a task, a least once a week I will try to find a way to run it on itself. At the beginning of my Linux administration journey I used <span class='bold'>bash scripting</span>(with google) a lot. It's not a language that I find as enjoyable as <span class='bold'>Python</span>. That's why, most of my scripts are written in it right now. I build scripts to <span class='bold'>create config files</span>, <span class='bold'>initialize application and it’s database</span>, <span class='bold'>look for specific file</span>s and many many others. I also finished <span class='bold'>“Bandit”</span> game on http://overthewire.org/.</p>");
			break;

		}
		$(".syadminFrame").addClass("fadeIn");
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
$(".php").click(function(){
		
		$('#phpModal').fadeIn();
		
	

	


    $('.phpSlider').on('afterChange', function(event, slick, direction){
  		checkSlide("php");
	});
	
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


		$(".pythonSlider").slick({   
		prevArrow: $('.prevPython'),
        nextArrow: $('.nextPython'),
        fade:true
    });


    $('.pythonSlider').on('afterChange', function(event, slick, direction){
  		checkSlide("python");
  		//console.log("test");
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


	$(".frontendSlider").slick({   
		prevArrow: $('.prevFront'),
        nextArrow: $('.nextFront'),
        fade:true
    });



    $('.frontendSlider').on('afterChange', function(event, slick, direction){
  		checkSlide("python");
  		//console.log("test");
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
		prevArrow: $('.prevOther'),
        nextArrow: $('.nextOther'),

	$(".otherSlider").slick({   
		prevArrow: $('.prevWebDev'),
        nextArrow: $('.nextWebDev'),

        fade:true
    });


    $('.otherSlider').on('afterChange', function(event, slick, direction){
  		checkSlide("python");
  		//console.log("test");
	});
	

	$(".otherList li").click(function(){
		$(".otherSlider").slick("slickGoTo", $(this).index());   
	}); 

	


	






	$(".moreInfoButton").click(function(){
		
		$('#expModal').fadeIn();
		
	});

		$(".expSlider").slick({   
		prevArrow: $('.prevExp'),
        nextArrow: $('.nextExp'),
        fade:true
    });


    $('.expSlider').on('afterChange', function(event, slick, direction){
  		checkSlide("exp");
  		//console.log("test");
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



	$(".adminDot").click();
});