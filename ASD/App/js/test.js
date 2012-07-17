$(document).ready(function(){
	var cust = function(){
		$.ajax({
			"url":"json.js",
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
//xml

	var parseXML = function(xml){
		$(xml).find("order").each(function(){
			var orderList = {};
			orderList.fname = $(this).find("fname").text();
			orderList.lname = $(this).find("lname").text();
			console.log(orderList);
			
			$('#xmlData').after(' ' +
			'<li class="ui-li-static ui-body-a">'+ 
			'<p> First Name: '+
			orderList.fname +
			'<br>'+
			'Last Name: '+
			orderList.lname + 
			'</p></li>');
		
		});
	};
			
	$('#xmlData').on("click", function(){
		$.ajax({
			type: "GET",
			url: "data.xml",
			dataType: "xml",
			success: parseXML
		});
	});
	
	// csv
/*	$('#csvData').on("click", function(){
		$.ajax({
			url:'data.csv',
			type:'GET',
			dataType: 'text',
			success: function(csvData){
				console.log(csvData)
				var items = csvData.split("\n");
				for(var j=1; j<items.length;j++){
					var row = items[j];
					var columns = row.split(",");
					$('#csvData').after('  ' + 
	                '<li class="ui-li ui-li-static ui-body-a">' +
					'<p>First Name: ' + columns[1] + '<br>' +	
					'Last Name: ' + columns[2] + '<br>' +
					'Number: ' + column[3] + '<br>' +  
					'Size: ' + columns[4] + '<br>'+
					'</p></li>');
				}
			}
		});
	});
*/
	$('#csvData').on("click", function(){
	$.ajax({
		url : 'data.csv',
		type: 'GET',
		dataType : 'text',
		success: function(csvData){
			console.log("This is my CSV: " , csvData);
			var items = csvData.split("\n");
			for(var j=1; j<items.length;j++){
				var row = items[j];
				var columns = row.split(",");
				console.log('CSV is: ',columns)
				$('#csvData').after('' + 
                '<li class="ui-li ui-li-static ui-body-a">' +
				'<p>First Name: ' + columns[0] + '<br>' +	
				'Last Name: ' + columns[1] + '<br>' +
				'Number: ' + columns[2] + '<br>' +  
				'Size: ' + columns[3] + '<br>'+
				'</p></li>');	
			
		}
		}
	})
	})
});
	
	
	
	