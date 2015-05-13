function check_file(data, all_keys) {
  var errors = [];
  var data_keys = Object.keys(data);

  //Getting the required keys
  var reqd_keys = [];
  for (var i = 0; i < all_keys.length; i++) {
    if (!(all_keys[i] in spec_fields)) {
      errors.push(all_keys[i] + " is not a valid field")
    } else if (spec_fields[all_keys[i]].req === "required") {
      reqd_keys.push(all_keys[i]);
    }
  }

  //Checking that all required fields are present
  for (var i = 0; i < reqd_keys.length; i++) {
    if (data_keys.indexOf(reqd_keys[i]) == -1) {
      errors.push("Required field '" + reqd_keys[i] + "' not present");
    }
  }

  //Checking that the field names present are valid
  for (var i = 0; i < data_keys.length; i++) {
    var f = data_keys[i];
    if (all_keys.indexOf(f) == -1 || !(f in spec_fields)) {
      errors.push("Field '" + f + "' is invalid");
    } else {
      for (var j = 0; j < data[f].length; j++) {
        if (!isValid(spec_fields[f].type, data[f][j])) {
          errors.push("Field " + data[f][j] + " on line " + (j + 2) +
                      " is not a valid " + spec_fields[f].type);
        }
      }
    }
  }

  if (errors.length > 0) {
    var errorString = "";
    for (var i = 0; i < errors.length; i++) {
      errorString += (errors[i] + "\n");
    }
    return {valid : false, errors : errorString};
  } else {
    return {valid : true, errors : ""};
  }
}
