import DS from 'ember-data';

export default DS.RESTAdapter.extends({
  host: 'https://jsonplaceholder.typicode.com',
});
