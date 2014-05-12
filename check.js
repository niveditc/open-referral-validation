function print(){
    var elem = document.getElementById("org");
    var file = elem.files[0];
    var reader = new FileReader();
    reader.onloadend = function(e){
        var doc = reader.result;
        var parsed = parse(doc);
        (check_org(parsed));
    }
    reader.readAsText(file);
}

