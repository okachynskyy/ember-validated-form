import Ember from 'ember';
import UserValidations from 'dummy/validations/user';
import { task, timeout } from 'ember-concurrency';

import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';

export default Ember.Controller.extend({
  UserValidations,

  init() {
    this._super(...arguments);
    const changeset = new Changeset(this.store.createRecord('user'), lookupValidator(this.UserValidations), this.UserValidations, {
      skipValidate: true
    });
    this.set('changeset', changeset);
  },

  colors: [
    { name: 'Red', color: 'red' },
    { name: 'Green', color: 'green' },
    { name: 'Blue', color: 'blue' }
  ],
  countries: ['United States', 'United Kingdom', 'Switzerland', 'Other'],
  genders: [
    {
      key: 'm',
      label: 'Male'
    },
    {
      key: 'f',
      label: 'Female'
    }
  ],

  submit: task(function*(model) {
    console.log('saving', model);
    yield timeout(1000);
    console.log('saved!');
  }),

  actions: {
    cancel() {
      console.log('cancel');
    }
  }
});
