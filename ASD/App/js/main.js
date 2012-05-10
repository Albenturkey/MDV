$('#home').live('pageinit',function(){
	console.log("App Loaded");
	/*var crustValue = ;
	
	
	var getSelectedRadio = function (){
		var radio = $(".crust");
		for (var i=0 ; i < radio.length; i++){
			if(radio[i].checked) {
				crustValue = radio[i].value; 
				console.log(crustValue);
			}
		}
	}
	
	var storeData = function(key){
		if (!key){
			var id = Math.floor(Math.random()*10000001);
		}else{
			id = key
		}
	var item    			= {};
			  item.fname	= ["First Name: " , $("#fname").val];
		      item.lname	= ["Last Name: "  , $("#lname").val];
		      item.Address	= ["Address: " , $("#Address").val];
			  item.date		= ["Date: " , $("#date").val];
			  item.number	= ["Number of Pizzas: " , $("#number").val];
			  item.select	= ["Size: " ,gEID("#size").val];
			  item.crust	= ["Crust Type: " , crustValue];
			  item.meat		= ["Meat Toppings:" , mVal];
			  item.veggie	= ["Veggie Toppings: " , veggieValue];	
	localStorage.setItem(id, JSON.stringify(item));
	alert("Order Saved"); 	
	};
	*/
	// Customer Data function
		$("#custData").on('click',function(){
		$("#customerList").empty();
		for (var i=0, j = localStorage.length; i<j ; i++){
			var key = localStorage.key(i);
			var item = JSON.parse(localStorage.getItem(key));
			console.log(item);
			var makeSubList = $("<li></li>");
			var makSubLi = $("<h3>" + item.fname[1] + " " + item.lname[1] +"</h3>");
			var makeLink = $("<a href='#' id= '" + key +"'>Edit</a>");
			makeLink.on('click' , function(){
				console.log("This is my key: " + this.id);
			});
			makeLink.html(makSubLi);
			makeSubList.append(makeLink).appendTo("#customerList");
			};
	});
		$("#sizeData").on('click',function(){
		$("#sizeList").empty();
		for (var i=0, j = localStorage.length; i<j ; i++){
			var key = localStorage.key(i);
			var item = JSON.parse(localStorage.getItem(key));
			console.log(item);
			var makeSubList = $("<li></li>");
			var makSubLi = $("<h3>" + item.select[0] +" " + item.select[1] +"</h3>");
			var makeLink = $("<a href='#' id= '" + key +"'>Edit</a>");
			makeLink.on('click' , function(){
				console.log("This is my key: " + this.id);
			});
			makeLink.html(makSubLi);
			makeSubList.append(makeLink).appendTo("#sizeList");
			};
	});
		$("#crustData").on('click',function(){
		$("#curstList").empty();
		for (var i=0, j = localStorage.length; i<j ; i++){
			var key = localStorage.key(i);
			var item = JSON.parse(localStorage.getItem(key));
			console.log(item);
			var makeSubList = $("<li></li>");
			var makSubLi = $("<h3>" + item.crust[1] +"</h3>");
			var makeLink = $("<a href='#' id= '" + key +"'>Edit</a>");
			makeLink.on('click' , function(){
				console.log("This is my key: " + this.id);
			});
			makeLink.html(makSubLi);
			makeSubList.append(makeLink).appendTo("#crustList");
			};
	});
	$("#meatData").on('click',function(){
		$("#meatList").empty();
		for (var i=0, j = localStorage.length; i<j ; i++){
			var key = localStorage.key(i);
			var item = JSON.parse(localStorage.getItem(key));
			console.log(item);
			var makeSubList = $("<li></li>");
			var makSubLi = $("<h3>" + item.meat[1] +"</h3>");
			var makeLink = $("<a href='#' id= '" + key +"'>Edit</a>");
			makeLink.on('click' , function(){
				console.log("This is my key: " + this.id);
			});
			makeLink.html(makSubLi);
			makeSubList.append(makeLink).appendTo("#meatList");
			};
	});
	$("#veggieData").on('click',function(){
		$("#veggieList").empty();
		for (var i=0, j = localStorage.length; i<j ; i++){
			var key = localStorage.key(i);
			var item = JSON.parse(localStorage.getItem(key));
			console.log(item);
			var makeSubList = $("<li></li>");
			var makSubLi = $("<h3>" + item.veggie[1] +"</h3>");
			var makeLink = $("<a href='#' id= '" + key +"'>Edit</a>");
			makeLink.on('click' , function(){
				console.log("This is my key: " + this.id);
			});
			makeLink.html(makSubLi);
			makeSubList.append(makeLink).appendTo("#veggieList");
			};
	});
	$("#recentData").on('click',function(){
		$("#recentList").empty();
		for (var i=0, j = localStorage.length; i<j ; i++){
			var key = localStorage.key(i);
			var item = JSON.parse(localStorage.getItem(key));
			console.log(item);
			var makeSubList = $("<li></li>");
			var makSubLi = $("<h3>" + item.fname[1] + " " + item.lname[1] +"</h3>"+
			"<p>"+item.Address[0]+" " + item.Address[1] + "</p>"+
			"<p>"+item.date[0]+" " + item.date[1] +"</p>"+
			"<p>"+item.number[0]+" " + item.number[1] +"</p>"+
			"<p>"+item.select[0]+" " + item.select[1] +"</p>"+
			"<p>"+item.crust[0]+" " + item.crust[1] +"</p>"+
			"<p>"+item.meat[0]+" " + item.meat[1] +"</p>"+
			"<p>"+item.veggie[0]+" " + item.veggie[1] +"</p>");
			var makeLink = $("<a href='#' id= '" + key +"'>Edit</a>");
			makeLink.on('click' , function(){
				console.log("This is my key: " + this.id);
			});
			makeLink.html(makSubLi);
			makeSubList.append(makeLink).appendTo("#recentList");
			};
			makeItemsLink(localStorage.key(i),makeSubList);
	});
	
	
		var makeItemsLink = function(key, makeSubList){
		var editLink = $("<a>");
		editLink.href="#";
		editLink.key = key;
		var editText = "Edit Order";
		editLink.append(editText);
		makeSubList.appendTo(editLink)
		var deleteLink = $("<a>");
		deleteLink.href="#"
		deleteLink.key = key;
		var deleteText ="Delete Order";
		deleteLink.on('click', deleteItem);
		deleteLink.append(deleteText);
		makeSubList.appendTo(deleteLink);
		};
		
	var deleteItem = function(){
		var ask = confirm("Are you sure you want to delete this order");
		if (ask){
			localStorage.removeItem(this.key);
			alert("Order was deleted");
		}else{
			alert("Order was not deleted.");
		}
	}			
	
	
	
});	