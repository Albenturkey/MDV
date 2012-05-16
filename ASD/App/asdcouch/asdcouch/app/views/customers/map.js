function (doc){
	if(doc._id.substr(0,5) === "order"){
		emit(doc._id.substr(5), {
			"First Name" : doc.fname[1],
			"Last Name"  : doc.lname[1]
		});
	}
};