"""Code to parse the given CSV file

According to the CSV standard,
First line of the file will contain header categories
Remaining lines of the file will contain the rest of the code"""

def parse(filename) :
    f = open(filename, 'r')
    # first line is the header
    header = f.readline()[:-1]
    categories = header.split(',')
    num_cat = len(categories)
    data = {}
    for x in categories :
        data[x] = [];

    line = f.readline()[:-1]
    while (line != '') :
        fields = line.split(',')
        for i in range(num_cat) :
            data[categories[i]].append(fields[i])
        line = f.readline()[:-1]

    print "Data : " + repr(data)
    f.close()
    return data

