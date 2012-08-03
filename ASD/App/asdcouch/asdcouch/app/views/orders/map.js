function (doc){
	if(doc._id.substr(0,5) === "order"){
		emit(doc._id.substr(5), {
			"First"              : doc.fname[1],
			"Last"               : doc.lname[1],
			"Address"            : doc.Address[1],
			"Date"               : doc.date[1],
			"Number of Pizzas"   : doc.number[1],
			"Size"               : doc.select[1],
			"Crust"              : doc.crust[1],
			"Meats"     		 : doc.meat[1],
			"Veggies"  	     : doc.veggie[1]
		});
	}
};