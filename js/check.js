function print_org() {
  var elem = document.getElementById("org");
  var file = elem.files[0];
  var reader = new FileReader();
  reader.onloadend = function(e) {
    var doc = reader.result;
    var parsed = parse(doc);
    var p1 = document.getElementById("org-check");
    var checkOrg = check_org(parsed);
    p1.innerText = (checkOrg.valid) ? "File is valid" : checkOrg.errors;
    if (checkOrg.valid) {
      $("#org-header").removeClass("invalid").addClass("valid");
    } else {
      $("#org-header").removeClass("valid").addClass("invalid");
    }
  };
  reader.readAsText(file);
}

function print_loc() {
  var elem = document.getElementById("loc");
  var file = elem.files[0];
  var reader = new FileReader();
  reader.onloadend = function(e) {
    var doc = reader.result;
    var parsed = parse(doc);
    var p1 = document.getElementById("loc-check");
    var checkLoc = check_loc(parsed);
    p1.innerText = (checkLoc.valid) ? "File is valid" : checkLoc.errors;
    if (checkLoc.valid) {
      $("#loc-header").removeClass("invalid").addClass("valid");
    } else {
      $("#loc-header").removeClass("valid").addClass("invalid");
    }
  };
  reader.readAsText(file);
}

function print_service() {
  var elem = document.getElementById("service");
  var file = elem.files[0];
  var reader = new FileReader();
  reader.onloadend = function(e) {
    var doc = reader.result;
    var parsed = parse(doc);
    var p1 = document.getElementById("service-check");
    var checkService = check_service(parsed);
    p1.innerText = (checkService.valid) ? "File is valid" : checkService.errors;
    if (checkService.valid) {
      $("#service-header").removeClass("invalid").addClass("valid");
    } else {
      $("#service-header").removeClass("valid").addClass("invalid");
    }
  }
  reader.readAsText(file);
}

function print_address() {
  var elem = document.getElementById("address");
  var file = elem.files[0];
  var reader = new FileReader();
  reader.onloadend = function(e) {
    var doc = reader.result;
    var parsed = parse(doc);
    var p1 = document.getElementById("address-check");
    var checkAddress = check_address(parsed);
    p1.innerText = (checkAddress.valid) ? "File is valid" : checkAddress.errors;
    if (checkAddress.valid) {
      $("#address-header").removeClass("invalid").addClass("valid");
    } else {
      $("#address-header").removeClass("valid").addClass("invalid");
    }
  }
  reader.readAsText(file);
}

function print_contact() {
  var elem = document.getElementById("contact");
  var file = elem.files[0];
  var reader = new FileReader();
  reader.onloadend = function(e){
    var doc = reader.result;
    var parsed = parse(doc);
    var p1 = document.getElementById("contact-check");
    var checkContact = check_contact(parsed);
    p1.innerText = (checkContact.valid) ? "File is valid" : checkContact.errors;
    if (checkContact.valid) {
      $("#contact-header").removeClass("invalid neutral").addClass("valid");
    } else {
      $("#contact-header").removeClass("valid neutral").addClass("invalid");
    }
  }
  reader.readAsText(file);
}

function print_phone() {
  var elem = document.getElementById("phone");
  var file = elem.files[0];
  var reader = new FileReader();
  reader.onloadend = function(e) {
    var doc = reader.result;
    var parsed = parse(doc);
    var p1 = document.getElementById("phone-check");
    var checkPhone = check_phone(parsed);
    p1.innerText = (checkPhone.valid) ? "File is valid" : checkPhone.errors;
    if (checkPhone.valid) {
      $("#phone-header").removeClass("invalid neutral").addClass("valid");
    } else {
      $("#phone-header").removeClass("valid neutral").addClass("invalid");
    }
  }
  reader.readAsText(file);
}

function print_internet() {
  var elem = document.getElementById("internet");
  var file = elem.files[0];
  var reader = new FileReader();
  reader.onloadend = function(e) {
    var doc = reader.result;
    var parsed = parse(doc);
    var p1 = document.getElementById("internet-check");
    var checkInternet = check_internet(parsed);
    p1.innerText = (checkInternet.valid) ? "File is valid" : checkInternet.errors;
    if (checkInternet.valid) {
      $("#internet-header").removeClass("invalid neutral").addClass("valid");
    } else {
      $("#internet-header").removeClass("valid neutral").addClass("invalid");
    }
  }
  reader.readAsText(file);
}

function print_funding() {
  var elem = document.getElementById("funding");
  var file = elem.files[0];
  var reader = new FileReader();
  reader.onloadend = function(e) {
    var doc = reader.result;
    var parsed = parse(doc);
    var p1 = document.getElementById("funding-check");
    var checkFunding = check_funding(parsed);
    p1.innerText = (checkFunding.valid) ? "File is valid" : checkFunding.errors;
    if (checkFunding.valid) {
      $("#funding-header").removeClass("invalid neutral").addClass("valid");
    } else {
      $("#funding-header").removeClass("valid neutral").addClass("invalid");
    }
  }
  reader.readAsText(file);
}
