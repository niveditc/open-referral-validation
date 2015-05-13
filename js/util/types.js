function isValidString(s) {
  return (s.charAt(0) == '"') && (s.charAt(s.length - 1) == '"');
}

function isValidNum(n) {
  var num = Number(n);
  return !isNaN(num);
}

function isValidDate(date) {
  var a = date.split('/');
  var m = Number(a[0]);
  var d = Number(a[1]);
  var y = Number(a[2]);
  if (isNaN(m) || isNaN(d) || isNaN(y)) {
    return false;
  }
  if (m < 1 || m > 12) {
    return false;
  }
  if (d < 1 || d > 31) {
    return false;
  }
  if (y < 0 || y > 3000) {
    //hardcoded coz code won't be used in y > 3000
    return false;
  }
  return true;
}

function isValidStringList(data) {
  if (data == '"[]"') return true;
  if (!isValidString(data)) {
    console.log("not string");
    return false;
  }
  if (!(data.charAt(1) == '[' && data.charAt(data.length - 2) == ']')) {
    console.log("not array");
    return false;
  }
  var s = data.substring(2, data.length - 2);
  var a = s.split(', ');
  for (var i = 0; i < a.length; i++) {
    if (!isValidString(a[i])) {
      console.log(a[i] + "is not a valid string");
      return false;
    }
  }
  return true;
}

function isValidPhoneNumber(data) {
  //TO BE IMPLEMENTED
  return true;
}

function isValid(type, data) {
  if (type == 'string') {
    return isValidString(data);
  } else if (type == 'number' || type == 'float') {
    return isValidNum(data);
  } else if (type == 'date') {
    return isValidDate(data);
  } else {
    return false;
  }
}
