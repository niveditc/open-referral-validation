function printEntity(entity) {
  var elem = document.getElementById(entity);
  var file = elem.files[0];
  var reader = new FileReader();
  reader.onloadend = function(e) {
    var doc = reader.result;
    var parsed = parse(doc);
    var p1 = document.getElementById(entity + "-check");
    var check = check_file(parsed, spec_files[entity]);
    p1.innerText = (check.valid) ? "File is valid" : check.errors;
    var header = $("#" + entity + "-header");
    if (check.valid) {
      header.removeClass("invalid neutral").addClass("valid");
    } else {
      header.removeClass("valid neutral").addClass("invalid");
    }
  };
  reader.readAsText(file);
}
