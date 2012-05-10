$(document).ready(function (e) {
    localStorage.clear();
    var jsonItems = {
    
		"items":[
		{
			"fname": ["First Name: " , "Donald"],
			"lname": ["Last Name: " , "Duck"],
			"Address": ["Address: " , "Disney Land"],
			"date": ["Date: " , "02/07/2012"],
			"number": ["Number of Pizzas: ", "2"],
			"select" :["Size: ", "Large"],
			"crust" : ["Crust Type: ", "thick"],
			"meat" : ["Meat Toppings: " , "Peperoni" ],
			"veggie" : ["Veggie Toppings: ", "Mushrooms, Onions"]
		},
		{
			"fname": ["First Name: " , "Walter "],
			"lname": ["Last Name: " , "Bishop"],
			"Address": ["Address: " , "Harvard University University Hall Cambridge, MA 02138-3800"],
			"date": ["Date: " , "02/07/2012"],
			"number": ["Number of Pizzas: ", "4"],
			"select" :["Size: ", "Large"],
			"crust" : ["Crust Type: ", "pan"],
			"meat" : ["Meat Toppings: " , "Sausage, Beef" ],
			"veggie" : ["Veggie Toppings: ", "Black Olives, Onions"]
		},
		{
			"fname": ["First Name: " , "Ray"],
			"lname": ["Last Name: " , "Peloquin"],
			"Address": ["Address: " , "301 3rd St south, Virginia,Mn"],
			"date": ["Date: " , "02/28/2012"],
			"number": ["Number of Pizzas: ", "1"],
			"select" :["Size: ", "Small"],
			"crust" : ["Crust Type: ", "thin"],
			"meat" : ["Meat Toppings: " , "Canadian Bacon" ],
			"veggie" : ["Veggie Toppings: ", "Mushrooms, Green Pepper"]
		},
		{
			"fname": ["First Name: " , "Alan"],
			"lname": ["Last Name: " , "Sherek"],
			"Address": ["Address: " , "1004 washington st"],
			"date": ["Date: " , "03/07/2012"],
			"number": ["Number of Pizzas: ", "6"],
			"select" :["Size: ", "small"],
			"crust" : ["Crust Type: ", "thin"],
			"meat" : ["Meat Toppings: " , "Peperoni, Sausage" ],
			"veggie" : ["Veggie Toppings: ", "Onions"]
		},
		{
			"fname": ["First Name: " , "Walter "],
			"lname": ["Last Name: " , "Bishop"],
			"Address": ["Address: " , "Harvard University University Hall Cambridge, MA 02138-3800"],
			"date": ["Date: " , "02/28/2012"],
			"number": ["Number of Pizzas: ", "2"],
			"select" :["Size: ", "Small"],
			"crust" : ["Crust Type: ", "pan"],
			"meat" : ["Meat Toppings: " , "Sausage, Beef" ],
			"veggie" : ["Veggie Toppings: ","Onions"]
		},
		{
			"fname": ["First Name: " , "Josh"],
			"lname": ["Last Name: " , "Johnson"],
			"Address": ["Address: " , "His House"],
			"date": ["Date: " , "01/18/2012"],
			"number": ["Number of Pizzas: ", "1"],
			"select" :["Size: ", "medium"],
			"crust" : ["Crust Type: ", "thin"],
			"meat" : ["Meat Toppings: " , "Canadian Bacon" ],
			"veggie" : ["Veggie Toppings: ", ""]
		},
		{
			"fname": ["First Name: " , "Donald"],
			"lname": ["Last Name: " , "Duck"],
			"Address": ["Address: " , "Disney Land"],
			"date": ["Date: " , "02/07/2012"],
			"number": ["Number of Pizzas: ", "2"],
			"select" :["Size: ", "Large"],
			"crust" : ["Crust Type: ", "thick"],
			"meat" : ["Meat Toppings: " , "Peperoni, sausage" ],
			"veggie" : ["Veggie Toppings: ", "Mushrooms, Onions, Green Pepper"]
		},
		{
			"fname": ["First Name: " , "Desiree "],
			"lname": ["Last Name: " , "Tomczak"],
			"Address": ["Address: " , "392 first st"],
			"date": ["Date: " , "02/20/2012"],
			"number": ["Number of Pizzas: ", "1"],
			"select" :["Size: ", "Medium"],
			"crust" : ["Crust Type: ", "pan"],
			"meat" : ["Meat Toppings: " , "Beef" ],
			"veggie" : ["Veggie Toppings: ", "Black Olives"]
		},
		{
			"fname": ["First Name: " , "Ray"],
			"lname": ["Last Name: " , "Peloquin"],
			"Address": ["Address: " , "301 3rd St south, Virginia,Mn"],
			"date": ["Date: " , "02/28/2012"],
			"number": ["Number of Pizzas: ", "3"],
			"select" :["Size: ", "Small"],
			"crust" : ["Crust Type: ", "pan"],
			"meat" : ["Meat Toppings: " , "Canadian Bacon" ],
			"veggie" : ["Veggie Toppings: ", "Mushrooms, Green Pepper"]
		},
		{
			"fname": ["First Name: " , "Joe"],
			"lname": ["Last Name: " , "Lee"],
			"Address": ["Address: " , "290 second st"],
			"date": ["Date: " , "12/2/2011"],
			"number": ["Number of Pizzas: ", "7"],
			"select" :["Size: ", "Large"],
			"crust" : ["Crust Type: ", "thick"],
			"meat" : ["Meat Toppings: " , "Peperoni" ],
			"veggie" : ["Veggie Toppings: ", "Mushrooms, Onions"]
		},
		{
			"fname": ["First Name: " , "Walter "],
			"lname": ["Last Name: " , "Bishop"],
			"Address": ["Address: " , "Harvard University University Hall Cambridge, MA 02138-3800"],
			"date": ["Date: " , "02/07/2012"],
			"number": ["Number of Pizzas: ", "4"],
			"select" :["Size: ", "Large"],
			"crust" : ["Crust Type: ", "pan"],
			"meat" : ["Meat Toppings: " , "Sausage, Beef" ],
			"veggie" : ["Veggie Toppings: ", "Black Olives, Onions"]
		},
		{
			"fname": ["First Name: " , "Ray"],
			"lname": ["Last Name: " , "Peloquin"],
			"Address": ["Address: " , "301 3rd St south, Virginia,Mn"],
			"date": ["Date: " , "02/28/2012"],
			"number": ["Number of Pizzas: ", "1"],
			"select" :["Size: ", "Small"],
			"crust" : ["Crust Type: ", "thin"],
			"meat" : ["Meat Toppings: " , "Canadian Bacon" ],
			"veggie" : ["Veggie Toppings: ", "Mushrooms, Green Pepper"]
		},
	 	{
			"fname": ["First Name: " , "Donald"],
			"lname": ["Last Name: " , "Duck"],
			"Address": ["Address: " , "Disney Land"],
			"date": ["Date: " , "02/07/2012"],
			"number": ["Number of Pizzas: ", "2"],
			"select" :["Size: ", "Large"],
			"crust" : ["Crust Type: ", "thick"],
			"meat" : ["Meat Toppings: " , "Peperoni" ],
			"veggie" : ["Veggie Toppings: ", "Mushrooms, Onions"]
		},
		{
			"fname": ["First Name: " , "Walter "],
			"lname": ["Last Name: " , "Bishop"],
			"Address": ["Address: " , "Harvard University University Hall Cambridge, MA 02138-3800"],
			"date": ["Date: " , "02/07/2012"],
			"number": ["Number of Pizzas: ", "4"],
			"select" :["Size: ", "Large"],
			"crust" : ["Crust Type: ", "pan"],
			"meat" : ["Meat Toppings: " , "Sausage, Beef" ],
			"veggie" : ["Veggie Toppings: ", "Black Olives, Onions"]
		},
		{
			"fname": ["First Name: " , "Ray"],
			"lname": ["Last Name: " , "Peloquin"],
			"Address": ["Address: " , "301 3rd St south, Virginia,Mn"],
			"date": ["Date: " , "02/28/2012"],
			"number": ["Number of Pizzas: ", "1"],
			"select" :["Size: ", "Small"],
			"crust" : ["Crust Type: ", "thin"],
			"meat" : ["Meat Toppings: " , "Canadian Bacon" ],
			"veggie" : ["Veggie Toppings: ", "Mushrooms, Green Pepper"]
		},
		{
			"fname": ["First Name: " , "Donald"],
			"lname": ["Last Name: " , "Duck"],
			"Address": ["Address: " , "Disney Land"],
			"date": ["Date: " , "02/07/2012"],
			"number": ["Number of Pizzas: ", "2"],
			"select" :["Size: ", "Large"],
			"crust" : ["Crust Type: ", "thick"],
			"meat" : ["Meat Toppings: " , "Peperoni" ],
			"veggie" : ["Veggie Toppings: ", "Mushrooms, Onions"]
		},
		{
			"fname": ["First Name: " , "Walter "],
			"lname": ["Last Name: " , "Bishop"],
			"Address": ["Address: " , "Harvard University University Hall Cambridge, MA 02138-3800"],
			"date": ["Date: " , "02/07/2012"],
			"number": ["Number of Pizzas: ", "4"],
			"select" :["Size: ", "Large"],
			"crust" : ["Crust Type: ", "pan"],
			"meat" : ["Meat Toppings: " , "Sausage, Beef" ],
			"veggie" : ["Veggie Toppings: ", "Black Olives, Onions"]
		},
		{
			"fname": ["First Name: " , "Ray"],
			"lname": ["Last Name: " , "Peloquin"],
			"Address": ["Address: " , "301 3rd St south, Virginia,Mn"],
			"date": ["Date: " , "02/28/2012"],
			"number": ["Number of Pizzas: ", "1"],
			"select" :["Size: ", "Small"],
			"crust" : ["Crust Type: ", "thin"],
			"meat" : ["Meat Toppings: " , "Canadian Bacon" ],
			"veggie" : ["Veggie Toppings: ", "Mushrooms, Green Pepper"]
		},
		{
			"fname": ["First Name: " , "Donald"],
			"lname": ["Last Name: " , "Duck"],
			"Address": ["Address: " , "Disney Land"],
			"date": ["Date: " , "02/07/2012"],
			"number": ["Number of Pizzas: ", "2"],
			"select" :["Size: ", "Large"],
			"crust" : ["Crust Type: ", "thick"],
			"meat" : ["Meat Toppings: " , "Peperoni" ],
			"veggie" : ["Veggie Toppings: ", "Mushrooms, Onions"]
		},
		{
			"fname": ["First Name: " , "Walter "],
			"lname": ["Last Name: " , "Bishop"],
			"Address": ["Address: " , "Harvard University University Hall Cambridge, MA 02138-3800"],
			"date": ["Date: " , "02/07/2012"],
			"number": ["Number of Pizzas: ", "4"],
			"select" :["Size: ", "Large"],
			"crust" : ["Crust Type: ", "pan"],
			"meat" : ["Meat Toppings: " , "Sausage, Beef" ],
			"veggie" : ["Veggie Toppings: ", "Black Olives, Onions"]
		}
	]	
};
    
    
    $.each(jsonItems.items, function (index, singleItem) {
    	var _id = Math.floor(Math.random() * 100001);
    	var toStore = JSON.stringify(singleItem);
    	localStorage.setItem(_id, toStore);
        console.log("Saved item " + index + " to storage with _id = " + _id);
    });
});    