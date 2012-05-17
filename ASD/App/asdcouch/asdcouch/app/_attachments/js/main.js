$(document).ready(function(){
	var cust = function(){
		$.ajax({
			"url":"_view/customers",
			"dataType":"json",
			"success":function(data){
				$.each(data.rows, function(index, customer){
					var fname = customer.value.First
					var lname = customer.value.Last
					$('#customerlist').append(
						$('<li>').append(
							$('<a>').attr("href","#")
								.text(fname+" " + lname)
						)
					);
				});
				$('#customerlist').listview('refresh');
				$('#customerButton').hide();
				}
			});
	}
	$('#customerButton').on('click',cust)
});	
			
		