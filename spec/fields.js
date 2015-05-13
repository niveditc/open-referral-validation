var spec_fields =
{
  'id' : {'type' : 'string', 'req' : 'required'},
  'name' : {'type' : 'string', 'req' : 'required'},
  'alternate_name' : {'type' : 'string', 'req' : 'recommended'},
  'description' : {'type' : 'string', 'req' : 'required'},
  'email' : {'type' : 'string', 'req' : 'recommended'},
  'url' : {'type' : 'string', 'req' : 'optional'},
  'tax_status' : {'type' : 'string', 'req' : 'optional'},
  'tax_id' : {'type' : 'string', 'req' : 'optional'},
  'year_incorporated' : {'type' : 'date', 'req' : 'optional'},
  'organization_id' : {'type' : 'string', 'req' : 'required'},
  'program_id' : {'type' : 'string', 'req' : 'required'},
  'location_id' : {'type' : 'string', 'req' : 'required'},
  'status' : {'type' : 'string', 'req' : 'required'},
  'application_process' : {'type' : 'string', 'req' : 'recommended'},
  'wait_time' : {'type' : 'string', 'req' : 'optional'},
  'transportation' : {'type' : 'string', 'req' : 'recommended'},
  'latitude' : {'type' : 'float', 'req' : 'recommended'},
  'longitude' : {'type' : 'float', 'req' : 'recommended'},
  'service_id' : {'type' : 'string', 'req' : 'required'},
  'contact_id' : {'type' : 'string', 'req' : 'required'},
  'number' : {'type' : 'phone-number', 'req' : 'required'},
  'extension' : {'type' : 'number', 'req' : 'optional'},
  'type' : {'type' : 'string', 'req' : 'optional'},
  'department' : {'type' : 'string', 'req' : 'optional'},
  'country_prefix' : {'type' : 'number', 'req' : 'optional'},
  'title' : {'type' : 'string', 'req' : 'optional'},
  'attention' : {'type' : 'string', 'req' : 'optional'},
  'address1' : {'type' : 'string', 'req' : 'required'},
  'address2' : {'type' : 'string', 'req' : 'optional'},
  'address3' : {'type' : 'string', 'req' : 'optional'},
  'address4' : {'type' : 'string', 'req' : 'optional'},
  'city' : {'type' : 'string', 'req' : 'required'},
  'state_province' : {'type' : 'string', 'req' : 'required'},
  'postal_code' : {'type' : 'number', 'req' : 'required'},
  'country' : {'type' : 'string', 'req' : 'required'},
  'location' : {'type' : 'string', 'req' : 'required'},
  'weekday' : {'type' : 'string', 'req' : 'required'},
  'opens_at' : {'type' : 'string', 'req' : 'optional'},
  'closes_at' : {'type' : 'string', 'req' : 'optional'},
  'closed' : {'type' : 'boolean', 'req' : 'required'},
  'start_date' : {'type' : 'date', 'req' : 'required'},
  'end_date' : {'type' : 'date', 'req' : 'required'},
  'resource_id' : {'type' : 'string', 'req' : 'required'},
  'last_action_date' : {'type' : 'date', 'req' : 'required'},
  'last_action_type' : {'type' : 'string', 'req' : 'required'},
  'field_name' : {'type' : 'string', 'req' : 'required'},
  'previous_value' : {'type' : 'string', 'req' : 'required'},
  'replacement_value' : {'type' : 'string', 'req' : 'required'},
  'updated_by' : {'type' : 'string', 'req' : 'required'},
  'accreditation' : {'type' : 'string', 'req' : 'optional'},
  'license' : {'type' : 'string', 'req' : 'optional'},
  'service' : {'type' : 'string', 'req' : 'required'},
  'eligibility' : {'type' : 'string', 'req' : 'recommended'},
  'service_area' : {'type' : 'string', 'req' : 'required'},
  'document' : {'type' : 'string', 'req' : 'optional'},
  'fee' : {'type' : 'string', 'req' : 'recommended'},
  'payment' : {'type' : 'string', 'req' : 'recommended'},
  'language' : {'type' : 'string', 'req' : 'recommended'},
  'accessibility' : {'type' : 'string', 'req' : 'recommended'},
  'character_set' : {'type' : 'string', 'req' : 'required'}
}