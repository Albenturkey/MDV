$('#home').live('pageinit',function(){
	var clearData = $("#clear");

// Store Data function
	var storeData = function(key){
		if(!key){
			var id					= Math.floor(Math.random()*100000001);
		}else{
			id = key
		}	
		
		var item    			= {};
			  item.fname		= ["First Name: " , ($("#fname").val())];
		      item.lname		= ["Last Name: "  , ($("#lname").val())];
		      item.Address	= ["Address: " , ($("#Address").val())];
			  item.date		= ["Date: " , ($("#date").val())];
			  item.number	= ["Number of Pizzas: " , ($("#number").val())];
			  item.select		= ["Size: " ,($("#size").val())];
		//	  item.crust	= ["Crust Type: " , getRadio()];
		//	  item.meat		= ["Meat Toppings:" , mVal];
	//		  item.veggie		= ["Veggie Toppings: " , veggieValue];
		localStorage.setItem(id,  JSON.stringify(item));
		alert("Order Saved");
		
	}	
	$('#turnIn').on('click',storeData)
	
	// Display Data Function
/*	
	$('#display').on('click',function(){
		if(localStorage.length === 0){
			alert ('There are no orders. I will add some')
			autoFillData();
		$('#orderList').empty();
		for(var i = 0; i < localStorage.length;i++){
			var key      = localStorage.key(i);
			var value    = localStorage.getItem(key);
			var obj      = JSON.parse(localStorage.getItem(key));
			console.log(obj);
			var makeSubList  = $("<li></li>");
			var makeSubLi    = $("<h3>"+obj.group[1]+"</h3>+
				
	
	}
	)
	*/
	
	
	// Clear Local Storage
	 var clearLocal = function (){
        if (localStorage.length === 0){
            alert("There is nothing to clear");
        }
        else{
            localStorage.clear();
            alert("All orders have been deleted");
            window.location.reload();
            return false;
        }
    };
    
    clearData.on("click",clearLocal);
    
    
    //--------------------Project 2 code----------------------------------
 //   Load  Json data button

	$('#jsonData').on('click',function(){
		$.ajax({
			type:"GET",
			url:"xhr/data.json",
			dataType:"json",
			success:function(data){
				$.each(data.rows, function(index, customer){
					var fname = customer.value.First
					var lname = customer.value.Last
					$('#jsonData').append(
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
	)
   
//  Load XMl data

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
			url: "xhr/data.xml",
			dataType: "xml",
			success: parseXML
		});
	});   
$('#csvData').on("click", function(){
	$.ajax({
		url : 'xhr/data.csv',
		type: 'GET',
		dataType : 'text',
		success: function(csvData){
			console.log("This is my CSV: " , csvData);
			var items = csvData.split("\n");
			for(var j=1; j<items.length;j++){
				var row = items[j];
				var columns = row.split(",");
				console.log('CSV is: ',columns)
				$('#csvData').append('' + 
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
})
