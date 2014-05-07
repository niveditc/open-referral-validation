from util import *
def check_org(data) :
    reqd_fields = {'organization_id' : 'string', 'name' : 'string'}
    opt_fields = {'fein' : 'string', 'aka' : 'string',
                  'legal_status' : 'string', 'year_of_incorporation' : 'date',
                  'licenses' : 'string-list', 'accreditation' : 'string-list'}
    all_fields = dict(reqd_fields.items() + opt_fields.items())
    data_fields = set(data.keys())
    for f in set(reqd_fields.keys()) :
        if f not in data_fields :
            return "reqd keys False"

    extra_fields = data_fields - set(reqd_fields.keys())
    for f in extra_fields :
        if f not in set(opt_fields.keys()) :
            return "opt fields False"

    for f in data_fields :
        for x in data[f] :
            if not isValid(all_fields[f], x) :
                return "field invalid False" + x

    return True

print "File valid for organizations.csv : " + repr(check_org(parse('../sample/organization1.csv'))) + '\n'
print "File valid for organizations.csv : " + repr(check_org(parse('../sample/organization2.csv'))) + '\n'
print "File valid for organizations.csv : " + repr(check_org(parse('../sample/organization3.csv'))) + '\n'
print "File valid for organizations.csv : " + repr(check_org(parse('../ohana_in_openreferral/organization.csv'))) + '\n'

