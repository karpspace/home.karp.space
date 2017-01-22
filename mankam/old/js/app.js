$(document).foundation();


$(document).ready(function(){

		$(".butt").click(function(){
			code = $(this).attr("code");
			$.get( "send.php?code="+code);
		});



});
