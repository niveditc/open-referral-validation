/* Code to parse the given CSV file
 *
 * According to the CSV standard:
 * First line of the file will contain header categories
 * Remaining lines of the file will contain the rest of the code
 */

function parse(doc) {
  //first line is the header
  var lines = doc.split('\n');
  var header = lines[0];
  var categories = header.split(',');
  var num_cat = categories.length;
  var data = {};
  for (var i = 0; i < categories.length; i++) {
    data[categories[i]] = [];
  }

  for (var k = 1; k < lines.length - 1; k++) {
    var line = lines[k];
    var j = 0;
    var ended = true;
    var searching = '';
    var word = '';

    for (var i = 0; i < line.length; i++) {
      if (ended) {
        if (line.charAt(i) != ',') {
          ended = false;
          word = line.charAt(i);
          if (line.charAt(i) == '"') {
            if (line.charAt(i+1) == '[') {
              searching = ']"';
              word = word + '[';
              i++;
            } else {
              searching = '"';
            }
          }
        } else {
          j++;
        }
      } else {
        if (line.substring(i, i + searching.length) == searching) {
          word = word + searching;
          i = i + searching.length - 1;
          data[categories[j]].push(word);
          ended = true;
        } else {
          word = word + line.charAt(i);
        }
      }
    }
  }
  return data;
}
