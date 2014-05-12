function check_org(data){
    var errors = [];
    var reqd_fields = {'organization_id' : 'string',
                       'name' : 'string'};
    var opt_fields = {'fein' : 'string',
                      'aka' : 'string',
                      'legal_status' : 'string',
                      'year_of_incorporation' : 'date',
                      'licenses' : 'string-list',
                      'accreditation' : 'string-list'};
    var all_fields = {};
    for(var x in reqd_fields){
        all_fields[x] = reqd_fields[x];
    }
    for(var x in opt_fields){
        all_fields[x] = opt_fields[x];
    }

    var reqd_keys = Object.keys(reqd_fields);
    var all_keys = Object.keys(all_fields);
    var data_keys = Object.keys(data);

    //Checking that all required fields are present
    for(var i = 0; i < reqd_keys.length; i++){
        if(data_keys.indexOf(reqd_keys[i]) == -1){
            errors.push("Required field '" + reqd_keys[i] + "' not present");
        }
    }

    //Checking that the field names present are valid
    for(var i = 0; i < data_keys.length; i++){
        var f = data_keys[i];
        if(all_keys.indexOf(f) == -1){
            errors.push("Field '" + f + "' is invalid");
        } else{
            for(var j = 0; j < data[f].length; j++){
                if(!isValid(all_fields[f], data[f][j])){
                    errors.push("Field " + data[f][j] + " is not a valid "
                                + all_fields[f]);
                }
            }
        }
    }

    if(errors.length > 0){
        for(var i = 0; i < errors.length; i++){
            console.log(errors[i] + "\n");
        }
        return false;
    } else return true;
}
