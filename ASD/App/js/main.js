// Alan Sherek
// Project 4
// VFW 0212
// Javascript


// wait till the dom is ready
window.addEventListener("DOMContentLoaded" , function(){

// Get element by id function
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	}
	

//Size selector
	/*function makeCats(){
		var formTag = document.getElementsByTagName("form"),
			  selectLi = $("select"),
			  makeSelect = document.createElement("select");
			  makeSelect.setAttribute("id" , "size");
		for(var i=0 , j=sizeVal.length; i<j ; i++){
			  var makeOption = document.createElement("option");
			  var optText = sizeVal[i];
			  makeOption.setAttribute("value" , optText);
			  makeOption.innerHTML = optText;	  	
			  makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	}*/
	
// Find value of radio button
	function getSelectedRadio(){
		var radio = document.forms[0].crust;
		for (var i=0 ; i < radio.length; i++){
			if(radio[i].checked) {
				crustValue = radio[i].value; 
			}
		}
	}	
	
// Find Value of checkboxes

	function getMeats(){
		var x = document.forms[0].meat;
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
	
// Toggle controls function	
	function toggleControls(n){
		switch(n){
			case "on" :
				$("order").style.display = "none";
				$("clear").style.display = "inline";
				$("display").style.display = "none";
				$("addNew").style.display = "inline";
				break;
			case "off":
				$("order").style.display = "block";
				$("clear").style.display = "inline";
				$("display").style.display = "inline";
				$("addNew").style.display = "none";
				$("items").style.display =  "none";
				break;
			default:
				return false;
		}
	}				
	
// Store Data Function
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
			  item.fname		= ["First Name: " , $("fname").value];
		      item.lname		= ["Last Name: "  , $("lname").value];
		      item.Address	= ["Address: " , $("Address").value];
			  item.date		= ["Date: " , $("date").value];
			  item.number	= ["Number of Pizzas: " , $("number").value];
			  item.select		= ["Size: " ,$("size").value];
			  item.crust	= ["Crust Type: " , crustValue];
			  item.meat		= ["Meat Toppings:" , mVal];
			  item.veggie		= ["Veggie Toppings: " , veggieValue];
		localStorage.setItem(id,  JSON.stringify(item));
		alert("Order Saved");
	}	
	
// Get data function		
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
		$("items").style.display =  "block";
		for(var i=0, len = localStorage.length; i<len;i++){
			var makeLi = document.createElement("li");
			var linksLi = document.createElement ("li");
			makeList.appendChild(makeLi);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			var makeSubList = document.createElement("ul");
			makeLi.appendChild(makeSubList);
			getImage(obj.select[1], makeSubList);
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
	
	function getImage(imgName,makeSubList){
		var imageLi = document.createElement("li");
		makeSubList.appendChild(imageLi);
		var newImg =  document.createElement("img")
		var setSrc = newImg.setAttribute("src" , "images/" + imgName + ".png");
		imageLi.appendChild(newImg);
	}
	
	// Auto Populate local storage
	function autoFillData(){
		for(var n in json){
			var id = Math.floor(Math.random()*100000001);
			localStorage.setItem(id, JSON.stringify(json[n]));
		}
	}
	
	function makeItemLinks(key, linksLi){
		var editLink = document.createElement("a");
		editLink.href = "#";
		editLink.key = key;
		var editText = "Edit Order";
		editLink.addEventListener("click" , editItem);
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
	
	function editItem(){
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);
		toggleControls("off");	
		$("fname").value = item.fname[1];
		$("lname").value = item.lname[1];
		$("Address").value = item.Address[1];
		$("date").value = item.date[1];
		$("number").value = item.number[1];
	// radio button 	
		var radios = document.forms[0].crust;
		for (var i = 0; i < radios.length; i++){
			if (radios[i].value === "thick" && item.crust[1] === "thick"){
				radios[i].setAttribute("checked" , "checked");
			}
			if (radios[i].value === "thin" && item.crust[1] === "thin"){
				radios[i].setAttribute("checked" , "checked");
			}
			if (radios[i].value === "pan" && item.crust[1] === "pan"){
				radios[i].setAttribute("checked" , "checked");
			}	
		}
		$("size").value = item.select[1];

	// checkbox saving	
		function checkTopping(id,type){
			var checkM = item.meat[1];
			var checkV = item.veggie[1];
			var mResult = type.test(checkM);
			var vResult = type.test(checkV);
			if(mResult === true || vResult === true){
			$(id).setAttribute("checked", "checked");
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
		order.removeEventListener("click" , storeData);
		 $("submit").value = "Edit Order";
		 var editSubmit = $("submit");
		 editSubmit.addEventListener("click" , validate);
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
			  	
// Clear Data functin	
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
	
	function validate(e){
		var getfname = $("fname");
		var getlname = $("lname");
		var getAddress = $("Address");
		var getdate = $("date");
		var getnumber = $("number");
		var getselect = $("size");
		
		
	// reset errors
		errMsg.innerHTML = "" ;
		getfname.style.border = "1px solid black";
		getlname.style.border = "1px solid black";
		getAddress.style.border = "1px solid black";
		getdate.style.border = "1px solid black";
		getnumber.style.border = "1px solid black";
		getselect.style.border = "1px solid black";
		
		var messageAry = [];	
		
	// First Name Validation 
		if (getfname.value === ""){
			var fnameError = "Please enter a first name.";
			getfname.style.border = "1px solid red";
			messageAry.push(fnameError);	
	}	
	// Last Name Validation
		if (getlname.value === ""){
			var lnameError = "Please enter a last name.";
			getlname.style.border = "1px solid red";
			messageAry.push(lnameError);	
	}
	// Address Validation
		if (getAddress.value === ""){
			var addressError = "Please enter an Adddress.";
			getAddress.style.border = "1px solid red";
			messageAry.push(addressError);
	}
	// Date Validation
		if (getdate.value === ""){
			var dateError = "Please enter an order date.";
			getdate.style.border = "1px solid red";
			messageAry.push(dateError);
		}
	// Number of Pizzas Validation
		if (getnumber.value < 1 ){
			var numbErerror = "Please enter the number of this type of pizza.";
			messageAry.push(numbErerror);	
		}
	//Crust size Validation
		if (getselect.value === "--Choose the size of your pizza--"){
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
// Variables
	var sizeVal = ["--Choose the size of your pizza--","Large" , "Medium" , "Small"],
		  crustValue,
		  meatValue,
		  veggieValue,
		  mVal,
		  errMsg = $("errors")
	 ; 

// Set link & submit click events
	var displayLink = $("display");
//	displayLink.addEventListener("click" , getData);
	var clearLink = $("clear");
	//clearLink.addEventListener("click" , clearLocal);
	var order = $("submit");
//	order.addEventListener("click" , validate);
	
});





