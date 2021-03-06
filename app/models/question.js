import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  date: DS.attr(),
  downVotes: DS.attr(),
  notes: DS.attr(),
  tag: DS.attr(),
  theQuestion: DS.attr(),
  upVotes: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
