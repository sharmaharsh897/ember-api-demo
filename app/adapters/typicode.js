import DS from 'ember-data';

export default DS.RESTAdapter.extends({
  // typicode api
  host: 'https://jsonplaceholder.typicode.com',
});
