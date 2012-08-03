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

			
//  project 2 make up


	var parseXML = function(xml){
		console.log(xml)
		$(xml).find('item').each(function(){
			var itemList = {};
			itemList.fname		= $(this).find("fname").text();
			itemList.lname		= $(this).find("lname").text();
			itemList.Address	= $(this).find("Address").text();
			itemList.date		= $(this).find("date").text();
			itemList.select		= $(this).find("select").text();
			itemList.crust		= $(this).find("crust").text();
			itemList.meat		= $(this).find("meat").text();
			itemList.veggie		= $(this).find("veggie").text();
			
			$('#customerlist').append(
				$('<li>').append(
					$('<a>').attr("href","#")
						.text(itemList.fname + " " + itemList.lname+ '<br>' +
						itemList.Address + '<br>' + itemList.date = '<<br>' + 
						itemList.select + '<br>' + itemList.crust + '<br>' + 
						itemList.meat + '<br>' + itemList.veggie)
				)	
			)	
		})
	}
	
	$('#xmlData').on("click", function(){
		$.ajax({
			type: "GET",
			url: "XHR/data.xml",
			dataType: "xml",
			success: parseXML	
		});
	});
	
// csv
	
	
		$.ajax({
			url:'XHR/data.csv',
			type:'GET',
			dataType: 'text',
			success: function(csvData){
			console.log(csvData)
			}
		})
});
	
	
	
	
	
	