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
