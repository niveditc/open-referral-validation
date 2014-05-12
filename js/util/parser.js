/* Code to parse the given CSV file
 *
 * According to the CSV standard:
 * First line of the file will contain header categories
 * Remaining lines of the file will contain the rest of the code
 */

function parse(doc){
    //first line is the header
    var lines = doc.split('\n');
    var header = lines[0];
    var categories = header.split(',');
    var num_cat = categories.length;
    var data = {};
    for(var i = 0; i < categories.length; i++){
        data[categories[i]] = [];
    }

    for(var i = 1; i < lines.length - 1; i++){
        var fields = lines[i].split(',');
        for(var j = 0; j < num_cat; j++){
            data[categories[j]].push(fields[j]);
        }
    }

    return data;
}
