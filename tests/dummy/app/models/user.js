import Model from 'ember-data/model';
import attr  from 'ember-data/attr';

export default Model.extend({
  firstName: attr('string', { defaultValue: '13' }),
  lastName: attr('string'),
  aboutMe: attr('string'),
  country: attr('string'),
  gender: attr('string'),
  terms: attr('string')
});
