$(document).ready(function(){
	$("#x").hide();
	$("#nav").hide();
	
    $("#x").click(function(){
        $("#x").hide();
		$("#o").show();
		$("#nav").hide();
    });
	
	$("#o").click(function(){
		$("#x").show();
        $("#o").hide();
		$("#nav").show();
    });
});