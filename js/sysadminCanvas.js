
function initCanvas() {
    $('#sysAdminCanvas').attr("width","1600");
    $('#sysAdminCanvas').attr("height","600");
}


$("document").ready(function(){

	initCanvas();
	var c = document.getElementById("sysAdminCanvas");
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.arc(60,60,10,0,2*Math.PI);
	ctx.fillStyle='rgb(255,255,255)';
	ctx.strokeStyle='rgb(255,255,255)';
	ctx.fill();
	ctx.stroke();
});



