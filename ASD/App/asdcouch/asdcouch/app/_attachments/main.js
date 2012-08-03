$('#home').live('pageinit',function(){
	console.log('home page loaded')
	var toChangePage = function (toPageId) {
        $.mobile.changePage("#" + toPageId , {
            type:"post",
            data:$("form").serialize(),
            reloadPage:true
        });
    };

})
//--------------Customers Page
$('#customers').live('pageinit', function(){
	console.log('customer page loaded');
	$.couch.db('pizzasales').view('pizzasales/orders', {
		success:function (data){
			console.log(data)
			$('#customerList').empty();
			$.each(data.rows, function(index, customer) {
				var fname = customer.value.First
				var lname = customer.value.Last
				$('#customerList').append(
					$('<li>').append(
						$('<a>')
							.attr("href","#")
							.text(fname + " " + lname)
					)
				);	
			})
			$('#customerList').listview('refresh');
		}
	});	
})

//------------------Sizes Page
$('#sizes').live('pageinit', function(){
	console.log('size page loaded');
	$.couch.db('pizzasales').view('pizzasales/orders', {
		success:function (data){
			console.log(data)
			$('#sizeList').empty();
			$.each(data.rows, function(index, customer) {
				var size = customer.value.Size	
				$('#sizeList').append(
					$('<li>').append(
						$('<a>')
							.attr("href","#")
							.text(size)
					)
				);	
			})
			$('#sizeList').listview('refresh');
		}
	});	
})
//----------------crusts page
$('#crusts').live('pageinit', function(){
	console.log('crusts page loaded');
	$.couch.db('pizzasales').view('pizzasales/orders', {
		success:function (data){
			console.log(data)
			$('#crustList').empty();
			$.each(data.rows, function(index, customer) {
				var crust = customer.value.Crust
				$('#crustList').append(
					$('<li>').append(
						$('<a>')
							.attr("href","#")
							.text(crust)
					)
				);	
			})
			$('#crustList').listview('refresh');
		}
	});	
})
//-------------------Meats Page
$('#meats').live('pageinit', function(){
	console.log('Meats page loaded');
	$.couch.db('pizzasales').view('pizzasales/orders', {
		success:function (data){
			console.log(data)
			$('#meatList').empty();
			$.each(data.rows, function(index, customer) {
				var meat = customer.value.Meats
				$('#meatList').append(
					$('<li>').append(
						$('<a>')
							.attr("href","#")
							.text(meat)
					)
				);	
			})
			$('#meatList').listview('refresh');
		}
	});	
})
//-------------------Veggies Page
$('#veggies').live('pageinit', function(){
	console.log('Veggie page loaded');
	$.couch.db('pizzasales').view('pizzasales/orders', {
		success:function (data){
			console.log(data)
			$('#veggieList').empty();
			$.each(data.rows, function(index, customer) {
				var veggie = customer.value.Veggies
				$('#veggieList').append(
					$('<li>').append(
						$('<a>')
							.attr("href","#")
							.text(veggie)
					)
				);	
			})
			$('#veggieList').listview('refresh');
		}
	});	
})


$('#order').live('pageinit',function(){
	console.log("orer page loaded");
	
	var clearData = $("#clear");
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
	var storeData = function(key){
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
		$.couch.db('pizzasales').saveDoc(item, {
			success: function(data) {
				alert('order saved');
			},
			error: function (status) {
				alert(status);
			}
			});
		};		


	$('#turnIn').on('click',storeData);

})
$('#orders').live('pageinit' , function(){
	console.log('orders loaded');
	$.couch.db('pizzasales').view('pizzasales/orders', {
		success:function (data){
			console.log(data)
			$('#orderitems').empty();
			$.each(data.rows, function(index, customer) {
				var fname = customer.value.First
				var lname = customer.value.Last
				$('#orderitems').append(
					$('<li>').append(
						$('<a>')
							.attr("href","orders.html")
							.text(fname + " " + lname)
					)
				);	
			})
			$('#orderitems').listview('refresh');
		}
	});
})	
