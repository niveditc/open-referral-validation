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

def isValidString(s) :
    return (s[0] == '"' and s[-1] == '"')

def isValidNum(n) :
    try :
        int(n)
        return True
    except ValueError :
        return False

def isValidDate(date) :
    a = date.split('/')
    try :
        m = int(a[0])
        d = int(a[1])
        y = int(a[2])
        if m < 1 and m > 12 :
            return False
        if d < 1 and d > 31 :
            return False
        if y < 0 and y > 3000 : #hardcoded coz code won't be used in y > 3000
            return False
        return True
    except ValueError :
        return False

def isValidStringList(data):
    a = data.split(',')
    for x in a :
        if not isValidString(x) :
            return False
    return True

def isValid(type, data) :
    if type == 'string' :
        return isValidString(data)
    elif type == 'int' :
        return isValidNum(data)
    elif type == 'date' :
        return isValidDate(data)
    elif type == 'string-list' :
        return isValidStringList(data)
    else :
        return False

#print repr(isValid('number', '7'))
