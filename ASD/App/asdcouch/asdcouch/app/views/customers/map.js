function (doc){
	if(doc._id.substr(0,5) === "order"){
		emit(doc._id.substr(5), {
			"First" : doc.fname[1],
			"Last"  : doc.lname[1]
		});
	}
};