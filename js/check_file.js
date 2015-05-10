function check_file(data, reqd_fields, opt_fields) {
  var errors = [];
  var all_fields = {};
  for (var x in reqd_fields) {
    all_fields[x] = reqd_fields[x];
  }
  for (var x in opt_fields) {
    all_fields[x] = opt_fields[x];
  }

  var reqd_keys = Object.keys(reqd_fields);
  var all_keys = Object.keys(all_fields);
  var data_keys = Object.keys(data);

  //Checking that all required fields are present
  for (var i = 0; i < reqd_keys.length; i++) {
    if (data_keys.indexOf(reqd_keys[i]) == -1) {
      errors.push("Required field '" + reqd_keys[i] + "' not present");
    }
  }

  //Checking that the field names present are valid
  for (var i = 0; i < data_keys.length; i++) {
    var f = data_keys[i];
    if (all_keys.indexOf(f) == -1) {
      errors.push("Field '" + f + "' is invalid");
    } else {
      for (var j = 0; j < data[f].length; j++) {
        if (!isValid(all_fields[f], data[f][j])) {
          errors.push("Field " + data[f][j] + " on line " + (j + 2) +
                      " is not a valid " + all_fields[f]);
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

function check_org(data) {
  var reqd_fields = {'organization_id' : 'string',
                     'name' : 'string'};
  var opt_fields = {'fein' : 'string',
                    'aka' : 'string',
                    'legal_status' : 'string',
                    'year_of_incorporation' : 'date',
                    'licenses' : 'string-list',
                    'accreditation' : 'string-list'};
  return check_file(data, reqd_fields, opt_fields);
}

function check_loc(data) {
  var reqd_fields = {'location_id' : 'string',
                     'organization_id' : 'string',
                     'description' : 'string',
                     'short_desc' : 'string',
                     'name' : 'string'};
  var opt_fields = {'aka' : 'string',
                    'accessibility' : 'comma-sep-strings',
                    'coordinates' : 'text',
                    'location_hours' : 'string',
                    'location_languages' : 'comma-sep-strings',
                    'phones' : 'object-list',
                    'emails' : 'string-list',
                    'transportation' : 'string'};
  return check_file(data, reqd_fields, opt_fields);
}

function check_service(data) {
  var reqd_fields = {'organization_id' : 'string',
                     'location_id' : 'string',
                     'service_id' : 'string'};
  var opt_fields = {'name' : 'string',
                    'audience' : 'string',
                    'description' : 'string',
                    'eligibility' : 'string',
                    'fees' : 'string',
                    'keywords' : 'text',
                    'how_to_apply' : 'string',
                    'service_areas' : 'text',
                    'short_desc' : 'string',
                    'service_hours' : 'string',
                    'service_languages' : 'comma-sep-strings',
                    'wait' : 'string',
                    'method_of_payment' : 'comma-sep-strings'};
  return check_file(data, reqd_fields, opt_fields);
}

function check_address(data) {
  var reqd_fields = {'organization_id' : 'string',
                     'location_id' : 'string',
                     'name' : 'string',
                     'type' : 'string',
                     'street_1' : 'string',
                     'street_2' : 'string',
                     'city' : 'string',
                     'state' : 'string',
                     'postal_code' : 'string'};
  var opt_fields = {'attention' : 'string',
                    'country' : 'string'};
  return check_file(data, reqd_fields, opt_fields);
}

function check_contact(data) {
  var reqd_fields = {'organization_id' : 'string',
                     'location_id' : 'string',
                     'service_id' : 'string',
                     'type' : 'string',
                     'contact_name' : 'string',
                     'title' : 'string'};
  var opt_fields = {'fax' : 'string',
                    'email' : 'string',
                    'phone' : 'string',
                    'extension' : 'string'};
  return check_file(data, reqd_fields, opt_fields);
}

function check_phone(data) {
  var reqd_fields = {'organization_id' : 'string',
                     'location_id' : 'string',
                     'service_id' : 'string',
                     'type' : 'string',
                     'phone_number' : 'string'};
  var opt_fields = {'vanity_number' : 'string',
                    'phone_extension' : 'string',
                    'phone_hours' : 'string',
                    'department' : 'string',
                    'country_code' : 'string'};
  return check_file(data, reqd_fields, opt_fields);
}

function check_internet(data) {
  var reqd_fields = {'service_id' : 'string',
                     'resource' : 'text',
                     'resource_type' : 'string'};
  var opt_fields = {'organization_id' : 'string',
                    'location_id' : 'string'};
  return check_file(data, reqd_fields, opt_fields);
}

function check_funding(data) {
  var reqd_fields = {'service_id' : 'string',
                     'source' : 'string'};
  var opt_fields = {'organization_id' : 'string'};
  return check_file(data, reqd_fields, opt_fields);
}
