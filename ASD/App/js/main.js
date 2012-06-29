$('#home').live('pageinit',function(){
	var toChangePage = function (toPageId) {
        $.mobile.changePage("#" + toPageId , {
            type:"post",
            data:$("form").serialize(),
            reloadPage:true
        });
    };

	var crustType = ["Thin","Thick","Pan"];
	var clearData = $("#clear");

	
	
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
	
	// Toggle controls function	
	function toggleControls(n){
		switch(n){
			case "off" :
				$("#order").hide();
				$("#clear").show();
				$("#display").hide();
				$("#addNew").show();
				break;
			case "on":
				$("#order").show();
				$("#clear").show();
				$("#display").show();
				$("#addNew").hide();
				$("#items").hide();
				break;
			default:
				return false;
		}
	}				
	
	var getSelectedRadio = function (){
		var radio = $(".crust");
		for (var i=0 ; i < radio.length; i++){
			if(radio[i].checked) {
				crustValue = radio[i].value; 
				console.log(crustValue);
			}
		}
	}
	
	

	// Auto Populate local storage
	function autoFillData(){
		for(var n in json){
			var id = Math.floor(Math.random()*100000001);
			localStorage.setItem(id, JSON.stringify(json[n]));
		}
	}
	
	// Customer Data function
		$("#custData").on('click',function(){
		$("#customerList").empty();
		for (var i=0, j = localStorage.length; i<j ; i++){
			var key = localStorage.key(i);
			var item = JSON.parse(localStorage.getItem(key));
			console.log();
			var makeSubList = $("<li></li>");
			var makSubLi = $("<h3>" + item.fname[1] + " " + item.lname[1] +"</h3>");
			var makeLink = $("<a href='#popup' data-role='button' data-rel='dialog' data-transition='pop' id= '" + key +"'>Edit</a>");
			
			
			makeLink.html(makSubLi);
			makeSubList.append(makeLink).appendTo("#customerList");
			};
	});

		
	// checkbox saving	
	/*	function checkTopping(id,type){
			var checkM = item.meat[1];
			var checkV = item.veggie[1];
			var mResult = type.test(checkM);
			var vResult = type.test(checkV);
			if(mResult === true || vResult === true){
			$(id).attr("checked", "checked");
			}
		}
		checkTopping("sausage",/Sausage/g);
		checkTopping("peperoni",/Peperoni/g);
		checkTopping("cb",/Canadian Bacon/g);
		checkTopping("beef",/Beef/g);
		checkTopping("onion" ,/Onion/g);
		checkTopping("mushroom" ,/Mushroom/g);
		checkTopping("gp" ,/Green Pepper/g);
		checkTopping("bo" ,/Black Olives/g);
		checkTopping("go" ,/Green Olives/g);
	*/	
	// Remove initial listener from the imputable
	
		
	
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
	
/*	var getOrders = function(){
		toggleList("off");
		if (localStorage.length === 0){
			alert("Loading Data");
			autoFillData();
		}
		var makeDiv = $('#seeData')
		makeDiv.attr = $("data-role", "content");
		makeDiv.append("<ul id=" + "datalist" + "></ul>");
		var makeList = $(#dataList);
		makeList.attr({dataRole: "listview",dataInset: "true", dataFilter: "true"
            });
		for (var i=0, j = localStorage.length; i<j ; i++){
			var makeLi = $("<li></li>");
			var linksLi = $("<li></li>");
			makeList.append(makeLi);
			var keyVal = localStorage.key(i);
            var value = localStorage.getItem(keyVal);
            var obj = JSON.parse(value); 	               
			var makeSubList = $('<ul></ul>');
            makeLi.append(makeSubList);
            for (var j in obj){
                 var optSubText = obj[j][0]+" "+obj[j][1];                   //separate the label with the value
                 var makeSubli = $("<li></li>");
                 console.log(obj);
                 makeSubli.append(optSubText);
                 makeSubList.append(makeSubli);
                 makeSubli.append(linksLi);
           }
		 makeItemLinks(localStorage.key(i), linksLi);
 		    }
        }
    };

	
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
	*/	
	var deleteItem = function(){
		var ask = confirm("Are you sure you want to delete this order");
		if (ask){
			localStorage.removeItem(this.key);
			alert("Order was deleted");
		}else{
			alert("Order was not deleted.");
		}
	}			
	
	
// Get Radio function
	var getRadio = function (){
		console.log($('input:radio[class=crust]:checked').val());
	
	};

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
			  item.crust	= ["Crust Type: " , getRadio()];
		//	  item.meat		= ["Meat Toppings:" , mVal];
	//		  item.veggie		= ["Veggie Toppings: " , veggieValue];
		localStorage.setItem(id,  JSON.stringify(item));
		alert("Order Saved");
		console.log($("#fname").val());
	}	



});	