function isValidString(s){
    return (s.charAt(0) == '"') && (s.charAt(s.length - 1) == '"');
}

function isValidNum(n){
    var num = Number(n);
    return !isNaN(num);
}

function isValidDate(date){
    var a = date.split('/');
    var m = Number(a[0]);
    var d = Number(a[1]);
    var y = Number(a[2]);
    if(isNaN(m) || isNaN(d) || isNaN(y)){
        return false;
    }
    if(m < 1 || m > 12){
        return false;
    }
    if(d < 1 || d > 31){
        return false;
    }
    if(y < 0 || y > 3000){
        //hardcoded coz code won't be used in y > 3000
        return false;
    }
    return true;
}

function isValidStringList(data){
    var a = data.split(',');
    for(var i = 0; i < a.length; i++){
        if(!isValidString(a[i])){
            return false;
        }
    }
    return true;
}

function isValid(type, data){
    if(type == 'string'){
        return isValidString(data);
    } else if(type == 'int'){
        return isValidNum(data);
    } else if(type == 'date'){
        return isValidDate(data);
    } else if(type == 'string-list'){
        return isValidStringList(data);
    } else{
        return false;
    }
}
