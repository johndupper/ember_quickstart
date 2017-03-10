import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['John', 'Kimberly', 'Maren', 'Danny']
  }
});
