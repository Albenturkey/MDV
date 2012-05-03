$(document).ready(function(){

	var psform = $('#pizzasalesform'),
		ordererrorslink = $('#ordererrorslink'),
		crustValue,
		meatValue,
		veggieValue,
		mVal,
		errMsg = $("#errors")
	;

	function gEID(x){
		var theElement = document.getElementById(x);
		return theElement;
	}
	function clearLocal(){
		if (localStorage.length === 0){
			alert("There Are No Orders.")
		}else{
			localStorage.clear();
			alert("All Orders Have Been Deleted.")
			window.location.reload();
			return false;
			}
	}
	function getSelectedRadio(){
		var radio = document.forms[0].crust;
		for (var i=0 ; i < radio.length; i++){
			if(radio[i].checked) {
				crustValue = radio[i].value; 
			}
		}
	}	
	function getMeats(){
		var x = $("input"[name=meat])
		mVal = new Array();
		for(i = 0; i < x.length; i++){
			if (x[i].checked){
			mVal.push(x[i].value);
			meatValue = mVal
			}
		}
		return mVal;
	}
	function getVeggieCheckboxValue(){
		var vToppings = document.forms[0].veggie;
		vVal = new Array();
		for(var i = 0; i< vToppings.length; i++){
			if(vToppings[i].checked){
				vVal.push(vToppings[i].value);
				veggieValue = vVal;
			}
		}	
		return vVal;
	}
	function toggleControls(n){
		switch(n){
			case "on" :
				$("#order").css("display", "none");
				$("#clear").css("display", "inline");
				$("#display").css("display", "none");
				$("#github").css("display", "none");
				$("#appB").css("display", "none");

				//gEID("addNew").style.display = "inline";
				break;
			case "off":
				$("#order").css("display", "block");
				$("#clear").css("display", "inline");
				$("#display").css("display", "inline");
				//gEID("addNew").style.display = "none";
				$("#items").css("display",  "none");
				break;
			default:
				return false;
		}
	}		
	function storeData(key){
		if(!key){
			var id					= Math.floor(Math.random()*100000001);
		}else{
			id = key
		}	
		getSelectedRadio();
		getMeats();
		getVeggieCheckboxValue();
		var item    			= {};
			  item.fname		= ["First Name: " , $("#fname").val];
		      item.lname		= ["Last Name: "  , $("#lname").val];
		      item.Address	= ["Address: " , $("#Address").val];
			  item.date		= ["Date: " , $("#date").val];
			  item.number	= ["Number of Pizzas: " , $("#number").val];
			  item.select		= ["Size: " ,gEID("#size").val];
			  item.crust	= ["Crust Type: " , crustValue];
			  item.meat		= ["Meat Toppings:" , mVal];
			  item.veggie		= ["Veggie Toppings: " , veggieValue];
		localStorage.setItem(id,  JSON.stringify(item));
		alert("Order Saved");
	}	
	function getData(){
		toggleControls("on");
		if (localStorage.length ===0){
			alert ("No Orders in Local Storage so default data was added.");
			autoFillData();
		}	
		var makeDiv = document.createElement("div");
		makeDiv.setAttribute("id" , "items");
		var makeList = document.createElement("ul");
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$("#items").css("display","block");
		for(var i=0, len = localStorage.length; i<len;i++){
			var makeLi = document.createElement("li");
			var linksLi = document.createElement ("li");
			makeList.appendChild(makeLi);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			var makeSubList = document.createElement("ul");
			makeLi.appendChild(makeSubList);
		//	getImage(obj.select[1], makeSubList);
			for(var p in obj){
				var makeSubLi = document.createElement("li");
				makeSubList.appendChild(makeSubLi);
				var optSubText = obj[p][0] + " " + obj[p][1];
				makeSubLi.innerHTML = optSubText;
				makeSubList.appendChild(linksLi);
			}
			makeItemLinks(localStorage.key(i), linksLi); 
		}
	}
	function makeItemLinks(key, linksLi){
	var editLink = document.createElement("a");
	editLink.href = "#";
	editLink.key = key;
	var editText = "Edit Order";
	
	editLink.innerHTML = editText;
	linksLi.appendChild(editLink);
	// add line break	
	var breakTag = document.createElement("br");
	linksLi.appendChild(breakTag);
	var deleteLink = document.createElement("a");
	deleteLink.href = "#";
	deleteLink.key = key;
	var deleteText = "Delete Order";
	deleteLink.addEventListener("click" , deleteItem);
	deleteLink.innerHTML = deleteText;
	linksLi.appendChild(deleteLink);	
}
	function autoFillData(){
	for(var n in json){
		var id = Math.floor(Math.random()*100000001);
		localStorage.setItem(id, JSON.stringify(json[n]));
	}
}
	function editItem(){
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);
		toggleControls("off");	
		$("#fname").val = item.fname[1];
		$("#lname").val = item.lname[1];
		$("#address").val = item.Address[1];
		$("#date").val = item.date[1];
		$("#number").val = item.number[1];
	// radio button 	
		$("input:radio[crust]:checked").val();
		$("#size").val = item.select[1];

	// checkbox saving	
		function checkTopping(id,type){
			var checkM = item.meat[1];
			var checkV = item.veggie[1];
			var mResult = type.test(checkM);
			var vResult = type.test(checkV);
			if(mResult === true || vResult === true){
			gEID(id).setAttribute("checked", "checked");
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
		var checkM = document.forms[0].meat;
	// Remove initial listener from the imputable
		removeEventListener("click" , storeData);
		 gEID("submit").value = "Edit Order";
		 var editSubmit = gEID("submit");
		 editSubmit.addEventListener("click" , valid);
		 editSubmit.key = this.key;
			
	}		
	function deleteItem(){
		var ask = confirm("Are you sure you want to delete this order");
		if(ask){
			localStorage.removeItem(this.key);
			alert("Order was deleted.");
			window.location.reload();
		}else{
			alert("Order was not deleted.");
		}		
}
	function valid(e){
		var getfname = $("#fname");
		var getlname = $("#lname");
		var getAddress = $("#Address");
		var getdate = $("#date");
		var getnumber = $("#number");
		var getselect = $("#size");
		
		
	// reset errors
		errMsg.innerHTML = "" ;
		$("#fname").css("border", "1px");
		$("#lname").css("border", "1px");
		$("#Address").css("border", "1px");
		$("#date").css("border", "1px");
		$("#number").css("border", "1px");
		$("#size").css("border", "1px");
		
		var messageAry = [];	
		
	// First Name Validation 
		if ($("#fname").val === ""){
			var fnameError = "Please enter a first name.";
			getfname.style.border = "1px solid red";
			messageAry.push(fnameError);	
	}	
	// Last Name Validation
		if ($("#lname").val === ""){
			var lnameError = "Please enter a last name.";
			getlname.style.border = "1px solid red";
			messageAry.push(lnameError);	
	}
	// Address Validation
		if ($("#Address").val === ""){
			var addressError = "Please enter an Adddress.";
			getAddress.style.border = "1px solid red";
			messageAry.push(addressError);
	}
	// Date Validation
		if ($("#date").val === ""){
			var dateError = "Please enter an order date.";
			getdate.style.border = "1px solid red";
			messageAry.push(dateError);
		}
	// Number of Pizzas Validation
		if ($("#number").val < 1 ){
			var numbErerror = "Please enter the number of this type of pizza.";
			messageAry.push(numbErerror);	
		}
	//Crust size Validation
		if ($("#size").val === "--Choose the size of your pizza--"){
			var selectError = "Please choose a size.";
			getselect.style.border = "1px solid red";
			
			messageAry.push(selectError);	
			}	
	// If there are errors display this
		if (messageAry.length >= 1){
			for (var i = 0, j = messageAry.length; i < j; i++){
				var txt = document.createElement("li");
				txt.innerHTML = messageAry[i];
				errMsg.appendChild(txt);
				alert("Please  Fill Out Required Fields");
			} 
			e.preventDefault();
			return false;	
		}else{
			storeData(this.key);
		}					
	}
	psform.validate({
		invalidHandler: function(form, validator){
			ordererrorslink.click();
			var html = '';
			for (var key in validator.submitted){
				var label = $('label[for^="'+ key +'"]').not('[generated]');
				var legend = label.closest('fieldset').find('.ui-controlgroup-label');
				var fieldName = legend.length ? legend.text() : label.text();
				html += '<li>'+ fieldName +'</li>';
			};
			$("#ordererrors ul").html(html);
		},
		submitHandler:	function(){
			var data = psform.serializeArray();
			parsePizzaForm(data);
		}
	});
	$("#display").bind("click",getData);
	$("#clear").bind("click",clearLocal);
	$("#submit").bind("click",valid);
	
	
});	
