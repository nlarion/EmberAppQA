import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  date: DS.attr(),
  downVotes: DS.attr(),
  question: DS.belongsTo('question', {async: true}),
  theAnswer: DS.attr(),
  upVotes: DS.attr()  
});
