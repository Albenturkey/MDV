function(doc) {
  if (doc._id.substr(0,5) === "order"){
    emit(doc._id);
  }
};