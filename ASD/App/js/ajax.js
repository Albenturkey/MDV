


$(function(){
	$('#recent').bind('click',function(){
	$.ajax({
		url:'file://localhost/Users/albenturkey/github/MDV/ASD/App/XHR/data.json',
		type: "GET",
		dataType: "jsonp",
		success: function(r){
			console.log(r);
		}
	});
	return false;
	});
	});	