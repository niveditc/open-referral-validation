from util import *
#from types import *
#from parser import parse
def check_org(data) :
    reqd_fields = {'organization_id' : 'int', 'name' : 'string'}
    opt_fields = {'fein' : 'string', 'aka' : 'string',
                  'legal_status' : 'string', 'year_of_incorporation' : 'date',
                  'licenses' : 'string-list', 'accreditation' : 'string-list'}
    all_fields = dict(reqd_fields.items() + opt_fields.items())
    data_fields = set(data.keys())
    for f in set(reqd_fields.keys()) :
        if f not in data_fields :
            return False

    extra_fields = data_fields - set(reqd_fields.keys())
    for f in extra_fields :
        if f not in set(opt_fields.keys()) :
            return False

    for f in data_fields :
        for x in data[f] :
            if not isValid(all_fields[f], x) :
                return False

    return True

print "File valid for organizations.csv : " + repr(check_org(parse('../sample/organization1.csv')))
